<template>
  <div class="form-container">
    <form @submit.prevent="guardarPrecios">
      <div class="price-form">
        <!-- Precio Estándar -->
        <div class="price-card">
          <div class="price-card-header">
            <h3>Standardpris</h3>
          </div>
          
          <div class="price-input-container">
            <div class="input-wrapper">
              <input
                type="number"
                step="0.0000001"
                min="0"
                v-model="precioEstandar"
                id="precioEstandar"
                placeholder="1.0989011"
                required
              />
              <span class="currency-indicator">Bs.</span>
            </div>
          </div>
        </div>

        <!-- Precio Especial -->
        <div class="price-card">
          <div class="price-card-header">
            <h3>Specialpris</h3>
          </div>
          
          <div class="price-input-container">
            <div class="input-wrapper">
              <input
                type="number"
                step="0.0000001"
                min="0"
                v-model="precioEspecial"
                id="precioEspecial"
                placeholder="1.1111111"
                required
              />
              <span class="currency-indicator">Bs.</span>
            </div>
          </div>
        </div>

        <!-- Botón de guardar -->
        <div class="form-actions">
          <button
            type="submit"
            class="save-button"
            :disabled="guardando"
          >
            <span v-if="guardando" class="loader"></span>
            {{ guardando ? 'Sparar...' : 'Spara ändringar' }}
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref, defineProps, defineEmits, watch } from 'vue';

// Definir las props
const props = defineProps({
  valorEstandarInicial: {
    type: String,
    required: true
  },
  valorEspecialInicial: {
    type: String,
    required: true
  },
  estaGuardando: {
    type: Boolean,
    default: false
  }
});

// Definir los eventos
const emit = defineEmits(['guardar']);

// Estado local
const precioEstandar = ref(props.valorEstandarInicial);
const precioEspecial = ref(props.valorEspecialInicial);
const guardando = ref(props.estaGuardando);

// Actualizar cuando cambian las props
const actualizarValores = () => {
  console.log('FormularioPrecios: Actualizando valores');
  console.log('valorEstandarInicial:', props.valorEstandarInicial);
  console.log('valorEspecialInicial:', props.valorEspecialInicial);
  
  // Solo actualizar si los valores iniciales no están vacíos
  if (props.valorEstandarInicial && props.valorEstandarInicial !== '') {
    precioEstandar.value = props.valorEstandarInicial;
  }
  
  if (props.valorEspecialInicial && props.valorEspecialInicial !== '') {
    precioEspecial.value = props.valorEspecialInicial;
  }
  
  guardando.value = props.estaGuardando;
  
  console.log('Valores actualizados:');
  console.log('precioEstandar:', precioEstandar.value);
  console.log('precioEspecial:', precioEspecial.value);
};

// Observar cambios en las props
watch(() => props.valorEstandarInicial, actualizarValores);
watch(() => props.valorEspecialInicial, actualizarValores);
watch(() => props.estaGuardando, () => guardando.value = props.estaGuardando);

// Método para guardar precios
const guardarPrecios = () => {
  emit('guardar', {
    estandar: parseFloat(precioEstandar.value),
    especial: parseFloat(precioEspecial.value)
  });
};
</script>

<style scoped>
/* Contenedor del formulario */
.form-container {
  padding: min(5vh, 1.5rem);
  box-sizing: border-box;
  width: 100%;
  overflow: hidden;
}

/* Formulario de precios */
.price-form {
  display: flex;
  flex-direction: column;
  gap: min(3vh, 1.25rem);
  width: 100%;
  box-sizing: border-box;
}

.price-card {
  background-color: #f9fafc;
  border-radius: 8px;
  padding: min(3vh, 1.2rem);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
  border: 1px solid var(--border-color, #e1e4e8);
}

.price-card-header {
  margin-bottom: 0.75rem;
  text-align: center;
}

.price-card-header h3 {
  font-size: 1.125rem;
  font-weight: 600;
  margin: 0;
  color: var(--text-primary, #333);
}

.price-input-container {
  margin-top: 0.5rem;
  display: flex;
  justify-content: center;
}

.input-wrapper {
  position: relative;
  width: 95%;
}

.input-wrapper input {
  width: 100%;
  padding: 0.75rem 2.5rem 0.75rem 1rem;
  border: 1px solid var(--border-color, #e1e4e8);
  border-radius: 8px;
  font-size: 1rem;
  transition: all 0.2s;
  box-sizing: border-box;
}

.input-wrapper input:focus {
  outline: none;
  border-color: var(--primary-color, #0073e6);
  box-shadow: 0 0 0 3px rgba(0, 115, 230, 0.1);
}

.currency-indicator {
  position: absolute;
  right: 0.75rem;
  top: 50%;
  transform: translateY(-50%);
  color: var(--text-secondary, #666);
  font-size: 0.9rem;
}

/* Acciones del formulario */
.form-actions {
  display: flex;
  justify-content: center;
  margin-top: min(4vh, 1.5rem);
}

.save-button {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.8rem 1.5rem;
  width: 100%;
  background: linear-gradient(to right, #3073ad, #d94cba);
  color: white;
  font-weight: 500;
  font-size: 1rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s ease;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

.save-button:hover:not(:disabled) {
  background: linear-gradient(to right, #2a689c, #c43aa7);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  transform: translateY(-1px);
}

.save-button:active:not(:disabled) {
  transform: translateY(1px);
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
}

.save-button:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

.loader {
  width: 1rem;
  height: 1rem;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  border-top-color: white;
  animation: spin 1s ease-in-out infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

/* Responsive */
@media (max-width: 640px) {
  .form-container {
    padding: min(3vh, 1rem);
    width: 100%;
    box-sizing: border-box;
  }
  
  .input-wrapper {
    width: 100%;
  }
  
  .price-card {
    width: 100%;
    box-sizing: border-box;
  }
}
</style> 