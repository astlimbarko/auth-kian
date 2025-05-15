<template>
  <div class="admin-container">
    <!-- Encabezado -->
    <CabeceraAdmin @cerrar-sesion="cerrarSesion" />

    <!-- Contenido principal -->
    <main class="admin-main">
      <!-- Encabezado de página -->
      <div class="page-header">
        <h2>Prisinställningar</h2>
      </div>

      <!-- Indicador de carga mientras se obtienen los precios -->
      <div v-if="cargando" class="loading-overlay">
        <div class="loading-spinner"></div>
        <div class="loading-text">Cargando configuración de precios...</div>
      </div>

      <div v-else-if="!precioEstandarActual || !precioEspecialActual" class="error-overlay">
        <div class="error-icon">⚠️</div>
        <div class="error-message">No se pudieron cargar los precios. Por favor, verifica tu conexión y recarga la página.</div>
      </div>

      <!-- Tarjeta principal (visible solo cuando los precios están cargados) -->
      <div v-else class="main-card">
        <FormularioPrecios 
          :valor-estandar-inicial="precioEstandarStr"
          :valor-especial-inicial="precioEspecialStr"
          :esta-guardando="guardando"
          @guardar="guardarPrecios"
        />
      </div>
      
      <!-- Footer -->
      <PieAdmin />
    </main>
    
    <!-- Componente de notificaciones -->
    <NotificacionToast ref="notificacion" :duracion="3000" />
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue';
import { useRouter } from 'vue-router';
import { actualizarTasasCambio, PRECIO_ESTANDAR, PRECIO_ESPECIAL } from '../constants/precios.js';
import { obtenerPrecios } from '../services/preciosService';
import { setDoc, doc } from 'firebase/firestore';
import { db } from '../firebase';
import { cerrarSesion as logoutAuth } from '../services/authService';

// Importar componentes
import CabeceraAdmin from '../components/admin/CabeceraAdmin.vue';
import FormularioPrecios from '../components/admin/FormularioPrecios.vue';
import NotificacionToast from '../components/admin/NotificacionToast.vue';
import PieAdmin from '../components/admin/PieAdmin.vue';

// Router para navegación
const router = useRouter();

// Estado del formulario
const precioEstandarStr = computed(() => {
  // Solo devolver el valor si los precios ya están cargados
  return cargando.value ? '' : PRECIO_ESTANDAR.value.toString();
});
const precioEspecialStr = computed(() => {
  // Solo devolver el valor si los precios ya están cargados
  return cargando.value ? '' : PRECIO_ESPECIAL.value.toString();
});
const guardando = ref(false);
const cargando = ref(true);

// Referencia a la notificación
const notificacion = ref(null);

// Función para mostrar mensajes de error
const mostrarError = (mensaje) => {
  console.error(mensaje);
  notificacion.value?.mostrarError(mensaje);
};

// Manejador del evento de precios actualizados
const manejarPreciosActualizados = (evento) => {
  console.log('Precios actualizados:', evento.detail);
  notificacion.value?.mostrarExito('Priserna har uppdaterats');
};

// Manejador del evento de error
const manejarPreciosError = (evento) => {
  console.error('Error al actualizar precios:', evento.detail.error);
  notificacion.value?.mostrarError('Fel vid uppdatering av priser');
};

// Configurar escuchadores de eventos al montar
onMounted(async () => {
  // Verificar si el usuario está autenticado
  const estaAutenticado = localStorage.getItem('adminAutenticado') === 'true';
  
  if (!estaAutenticado) {
    // Redirigir al login si no está autenticado
    router.push('/admin/login');
    return;
  }
  
  try {
    // Cargar precios actuales desde Firebase
    await cargarPrecios();
    
    // Agregar escuchadores de eventos
    window.addEventListener('precios-actualizados', manejarPreciosActualizados);
    window.addEventListener('precios-error', manejarPreciosError);
    
    // Escuchar cambios en tiempo real
    iniciarEscuchaRealtime();
  } catch (error) {
    console.error('Error crítico al cargar el panel de administración:', error);
    mostrarError('No se pudo cargar la configuración de precios. Por favor, recarga la página.');
  }
});

// Limpiar escuchadores al desmontar
onUnmounted(() => {
  window.removeEventListener('precios-actualizados', manejarPreciosActualizados);
  window.removeEventListener('precios-error', manejarPreciosError);
});

// Cargar los precios actuales
const cargarPrecios = async () => {
  try {
    cargando.value = true;
    console.log('Cargando precios desde Firebase...');
    
    const preciosActuales = await obtenerPrecios();
    console.log('AdminPanel: Precios cargados desde Firebase:', preciosActuales);
    
    if (!preciosActuales) {
      throw new Error('No se recibieron datos de precios');
    }
    
    // Validar que los precios sean números válidos
    if (typeof preciosActuales.precioEstandar !== 'number' || isNaN(preciosActuales.precioEstandar) ||
        typeof preciosActuales.precioEspecial !== 'number' || isNaN(preciosActuales.precioEspecial)) {
      throw new Error('Los precios en la base de datos no son válidos');
    }
    
    // Actualizar valores
    PRECIO_ESTANDAR.value = preciosActuales.precioEstandar;
    PRECIO_ESPECIAL.value = preciosActuales.precioEspecial;
    
    console.log('AdminPanel: Precios actualizados:');
    console.log('PRECIO_ESTANDAR:', PRECIO_ESTANDAR.value);
    console.log('PRECIO_ESPECIAL:', PRECIO_ESPECIAL.value);
    
  } catch (error) {
    const mensajeError = `Error al cargar los precios: ${error.message || 'Error desconocido'}`;
    console.error(mensajeError, error);
    mostrarError(mensajeError);
    // Propagar el error para que pueda ser manejado por el componente padre si es necesario
    throw error;
  } finally {
    cargando.value = false;
  }
};

