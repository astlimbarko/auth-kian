// ==============================================================
// IMPORTANTE: NO MODIFICAR ESTE ARCHIVO MANUALMENTE
// ==============================================================
// Los valores definidos aquí son solo valores iniciales que se usan como
// respaldo antes de cargar los datos desde Firebase.
// 
// Para cambiar los precios, utiliza el Panel de Administración.
// Cualquier cambio manual a este archivo podría causar errores en
// el funcionamiento de la aplicación o ser sobrescritos por Firebase.
// ==============================================================

// Importamos el servicio de precios que usa Firebase
import { obtenerPrecios, guardarPrecios, escucharCambiosPrecios } from '../services/preciosService';
import { ref } from 'vue';
import logger from '../utils/logger';

// Variables reactivas para los precios
// Estos valores iniciales serán null para evitar cálculos incorrectos
// hasta que se carguen los datos reales de Firebase
const PRECIO_ESTANDAR = ref(null);
const PRECIO_ESPECIAL = ref(null);
// El umbral ahora está en BOB (Bolivianos) en lugar de SEK
const UMBRAL_BOB_PRECIO_ESPECIAL = ref(5000);
const preciosCargados = ref(false);
const cargando = ref(true);
// Variable para almacenar función para detener la escucha
let unsubscribeListener = null;

// Cargar precios desde Firebase al iniciar
const cargarPrecios = async () => {
  try {
    cargando.value = true;
    logger.debug('Iniciando carga de precios desde Firebase...');
    
    const precios = await obtenerPrecios();
    
    if (!precios) {
      throw new Error('No se recibieron datos de precios');
    }
    
    logger.debug('Precios obtenidos de Firebase:', precios);
    
    // Validar que los precios sean números válidos
    if (typeof precios.precioEstandar !== 'number' || isNaN(precios.precioEstandar) ||
        typeof precios.precioEspecial !== 'number' || isNaN(precios.precioEspecial)) {
      throw new Error('Los precios obtenidos no son válidos');
    }
    
    // Actualizar valores
    PRECIO_ESTANDAR.value = precios.precioEstandar;
    PRECIO_ESPECIAL.value = precios.precioEspecial;
    UMBRAL_BOB_PRECIO_ESPECIAL.value = precios.umbralEspecial || 5000;
    
    logger.debug('Valores actualizados correctamente:');
    logger.debug('PRECIO_ESTANDAR:', PRECIO_ESTANDAR.value);
    logger.debug('PRECIO_ESPECIAL:', PRECIO_ESPECIAL.value);
    
    preciosCargados.value = true;
    logger.debug('Precios cargados exitosamente desde Firebase');
    
    // Notificar a otros componentes la actualización
    const evento = new CustomEvent('precios-cargados', { 
      detail: { 
        success: true, 
        precios: { 
          estandar: PRECIO_ESTANDAR.value, 
          especial: PRECIO_ESPECIAL.value 
        }
      }
    });
    window.dispatchEvent(evento);

    // Iniciar escucha en tiempo real si aún no está activa
    iniciarEscuchaRealtime();
  } catch (error) {
    logger.error('Error crítico al cargar precios:', error);
    
    // No usamos valores por defecto, dejamos los valores como null
    PRECIO_ESTANDAR.value = null;
    PRECIO_ESPECIAL.value = null;
    
    // Disparar evento de error con detalles
    const errorEvent = new CustomEvent('precios-error', { 
      detail: { 
        error: {
          message: 'No se pudieron cargar los precios. Por favor, verifica tu conexión e inténtalo de nuevo.',
          originalError: error
        }
      } 
    });
    
    window.dispatchEvent(errorEvent);
    throw error; // Propagar el error para que se pueda manejar en la UI
  } finally {
    cargando.value = false;
  }
};

