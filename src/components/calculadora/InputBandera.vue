<template>
  <div class="input-wrapper">
    <label :for="inputId" class="block text-xs sm:text-sm font-medium mb-1 sm:mb-2 text-gray-500"></label> 
    <div class="flag-input-container" :class="{ 'active-input': estaActivo }">
      <div class="flag-container">
        <img :src="flagSrc" :alt="`Bandera de ${label}`" />
      </div>
      <div class="input-wrapper-flex">
        <input
          :id="inputId"
          ref="inputRef"
          type="text"
          :value="modelValue"
          inputmode="decimal"
          class="flag-input"
          :data-currency="moneda"
          readonly
          @input="manejarInput"
          @blur="manejarBlur"
          @focus="manejarFoco"
          @click="manejarClick"
          @keydown="manejarTeclaPresionada"
        >
        <span class="currency-symbol font-bold">{{ label }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, getCurrentInstance } from 'vue'
import logger from '../../utils/logger'

const props = defineProps({
  modelValue: {
    type: String,
    required: true
  },
  label: {
    type: String,
    required: true
  },
  inputId: {
    type: String,
    required: true
  },
  flagSrc: {
    type: String,
    required: true
  },
  inputType: {
    type: String,
    required: true
  },
  placeholder: {
    type: String,
    default: '0'
  },
  currency: {
    type: String,
    required: true
  }
})

const emit = defineEmits(['update:modelValue', 'input-event', 'blur-event', 'focus-event', 'delete-one', 'convert', 'keydown.up', 'keydown.down', 'clear-all', 'backspace-pressed', 'keydown.enter'])

const inputRef = ref(null)
const estaActivo = ref(false)
const moneda = computed(() => props.currency)

// Función para manejar el evento de entrada
function manejarInput(event) {
  let valor = event.target.value
  
  // Si está completamente vacío, mostrar solo "0"
  if (valor === '' || valor === null) {
    valor = '0'
  }
  
  // Convertir comas a puntos para permitir ambos separadores decimales
  if (valor.includes(',')) {
    valor = valor.replace(',', '.')
  }
  
  // Validar que solo contenga números y máximo un punto decimal
  // Expresión regular para permitir solo dígitos y un punto decimal
  const regex = /^[0-9]+(\.[0-9]*)?$/
  
  if (!regex.test(valor)) {
    // Si no es un número válido, revertir al valor anterior
    valor = props.modelValue
  } else {
    // Si comienza con "0" y se ingresa otro dígito, eliminar el 0 inicial
    if (valor.length > 1 && valor[0] === '0' && valor[1] !== '.') {
      valor = valor.substring(1)
    }
  }
  
  // Emitir el evento de actualización del modelo
  emit('update:modelValue', valor)
  
  // Emitir el evento de entrada con el tipo de input
  emit('input-event', { value: valor, type: props.inputType })
  
  // Emitir el evento de conversión
  emit('convert')
}

// Manejar el evento de foco
function manejarFoco(event) {
  // Marcar como activo
  estaActivo.value = true
  
  // Emitir el evento de foco
  emit('focus-event', props.inputType);
  
  // Asegurar que el cursor esté al final
  setTimeout(() => {
    const input = event.target;
    const length = input.value.length;
    input.setSelectionRange(length, length);
  }, 0);
}

// Manejar el evento de pérdida de foco
function manejarBlur(event) {
  // Marcar como inactivo
  estaActivo.value = false
  
  // Emitir el evento de pérdida de foco
  emit('blur-event', props.inputType);
}

// Manejar el evento de clic
function manejarClick(event) {
  // Asegurar que el cursor esté al final
  setTimeout(() => {
    const input = event.target;
    const length = input.value.length;
    input.setSelectionRange(length, length);
  }, 0);
}

/**
 * Maneja las teclas especiales (flecha arriba y flecha abajo)
 */
function manejarTeclaPresionada(event) {
  // Verificar que el evento exista
  if (!event) {
    return;
  }
  
  // Solo manejar flechas si el input tiene el foco
  if (document.activeElement !== event.target) {
    return;
  }

  // Manejar flechas arriba y abajo
  if (event.key === 'ArrowUp') {
    event.preventDefault();
    event.stopPropagation();
    logger.info('InputBandera: Flecha arriba detectada, disparando evento global arrow-up');
    window.dispatchEvent(new CustomEvent('arrow-up', { 
      detail: { currency: props.currency, source: 'input' },
      bubbles: true
    }));
    return;
  }
  else if (event.key === 'ArrowDown') {
    event.preventDefault();
    event.stopPropagation();
    logger.info('InputBandera: Flecha abajo detectada, disparando evento global arrow-down');
    window.dispatchEvent(new CustomEvent('arrow-down', { 
      detail: { currency: props.currency, source: 'input' },
      bubbles: true
    }));
    return;
  }
  // Manejar flecha izquierda (backspace)
  else if (event.key === 'ArrowLeft') {
    event.preventDefault();
    event.stopPropagation();
    logger.info('InputBandera: Flecha izquierda detectada, emitiendo evento backspace-pressed');
    emit('backspace-pressed');
    return;
  }
  
  // No procesar backspace aquí - dejar que lo maneje el componente padre
  if (event.key === 'Backspace') {
    // Solo prevenir default para evitar el comportamiento normal
    // pero no emitir el evento aquí
    event.preventDefault();
    return;
  }
  else if (event.key === 'Delete') {
    event.preventDefault();
    event.stopPropagation();
    logger.info('InputBandera: Delete detectado, emitiendo evento clear-all');
    emit('clear-all');
    return;
  }
  else if (event.key === 'Enter') {
    event.preventDefault();
    event.stopPropagation();
    logger.info('InputBandera: Enter detectado, emitiendo evento keydown.enter');
    emit('keydown.enter');
    return;
  }
  
  // Manejar teclas numéricas
  if ((event.key >= '0' && event.key <= '9') || event.key === '.' || event.key === ',') {
    event.preventDefault();
    logger.info('InputBandera: Tecla numérica detectada:', event.key);
    
    // Manejar la coma como punto decimal
    let valorInput = event.key;
    if (valorInput === ',') {
      valorInput = '.';
    }
    
    // Actualizar el valor mostrado y emitir eventos
    let nuevoValor = props.modelValue;
    
    // Si el valor actual es '0' y no se está ingresando un punto decimal, reemplazar
    if (props.modelValue === '0' && valorInput !== '.') {
      nuevoValor = valorInput;
    } 
    // Si se ingresa un punto decimal y ya hay uno, ignorar
    else if (valorInput === '.' && props.modelValue.includes('.')) {
      return;
    }
    // En otros casos, añadir el dígito
    else {
      nuevoValor = props.modelValue + valorInput;
    }
    
    emit('update:modelValue', nuevoValor);
    emit('input-event', { value: nuevoValor, type: props.inputType });
    emit('convert');
    return;
  }
  
  // Para cualquier otra tecla, prevenir el comportamiento por defecto en inputs numéricos
  if (event.key === 'ArrowRight' || 
      event.key === 'Home' || event.key === 'End' || 
      event.key === 'PageUp' || event.key === 'PageDown' ||
      event.key === '+' || event.key === '-') {
    event.preventDefault();
  }
}
</script>

