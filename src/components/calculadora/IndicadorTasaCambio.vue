<template>
  <div class="w-full relative">
    <!-- Overlay de carga -->
    <div v-if="cargandoPrecios" class="loading-overlay">
      <div class="loading-container">
        <div class="loading-spinner"></div>
        <span class="loading-text">Cargando precios...</span>
      </div>
    </div>
    
    <!-- Contenedor para tarjetas de precios con ancho y alineación corregidos -->
    <div class="cards-container" :class="{ 'opacity-50': cargandoPrecios }">
      <!-- Tarjeta de Precio Estándar -->
      <div 
        :class="['price-card', 'standard-card', { 'active-card': isTasaEstandarActiva, 'inactive-card': !isTasaEstandarActiva }]"
      >
        <div class="card-title">Precio Estándar</div>
        <div class="card-value">{{ precioEstandarFormateado }}</div>
        <div class="card-unit">SEK/BOB</div>
        
        <!-- Indicador de activo -->
        <div v-if="isTasaEstandarActiva" class="active-indicator">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
          </svg>
        </div>
      </div>

      <!-- Tarjeta de Precio Especial -->
      <div 
        :class="['price-card', 'special-card', { 'active-card': isTasaEspecialActiva, 'inactive-card': !isTasaEspecialActiva }]"
      >
        <div class="card-title">Precio Especial</div>
        <div class="card-value">{{ precioEspecialFormateado }}</div>
        <div class="card-unit">SEK/BOB</div>
        
        <!-- Indicador de activo -->
        <div v-if="isTasaEspecialActiva" class="active-indicator">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref, onMounted, onUnmounted, watch } from 'vue';
import { 
  PRECIO_ESTANDAR, 
  PRECIO_ESPECIAL, 
  UMBRAL_BOB_PRECIO_ESPECIAL, 
  obtenerTasaCambio,
  cargarPrecios,
  cargandoPrecios
} from '../../constants/precios';
import logger from '../../utils/logger';

// Props para recibir el monto actual en SEK
const props = defineProps({
  sekAmount: {
    type: Number,
    default: 0
  },
  esPrecioEspecialActivo: {
    type: Boolean,
    default: false
  }
});

// Valores formateados para mostrar
const precioEstandarFormateado = computed(() => {
  // Mostrar guiones si los precios están cargando
  if (cargandoPrecios.value || !PRECIO_ESTANDAR.value) {
    return "---";
  }
  // Mostrar el valor completo sin limitar decimales
  return PRECIO_ESTANDAR.value;
});

const precioEspecialFormateado = computed(() => {
  // Mostrar guiones si los precios están cargando
  if (cargandoPrecios.value || !PRECIO_ESPECIAL.value) {
    return "---";
  }
  // Mostrar el valor completo sin limitar decimales
  return PRECIO_ESPECIAL.value;
});

// Manejador del evento de actualización de precios
const manejarActualizacionPrecios = (evento) => {
  logger.debug('Precios actualizados desde el panel de admin:', evento.detail);
  // La actualización de los valores reactivos ya ocurre en precios.js
};

// Forzar una recarga de precios si aún no se han cargado
onMounted(() => {
  logger.debug('IndicadorTasaCambio montado, PRECIO_ESTANDAR:', PRECIO_ESTANDAR.value);
  logger.debug('IndicadorTasaCambio montado, PRECIO_ESPECIAL:', PRECIO_ESPECIAL.value);
  
  if (PRECIO_ESTANDAR.value === PRECIO_ESPECIAL.value) {
    logger.debug('Los precios son iguales, recargando...');
    cargarPrecios();
  }
  
  // Agregamos escucha de eventos personalizados
  window.addEventListener('precios-actualizados', manejarActualizacionPrecios);
  window.addEventListener('precios-cargados', manejarActualizacionPrecios);
});

// Limpieza al desmontar
onUnmounted(() => {
  // Eliminamos los escuchadores de eventos para evitar fugas de memoria
  window.removeEventListener('precios-actualizados', manejarActualizacionPrecios);
  window.removeEventListener('precios-cargados', manejarActualizacionPrecios);
});

// Computed properties para determinar qué tarjeta está activa (ahora usando la prop)
const isTasaEstandarActiva = computed(() => {
  return !props.esPrecioEspecialActivo;
});

const isTasaEspecialActiva = computed(() => {
  return props.esPrecioEspecialActivo;
});

// Mantenemos bobEquivalente para fines informativos
const bobEquivalente = computed(() => {
  if (!PRECIO_ESTANDAR.value) return 0;
  // Calcular el equivalente en BOB usando el precio estándar
  return props.sekAmount * PRECIO_ESTANDAR.value;
});
</script>

<style scoped>
/* Contenedor para las tarjetas */
.cards-container {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  gap: 15px;
  margin-bottom: 8px;
  margin-top: 8px;
  width: 100%;
  padding: 0;
}

/* Estilos base para todas las tarjetas */
.price-card {
  width: 47%;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  padding: 12px 12px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.1);
  transition: all 0.3s ease;
  position: relative;
  border-width: 1px;
  border-style: solid;
  margin-top: 4px;
}

/* Estilos para la tarjeta estándar */
.standard-card {
  background-color: #dbeafe;
  border-color: #bfdbfe;
}

.standard-card.active-card {
  background-color: #eff6ff;
  border-color: #93c5fd;
  opacity: 1;
  filter: none;
}

/* Estilos para la tarjeta especial */
.special-card {
  background-color: #d1fae5;
  border-color: #a7f3d0;
}

.special-card.active-card {
  background-color: #ecfdf5;
  border-color: #6ee7b7;
  opacity: 1;
  filter: none;
}

/* Estilos hover para las tarjetas */
.price-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
}

/* Estilos para tarjeta activa */
.active-card {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  transform: translateY(-2px);
}

/* Estilos para tarjeta inactiva */
.inactive-card {
  opacity: 0.8;
  filter: grayscale(50%);
  box-shadow: none;
}

/* Estilos del texto dentro de las tarjetas */
.card-title {
  font-size: 12px;
  font-weight: 500;
  margin-bottom: 2px;
  color: #1e40af;
}

.special-card .card-title {
  color: #047857;
}

.card-value {
  font-size: 22px;
  font-weight: 700;
  color: #1e3a8a;
  min-height: 28px; /* Mantener altura fija incluso con guiones */
  display: flex;
  align-items: center;
  justify-content: center;
}

.special-card .card-value {
  color: #064e3b;
}

.card-unit {
  font-size: 10px;
  margin-top: 1px;
  color: #3b82f6;
}

.special-card .card-unit {
  color: #10b981;
}

/* Indicador de activo */
.active-indicator {
  position: absolute;
  top: 5px;
  right: 5px;
  color: #3b82f6;
  background-color: white;
  border-radius: 50%;
  padding: 1px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
}

.special-card .active-indicator {
  color: #10b981;
}

/* Ajustes responsivos */
@media (max-width: 640px) {
  .price-card {
    width: 48%;
  }
}

/* Nuevo estilos para el loading overlay */
.loading-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
  background-color: rgba(255, 255, 255, 0.7);
  border-radius: 10px;
}

.loading-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
}

.loading-spinner {
  width: 25px;
  height: 25px;
  border: 3px solid rgba(59, 130, 246, 0.2);
  border-radius: 50%;
  border-top-color: #3b82f6;
  animation: spin 1s linear infinite;
}

.loading-text {
  font-size: 14px;
  font-weight: 500;
  color: #3b82f6;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}
</style> 