// Iniciar escucha en tiempo real para actualizaciones
const iniciarEscuchaRealtime = () => {
  // Si ya hay una suscripción activa, no crear otra
  if (unsubscribeListener) {
    logger.debug('Ya existe una escucha en tiempo real, no se creará otra');
    return;
  }
  
  logger.debug('Iniciando escucha en tiempo real para actualizaciones de precios');
  
  // Crear listener que se activará cuando cambien los precios
  unsubscribeListener = escucharCambiosPrecios((resultado) => {
    if (resultado.success && resultado.data) {
      logger.debug('Datos actualizados recibidos por listener:', resultado.data);
      
      // Actualizar valores reactivos
      PRECIO_ESTANDAR.value = resultado.data.precioEstandar;
      PRECIO_ESPECIAL.value = resultado.data.precioEspecial;
      if (resultado.data.umbralEspecial) {
        UMBRAL_BOB_PRECIO_ESPECIAL.value = resultado.data.umbralEspecial;
      }
      
      // Notificar a otros componentes sobre la actualización en tiempo real
      const evento = new CustomEvent('precios-actualizados', { 
        detail: { 
          success: true, 
          precios: { 
            estandar: PRECIO_ESTANDAR.value, 
            especial: PRECIO_ESPECIAL.value 
          },
          tiempoReal: true
        }
      });
      
      window.dispatchEvent(evento);
      logger.debug('Notificación enviada: precios actualizados en tiempo real');
    } else if (!resultado.success) {
      logger.error('Error en listener:', resultado.error);
      
      // Notificar error
      const evento = new CustomEvent('precios-error', { 
        detail: { error: resultado.error }
      });
      window.dispatchEvent(evento);
    }
  });
  
  // Registrar función para limpiar listener cuando la ventana se cierre
  if (typeof window !== 'undefined') {
    window.addEventListener('beforeunload', () => {
      if (unsubscribeListener) {
        logger.debug('Deteniendo escucha en tiempo real');
        unsubscribeListener();
        unsubscribeListener = null;
      }
    });
  }
};

// Intentar cargar precios inmediatamente
cargarPrecios();

/**
 * Obtiene la tasa de cambio basada en el monto en SEK
 * @param {number} sekAmount - Cantidad en SEK
 * @returns {number} - Tasa de cambio (BOB por 1 SEK)
 */
function obtenerTasaCambio(sekAmount) {
  // Primero calculamos el equivalente aproximado en BOB usando el precio estándar
  const bobEquivalente = sekAmount * PRECIO_ESTANDAR.value;
  
  // Si el monto en BOB es mayor o igual al umbral exacto (5000), usamos el precio especial
  return bobEquivalente >= UMBRAL_BOB_PRECIO_ESPECIAL.value ? PRECIO_ESPECIAL.value : PRECIO_ESTANDAR.value;
}

/**
 * Actualiza las tasas de cambio en Firebase y localmente
 * @param {number} estandar - Nueva tasa estándar
 * @param {number} especial - Nueva tasa especial
 */
async function actualizarTasasCambio(estandar, especial) {
  logger.debug('Actualizando tasas de cambio:', estandar, especial);
  
  try {
    // Guardar en Firebase
    // No usamos valores por defecto, forzamos a que se obtengan de Firestore
    const DEFAULTS = {
      precioEstandar: null,
      precioEspecial: null,
      umbralEspecial: 5000
    };
    const resultado = await guardarPrecios(estandar, especial);
    logger.debug('Resultado de Firebase:', resultado);
    
    // Actualizar valores locales
    PRECIO_ESTANDAR.value = estandar;
    PRECIO_ESPECIAL.value = especial;
    
    // Crear y disparar evento custom para notificar actualización
    const evento = new CustomEvent('precios-actualizados', { 
      detail: { 
        success: true, 
        precios: { estandar, especial }
      }
    });
    
    window.dispatchEvent(evento);
    return true;
  } catch (error) {
    logger.error('Error detallado al actualizar tasas:', error);
    logger.error('Mensaje de error:', error.message);
    logger.error('Stack trace:', error.stack);
    
    // Disparar evento de error
    const evento = new CustomEvent('precios-error', { 
      detail: { error: error.message }
    });
    window.dispatchEvent(evento);
    
    throw error;
  }
}

// Limpiar recursos cuando el módulo se desmonte o se recargue
if (typeof window !== 'undefined') {
  window.addEventListener('beforeunload', () => {
    // Detener escucha en tiempo real
    if (unsubscribeListener) {
      logger.debug('Deteniendo escucha en tiempo real');
      unsubscribeListener();
      unsubscribeListener = null;
    }
  });
}

// Exportar todo junto
export {
  PRECIO_ESTANDAR,
  PRECIO_ESPECIAL,
  UMBRAL_BOB_PRECIO_ESPECIAL,
  preciosCargados,
  cargando as cargandoPrecios,
  obtenerTasaCambio,
  actualizarTasasCambio,
  cargarPrecios,
  iniciarEscuchaRealtime
};