<style scoped>
/* Contenedor wrapper para agregar espacio vertical */
.input-wrapper {
  margin: 4px 0;
  width: 100%;
  padding: 0;
  max-width: 100%;
  box-sizing: border-box;
}

/* Contenedor de input personalizado con bandera */
.flag-input-container {
  position: relative;
  width: 100%;
  height: 62px;
  border: 3px solid rgba(203, 213, 225, 0.8);
  border-radius: 0.75rem;
  display: flex;
  align-items: center;
  background-color: white;
  overflow: hidden;
  transition: all 0.2s ease;
  box-shadow: 0 1px 3px rgb(0 0 0 / 0.1);
  margin: 0 auto;
}

/* Contenedor de la bandera */
.flag-container {
  width: 100px;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-color: white;
  border-radius: 0.75rem 0 0 0.75rem;
  border-right: none;
  box-shadow: none;
  position: relative;
  z-index: 1;
  padding-left: 4px;
}

/* Pseudo-elemento para cubrir cualquier posible línea divisoria */
.flag-container::after {
  content: '';
  position: absolute;
  top: 0;
  right: -1px;
  width: 2px;
  height: 100%;
  background-color: white;
  z-index: 2;
}

/* Optimizaciones para la imagen de la bandera */
.flag-container img {
  width: 87px;
  height: 62px;
  object-fit: cover;
  display: block;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.15);
  border: none;
  margin-left: -8px;
}

/* Estilo para el contenedor del input */
.input-wrapper-flex {
  flex: 1;
  position: relative;
  height: 100%;
  display: flex;
  align-items: center;
  border-left: none;
  background-color: white;
  border-right: none;
}

/* Input principal */
.flag-input {
  width: calc(100% - 16px);
  height: 100%;
  padding: 0 4.5rem 0 1rem;
  border: none;
  background: transparent;
  outline: none;
  font-size: 1.75rem;
  font-weight: 700;
  color: rgba(15, 23, 42, 0.9);
  cursor: text;
  transition: background-color 0.2s ease;
  appearance: none;
  -moz-appearance: textfield;
  caret-color: transparent;
  text-align: right;
}

/* Ocultar botones en inputs numéricos para navegadores webkit */
.flag-input::-webkit-outer-spin-button,
.flag-input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Símbolo de moneda */
.currency-symbol {
  position: absolute;
  right: 1.5rem;
  top: 50%;
  transform: translateY(-50%);
  font-size: 1.3rem;
  color: rgba(100, 116, 139, 0.8);
  border: none;
  background: transparent;
}

/* Pseudo-elemento para cubrir cualquier línea en el lado derecho */
.input-wrapper-flex::after {
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  width: 2px;
  height: 100%;
  background-color: white;
  z-index: 2;
}

/* Estado activo del contenedor */
.active-input {
  border-color: rgba(59, 130, 246, 0.9);
  box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.2);
}

/* Estados hover */
.flag-input-container:hover {
  border-color: rgba(59, 130, 246, 0.6);
}

/* Ajustes responsivos */
@media (max-width: 640px) {
  .flag-input-container {
    height: 58px;
  }
  
  .flag-container {
    width: 90px;
    padding-left: 3px;
  }
  
  .flag-container img {
    width: 78px;
    height: 56px;
    margin-left: -6px;
  }
  
  .flag-input {
    font-size: 1.625rem;
    padding: 0 4rem 0 1rem;
  }
  
  .currency-symbol {
    font-size: 1.2rem;
    right: 1.25rem;
  }
}

@media (max-width: 390px) {
  .flag-input-container {
    height: 54px;
  }
  
  .flag-container {
    width: 78px;
    padding-left: 2px;
  }
  
  .flag-container img {
    width: 70px;
    height: 50px;
    margin-left: -4px;
  }
  
  .flag-input {
    font-size: 1.5rem;
    padding: 0 3.75rem 0 1rem;
  }
  
  .currency-symbol {
    font-size: 1.1rem;
    right: 1rem;
  }
}
</style> 