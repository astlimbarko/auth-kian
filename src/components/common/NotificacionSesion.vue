<template>
  <transition name="notification-fade">
    <div v-if="notificaciones.length > 0" class="notificaciones-container">
      <div 
        v-for="notificacion in notificaciones" 
        :key="notificacion.id"
        :class="['notificacion', `notificacion-${notificacion.type}`]"
      >
        <div class="notificacion-header">
          <span class="notificacion-titulo">{{ notificacion.title }}</span>
          <button 
            class="notificacion-cerrar" 
            @click="cerrarNotificacion(notificacion.id)"
          >×</button>
        </div>
        
        <div class="notificacion-contenido">
          <p>{{ notificacion.message }}</p>
          
          <div v-if="notificacion.actionText" class="notificacion-acciones">
            <button 
              class="notificacion-accion" 
              @click="ejecutarAccion(notificacion)"
            >
              {{ notificacion.actionText }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { useRouter } from 'vue-router';
import { 
  addNotificationListener, 
  NOTIFICATION_TYPES 
} from '../../services/notificationService';
import sessionManager from '../../services/sessionManager';

const router = useRouter();
const notificaciones = ref([]);

// Cancelar esta notificación
const cerrarNotificacion = (id) => {
  notificaciones.value = notificaciones.value.filter(n => n.id !== id);
};

// Ejecutar la acción asociada a la notificación
const ejecutarAccion = async (notificacion) => {
  if (!notificacion.actionType) return;
  
  switch (notificacion.actionType) {
    case 'extend-session':
      await sessionManager.resetInactivityTimer();
      cerrarNotificacion(notificacion.id);
      break;
      
    case 'login':
      cerrarNotificacion(notificacion.id);
      router.push('/admin/login');
      break;
      
    default:
      cerrarNotificacion(notificacion.id);
  }
};

// Agregar nueva notificación
const agregarNotificacion = (notificacion) => {
  // Solo mostrar notificaciones de sesión
  if (notificacion.type !== NOTIFICATION_TYPES.SESSION) {
    return;
  }
  
  // Verificar si ya existe una notificación del mismo tipo y mensaje
  // para evitar duplicados
  const notificacionExistente = notificaciones.value.find(n => 
    n.type === notificacion.type && 
    n.message === notificacion.message
  );
  
  // Si ya existe una notificación similar, no agregar otra
  if (notificacionExistente) {
    return;
  }
  
  // Verificar si estamos en la página de login y es una notificación de sesión expirada
  if (router.currentRoute.value.name === 'AdminLogin' && 
      notificacion.message.includes('sesión ha expirado')) {
    // No mostrar notificaciones de sesión expirada en la página de login
    return;
  }
  
  // Agregar la notificación al array
  notificaciones.value.push(notificacion);
  
  // Si tiene auto-cierre, programarlo
  if (notificacion.autoClose) {
    setTimeout(() => {
      cerrarNotificacion(notificacion.id);
    }, notificacion.duration || 5000);
  }
};

// Listener para recibir notificaciones
let cancelarListener = null;

onMounted(() => {
  cancelarListener = addNotificationListener(agregarNotificacion);
});

onUnmounted(() => {
  if (cancelarListener) {
    cancelarListener();
  }
});
</script>

<style scoped>
.notificaciones-container {
  position: fixed;
  bottom: 20px;
  right: 20px;
  max-width: 350px;
  z-index: 9999;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.notificacion {
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  overflow: hidden;
  border-left: 4px solid #4b5563;
}

.notificacion-session {
  border-left-color: #0ea5e9; /* Color azul para notificaciones de sesión */
}

.notificacion-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 12px 5px;
  border-bottom: 1px solid #f3f4f6;
}

.notificacion-titulo {
  font-weight: 600;
  font-size: 0.9rem;
  color: #1f2937;
}

.notificacion-cerrar {
  background: none;
  border: none;
  color: #9ca3af;
  font-size: 1.25rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  transition: background-color 0.2s;
}

.notificacion-cerrar:hover {
  background-color: #f3f4f6;
  color: #4b5563;
}

.notificacion-contenido {
  padding: 8px 12px 12px;
}

.notificacion-contenido p {
  margin: 0;
  font-size: 0.85rem;
  color: #4b5563;
  line-height: 1.4;
}

.notificacion-acciones {
  display: flex;
  justify-content: flex-end;
  margin-top: 10px;
}

.notificacion-accion {
  background-color: #0ea5e9;
  color: white;
  border: none;
  padding: 6px 12px;
  border-radius: 4px;
  font-size: 0.8rem;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s;
}

.notificacion-accion:hover {
  background-color: #0284c7;
}

/* Animaciones */
.notification-fade-enter-active,
.notification-fade-leave-active {
  transition: all 0.3s ease;
}

.notification-fade-enter-from,
.notification-fade-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
</style> 