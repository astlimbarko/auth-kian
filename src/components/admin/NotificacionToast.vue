<template>
  <div v-if="mostrarNotificacion" :class="['notificacion', tipo]">
    <div class="notificacion-icono">{{ icono }}</div>
    <div class="notificacion-mensaje">{{ mensaje }}</div>
  </div>
</template>

<script setup>
import { ref, onUnmounted, defineProps, defineExpose } from 'vue';

// Props
const props = defineProps({
  duracion: {
    type: Number,
    default: 3000 // 3 segundos por defecto
  }
});

// Variables reactivas
const mostrarNotificacion = ref(false);
const mensaje = ref('');
const tipo = ref('notificacion-exito');
const icono = ref('✓');

// Para rastrear el timeout
let notificacionTimeout = null;

/**
 * Mostrar una notificación de éxito
 * @param {string} textoMensaje - El mensaje a mostrar
 */
const mostrarExito = (textoMensaje) => {
  mostrarNotificacionGeneral(textoMensaje, 'notificacion-exito', '✓');
};

/**
 * Mostrar una notificación de error
 * @param {string} textoMensaje - El mensaje a mostrar
 */
const mostrarError = (textoMensaje) => {
  mostrarNotificacionGeneral(textoMensaje, 'notificacion-error', '✕');
};

/**
 * Función general para mostrar notificaciones
 * @param {string} textoMensaje - El mensaje a mostrar
 * @param {string} tipoNotificacion - Clase CSS para el tipo de notificación
 * @param {string} iconoNotificacion - Icono a mostrar
 */
const mostrarNotificacionGeneral = (textoMensaje, tipoNotificacion, iconoNotificacion) => {
  // Limpiar cualquier timeout existente
  if (notificacionTimeout) {
    clearTimeout(notificacionTimeout);
    notificacionTimeout = null;
  }
  
  // Primero ocultar cualquier notificación existente
  mostrarNotificacion.value = false;
  
  // Pequeño delay para asegurar que el DOM se refresca
  setTimeout(() => {
    // Configurar la nueva notificación
    mensaje.value = textoMensaje;
    tipo.value = tipoNotificacion;
    icono.value = iconoNotificacion;
    mostrarNotificacion.value = true;
    
    console.log(`Mostrando notificación: ${textoMensaje}`, new Date().toISOString());
    
    // Configurar el timeout para ocultar la notificación
    notificacionTimeout = setTimeout(() => {
      // Agregar clase para animación de salida
      const notificacionEl = document.querySelector('.notificacion');
      if (notificacionEl) {
        notificacionEl.classList.add('fadeout');
        
        // Ocultar después de completada la animación
        setTimeout(() => {
          mostrarNotificacion.value = false;
          console.log('Notificación ocultada', new Date().toISOString());
        }, 300); // 300ms para la animación
      } else {
        mostrarNotificacion.value = false;
      }
      
      notificacionTimeout = null;
    }, props.duracion - 300); // Restamos los 300ms de la animación final
  }, 100);
};

// Limpiar recursos al desmontar el componente
onUnmounted(() => {
  if (notificacionTimeout) {
    clearTimeout(notificacionTimeout);
    notificacionTimeout = null;
  }
});

// Exponer métodos para que el componente padre pueda llamarlos
defineExpose({
  mostrarExito,
  mostrarError
});
</script>

<style scoped>
/* Estilos para las notificaciones */
.notificacion {
  position: fixed;
  bottom: 20px;
  right: 20px;
  padding: 12px 16px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  z-index: 9999;
  animation: aparecer 0.3s ease forwards;
  opacity: 1;
  transform: translateY(0);
  transition: all 0.3s ease;
}

.notificacion.fadeout {
  opacity: 0;
  transform: translateY(10px);
}

.notificacion-exito {
  background-color: #10b981;
  color: white;
}

.notificacion-error {
  background-color: #ef4444;
  color: white;
}

.notificacion-icono {
  margin-right: 8px;
  font-size: 18px;
  font-weight: bold;
}

.notificacion-mensaje {
  font-size: 14px;
  font-weight: 500;
}

@keyframes aparecer {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style> 