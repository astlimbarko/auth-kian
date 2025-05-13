import logger from '../utils/logger';

// Tipos de notificaciones
export const NOTIFICATION_TYPES = {
  SESSION: 'session',
  ERROR: 'error',
  SUCCESS: 'success'
};

let notificationListeners = [];

/**
 * Agrega un listener para notificaciones
 */
export const addNotificationListener = (callback) => {
  notificationListeners.push(callback);
  return () => {
    notificationListeners = notificationListeners.filter(cb => cb !== callback);
  };
};

/**
 * Envía una notificación
 */
export const sendNotification = (type, message, options = {}) => {
  const notification = {
    id: Date.now(),
    type,
    message,
    ...options
  };

  notificationListeners.forEach(callback => {
    try {
      callback(notification);
    } catch (error) {
      logger.error('Error en notification listener:', error);
    }
  });
};

/**
 * Notificación de sesión expirando
 */
export const sendSessionExpiringNotification = (timeRemaining) => {
  const minutes = Math.ceil(timeRemaining / 1000 / 60);
  sendNotification(
    NOTIFICATION_TYPES.SESSION,
    `Tu sesión expirará en ${minutes} minutos`,
    {
      actionType: 'extend-session',
      actionText: 'Extender sesión'
    }
  );
};

/**
 * Notificación de sesión expirada
 */
export const sendSessionExpiredNotification = () => {
  sendNotification(
    NOTIFICATION_TYPES.SESSION,
    'Tu sesión ha expirado',
    {
      actionType: 'login',
      actionText: 'Iniciar sesión'
    }
  );
};

export default {
  NOTIFICATION_TYPES,
  addNotificationListener,
  sendNotification,
  sendSessionExpiringNotification,
  sendSessionExpiredNotification
}; 