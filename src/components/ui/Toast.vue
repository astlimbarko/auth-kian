<template>
  <Teleport to="body">
    <Transition name="toast">
      <div v-if="toast.show" 
           class="toast" 
           :class="toast.type"
           @click="hideToast">
        <div class="toast-content">
          <div class="toast-icon">
            <i v-if="toast.type === 'success'" class="fas fa-check-circle"></i>
            <i v-else-if="toast.type === 'error'" class="fas fa-exclamation-circle"></i>
            <i v-else-if="toast.type === 'warning'" class="fas fa-exclamation-triangle"></i>
            <i v-else class="fas fa-info-circle"></i>
          </div>
          <p class="toast-message">{{ toast.message }}</p>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup>
import { watch } from 'vue';
import { useUiStore } from '../../stores/uiStore';

const uiStore = useUiStore();
const { toast, hideToast } = uiStore;

// Configurar el temporizador para ocultar el toast automáticamente
watch(() => toast.value.show, (newValue) => {
  if (newValue) {
    setTimeout(() => {
      hideToast();
    }, toast.value.timeout);
  }
});
</script>

<style scoped>
.toast {
  position: fixed;
  bottom: 20px;
  right: 20px;
  padding: var(--spacing-md);
  border-radius: var(--border-radius);
  box-shadow: var(--shadow-md);
  cursor: pointer;
  transition: all 0.3s ease;
  z-index: 1000;
  min-width: 300px;
  max-width: 400px;
}

.toast-content {
  display: flex;
  align-items: center;
  gap: var(--spacing-md);
}

.toast-icon {
  font-size: 1.5rem;
}

.toast-message {
  margin: 0;
  font-size: 0.9rem;
  line-height: 1.4;
}

/* Estilos específicos para cada tipo de toast */
.success {
  background-color: var(--success-color);
  color: white;
}

.error {
  background-color: var(--error-color);
  color: white;
}

.warning {
  background-color: var(--warning-color);
  color: white;
}

.info {
  background-color: var(--info-color);
  color: white;
}

/* Animaciones */
.toast-enter-active,
.toast-leave-active {
  transition: all 0.3s ease;
}

.toast-enter-from,
.toast-leave-to {
  opacity: 0;
  transform: translateY(20px);
}
</style> 