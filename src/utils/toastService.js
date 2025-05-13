/**
 * Servicio para gestionar notificaciones toast desde cualquier parte de la aplicación
 * utilizando el store de UI para mantener un estado consistente
 */

import { useUiStore } from '../stores/uiStore';
import logger from './logger';

/**
 * Función para mostrar un toast con un mensaje y opciones personalizadas
 * @param {string} message - El mensaje a mostrar
 * @param {Object} options - Opciones adicionales
 * @param {string} options.type - Tipo de toast: 'info', 'success', 'warning', 'error'
 * @param {number} options.timeout - Tiempo en ms que se mostrará el toast
 */
export function showToast(message, options = {}) {
  try {
    const uiStore = useUiStore();
    uiStore.showToast({
      message,
      type: options.type || 'info',
      timeout: options.timeout || 3000
    });
    logger.debug(`Toast mostrado: ${message} (${options.type || 'info'})`);
  } catch (error) {
    logger.error('Error al mostrar toast:', error);
    // Fallback a console en caso de error
    console.log(`Mensaje toast (fallback): ${message}`);
  }
}

/**
 * Mostrar un toast de éxito
 * @param {string} message - Mensaje a mostrar
 * @param {number} timeout - Tiempo en ms que se mostrará
 */
export function showSuccessToast(message, timeout = 3000) {
  showToast(message, { type: 'success', timeout });
}

/**
 * Mostrar un toast de error
 * @param {string} message - Mensaje a mostrar
 * @param {number} timeout - Tiempo en ms que se mostrará
 */
export function showErrorToast(message, timeout = 4000) {
  showToast(message, { type: 'error', timeout });
}

/**
 * Mostrar un toast de advertencia
 * @param {string} message - Mensaje a mostrar
 * @param {number} timeout - Tiempo en ms que se mostrará
 */
export function showWarningToast(message, timeout = 3500) {
  showToast(message, { type: 'warning', timeout });
}

/**
 * Mostrar un toast informativo
 * @param {string} message - Mensaje a mostrar
 * @param {number} timeout - Tiempo en ms que se mostrará
 */
export function showInfoToast(message, timeout = 3000) {
  showToast(message, { type: 'info', timeout });
}

// Exportar todas las funciones como un objeto por defecto
export default {
  show: showToast,
  success: showSuccessToast,
  error: showErrorToast,
  warning: showWarningToast,
  info: showInfoToast
}; 