// Guardar precios
const guardarPrecios = async (datos) => {
  guardando.value = true;
  
  try {
    // Validación básica
    if (isNaN(datos.estandar) || isNaN(datos.especial) || datos.estandar <= 0 || datos.especial <= 0) {
      throw new Error('Los valores deben ser números positivos');
    }
    
    console.log('Valores a guardar:', datos.estandar, datos.especial);
    
    // Actualizamos los valores en Firebase
    try {
      await actualizarTasasCambio(datos.estandar, datos.especial);
      console.log('Precios guardados exitosamente en Firebase');
      notificacion.value?.mostrarExito('Priserna har uppdaterats');
    } catch (firebaseError) {
      console.error('Error específico de Firebase:', firebaseError);
      notificacion.value?.mostrarError(`Error: ${firebaseError.message}`);
      throw firebaseError;
    }
  } catch (error) {
    console.error('Error al guardar precios:', error);
    notificacion.value?.mostrarError(`Fel vid uppdatering av priser: ${error.message}`);
  } finally {
    guardando.value = false;
  }
};

// Cerrar sesión
const cerrarSesion = async () => {
  try {
    // Cerrar sesión en Firebase usando el servicio de autenticación
    const resultado = await logoutAuth();
    if (resultado.success) {
      console.log('Sesión cerrada exitosamente');
    } else {
      console.error('Error al cerrar sesión:', resultado.error);
    }
  } catch (error) {
    console.error('Error al cerrar sesión:', error);
  } finally {
    // Eliminar estado de autenticación local (como respaldo)
    localStorage.removeItem('adminAutenticado');
    
    // Redirigir al login
    router.push('/admin/login');
  }
};

// Computed properties para pasar a FormularioPrecios
const precioEstandarActual = computed(() => {
  console.log('AdminPanel: Computando precioEstandarActual:', PRECIO_ESTANDAR.value);
  return PRECIO_ESTANDAR.value;
});

const precioEspecialActual = computed(() => {
  console.log('AdminPanel: Computando precioEspecialActual:', PRECIO_ESPECIAL.value);
  return PRECIO_ESPECIAL.value;
});
</script>

<style scoped>
:root {
  --primary-color: #0073e6;
  --primary-hover: #0056b3;
  --secondary-color: #d94cba;
  --secondary-hover: #c43aa7;
  --bg-color: #f5f7fa;
  --card-bg: #ffffff;
  --text-primary: #333;
  --text-secondary: #666;
  --text-light: #888;
  --border-color: #e1e4e8;
  --success-color: #28a745;
  --info-color: #0073e6;
}

.admin-container {
  min-height: 100vh;
  height: 100%;
  background: linear-gradient(135deg, #f5f7fa, #e9edf2);
  font-family: 'Poppins', system-ui, -apple-system, BlinkMacSystemFont, sans-serif;
  color: var(--text-primary);
  display: flex;
  flex-direction: column;
  overflow-x: hidden; /* Prevenir desplazamiento horizontal */
  width: 100%;
  max-width: 100%; /* Asegurar que no exceda el ancho del viewport */
  box-sizing: border-box; /* Incluir padding y border en el ancho total */
}

/* Estilos del contenido principal */
.admin-main {
  max-width: 550px;
  margin: 0 auto;
  padding: 0 1rem;
  flex: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-sizing: border-box; /* Incluir padding y border en el ancho total */
}

.page-header {
  margin-bottom: min(4vh, 1.5rem);
  text-align: center;
  flex: 0 0 auto;
}

.page-header h2 {
  font-size: 1.5rem;
  font-weight: 600;
  margin: 0;
  color: var(--text-primary);
}

.main-card {
  background-color: var(--card-bg);
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  overflow: hidden;
  border: 1px solid var(--border-color);
  width: 95%;
  margin: 0 auto;
  flex: 0 1 auto;
}

/* Responsive */
@media (max-width: 640px) {
  .admin-main {
    padding: 0 0.75rem;
    width: 100%;
    box-sizing: border-box;
    max-width: 100vw; /* Limitar al ancho del viewport */
  }
  
  .page-header {
    margin-bottom: min(2vh, 0.75rem);
  }
  
  .page-header h2 {
    font-size: 1.2rem;
  }
  
  .main-card {
    width: 100%; /* Asegurar que la tarjeta no exceda el contenedor */
    box-sizing: border-box;
  }
  
  .loading-overlay {
    width: 100%;
    max-width: 100%;
    box-sizing: border-box;
  }
}

/* Estilos para el indicador de carga */
.loading-overlay {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  margin: 0 auto;
  width: 95%;
  max-width: 550px;
  border: 1px solid var(--border-color);
}

.loading-spinner {
  width: 40px;
  height: 40px;
  border: 3px solid rgba(0, 115, 230, 0.2);
  border-radius: 50%;
  border-top-color: #0073e6;
  animation: spin 1s linear infinite;
  margin-bottom: 1rem;
}

.loading-text {
  font-size: 1rem;
  color: var(--text-secondary);
  text-align: center;
}

/* Estilos para el mensaje de error */
.error-overlay {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #fff8f8;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  margin: 0 auto;
  width: 95%;
  max-width: 550px;
  border: 1px solid #ffcdd2;
  text-align: center;
}

.error-icon {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: #d32f2f;
}

.error-message {
  font-size: 1rem;
  color: #d32f2f;
  line-height: 1.5;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}
</style> 