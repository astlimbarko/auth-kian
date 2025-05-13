<template>
  <Teleport to="body">
    <Transition name="dialog-fade">
      <div 
        v-if="show" 
        class="dialog-overlay"
        @click="onOverlayClick"
      >
        <div 
          class="dialog-container"
          :class="`dialog-${type}`"
          @click.stop
          role="dialog"
          aria-modal="true"
          :aria-labelledby="`dialog-title-${dialogId}`"
        >
          <div class="dialog-header">
            <h3 :id="`dialog-title-${dialogId}`" class="dialog-title">
              <i :class="iconClass" class="dialog-icon"></i>
              {{ title }}
            </h3>
            <button
              class="dialog-close"
              @click="onCancel"
              aria-label="Cerrar diálogo"
            >
              <i class="fas fa-times"></i>
            </button>
          </div>
          
          <div class="dialog-content">
            <p class="dialog-message">{{ message }}</p>
          </div>
          
          <div class="dialog-footer">
            <button
              class="dialog-btn dialog-btn-cancel"
              @click="onCancel"
            >
              {{ cancelBtnText }}
            </button>
            <button
              class="dialog-btn dialog-btn-confirm"
              :class="`dialog-btn-${type}`"
              @click="onConfirm"
              ref="confirmButton"
            >
              {{ confirmBtnText }}
            </button>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup>
import { computed, ref, onMounted, nextTick } from 'vue';

// ID único para accesibilidad
const dialogId = ref(Math.random().toString(36).substring(2, 9));

const props = defineProps({
  show: {
    type: Boolean,
    default: false
  },
  title: {
    type: String,
    default: 'Confirmar acción'
  },
  message: {
    type: String,
    default: '¿Estás seguro de realizar esta acción?'
  },
  confirmBtnText: {
    type: String,
    default: 'Aceptar'
  },
  cancelBtnText: {
    type: String,
    default: 'Cancelar'
  },
  type: {
    type: String,
    default: 'info',
    validator: (value) => ['info', 'success', 'warning', 'error'].includes(value)
  },
  closeOnOverlayClick: {
    type: Boolean,
    default: true
  }
});

const emit = defineEmits(['confirm', 'cancel']);

// Referencias
const confirmButton = ref(null);

// Propiedades computadas
const iconClass = computed(() => {
  const icons = {
    info: 'fas fa-info-circle',
    success: 'fas fa-check-circle',
    warning: 'fas fa-exclamation-triangle',
    error: 'fas fa-exclamation-circle'
  };
  return icons[props.type] || icons.info;
});

// Métodos
const onConfirm = () => {
  emit('confirm');
};

const onCancel = () => {
  emit('cancel');
};

const onOverlayClick = () => {
  if (props.closeOnOverlayClick) {
    onCancel();
  }
};

// Enfocar el botón de confirmación cuando se muestra el diálogo
onMounted(() => {
  watch(() => props.show, (newValue) => {
    if (newValue) {
      nextTick(() => {
        confirmButton.value?.focus();
      });
    }
  }, { immediate: true });
});
</script>

<style scoped>
.dialog-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10001;
}

.dialog-container {
  width: 90%;
  max-width: 500px;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.dialog-header {
  padding: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #eee;
}

.dialog-title {
  margin: 0;
  font-size: 18px;
  font-weight: 600;
  display: flex;
  align-items: center;
}

.dialog-icon {
  margin-right: 10px;
}

.dialog-close {
  background: transparent;
  border: none;
  font-size: 16px;
  cursor: pointer;
  color: #999;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 4px;
  transition: background-color 0.2s, color 0.2s;
}

.dialog-close:hover {
  background-color: rgba(0, 0, 0, 0.05);
  color: #555;
}

.dialog-content {
  padding: 16px;
  flex-grow: 1;
}

.dialog-message {
  margin: 0;
  font-size: 16px;
  line-height: 1.5;
}

.dialog-footer {
  padding: 16px;
  display: flex;
  justify-content: flex-end;
  gap: 12px;
  border-top: 1px solid #eee;
}

.dialog-btn {
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s;
}

.dialog-btn-cancel {
  background-color: #f5f5f5;
  color: #555;
}

.dialog-btn-cancel:hover {
  background-color: #e0e0e0;
}

.dialog-btn-confirm {
  color: white;
}

.dialog-btn-info {
  background-color: #1890ff;
}

.dialog-btn-info:hover {
  background-color: #096dd9;
}

.dialog-btn-success {
  background-color: #52c41a;
}

.dialog-btn-success:hover {
  background-color: #389e0d;
}

.dialog-btn-warning {
  background-color: #faad14;
}

.dialog-btn-warning:hover {
  background-color: #d48806;
}

.dialog-btn-error {
  background-color: #ff4d4f;
}

.dialog-btn-error:hover {
  background-color: #cf1322;
}

/* Tipos de diálogo */
.dialog-info .dialog-icon {
  color: #1890ff;
}

.dialog-success .dialog-icon {
  color: #52c41a;
}

.dialog-warning .dialog-icon {
  color: #faad14;
}

.dialog-error .dialog-icon {
  color: #ff4d4f;
}

/* Animaciones */
.dialog-fade-enter-active,
.dialog-fade-leave-active {
  transition: opacity 0.3s ease;
}

.dialog-fade-enter-active .dialog-container,
.dialog-fade-leave-active .dialog-container {
  transition: transform 0.3s ease, opacity 0.3s ease;
}

.dialog-fade-enter-from,
.dialog-fade-leave-to {
  opacity: 0;
}

.dialog-fade-enter-from .dialog-container,
.dialog-fade-leave-to .dialog-container {
  transform: scale(0.9);
  opacity: 0;
}

/* Tema oscuro */
[data-theme="dark"] .dialog-container {
  background-color: #262626;
  color: #e0e0e0;
}

[data-theme="dark"] .dialog-header,
[data-theme="dark"] .dialog-footer {
  border-color: #333;
}

[data-theme="dark"] .dialog-close {
  color: #bbb;
}

[data-theme="dark"] .dialog-close:hover {
  background-color: rgba(255, 255, 255, 0.1);
  color: white;
}

[data-theme="dark"] .dialog-btn-cancel {
  background-color: #333;
  color: #e0e0e0;
}

[data-theme="dark"] .dialog-btn-cancel:hover {
  background-color: #444;
}

/* Media queries */
@media (max-width: 600px) {
  .dialog-container {
    width: 95%;
  }

  .dialog-footer {
    flex-direction: column-reverse;
  }

  .dialog-btn {
    width: 100%;
    padding: 12px;
  }
}
</style> 