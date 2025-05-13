import { auth } from '../firebase';
import { onIdTokenChanged } from 'firebase/auth';
import { cerrarSesion } from './authService';
import logger from '../utils/logger';

// Configuración de tiempos (en milisegundos)
const CONFIG = {
  TOKEN_CHECK: 15 * 60 * 1000,    // 15 minutos
  TOKEN_REFRESH: 45 * 60 * 1000,  // 45 minutos
  TOKEN_WARNING: 5 * 60 * 1000,   // 5 minutos
  INACTIVITY: 20 * 60 * 1000      // 20 minutos
};

// Estado global
let state = {
  tokenExpiration: null,
  lastActivity: null,
  isMonitoring: false,
  isTokenRefreshing: false,
  timers: {
    session: null,
    inactivity: null
  },
  callbacks: {
    onWarning: null,
    onExpired: null,
    onInactivity: null
  },
  eventListeners: []
};

/**
 * Registra actividad del usuario
 */
const registerActivity = () => {
  state.lastActivity = Date.now();
};

/**
 * Adjunta listeners de actividad
 */
const attachListeners = () => {
  const events = ['mousedown', 'mousemove', 'keypress', 'scroll', 'touchstart'];
  
  events.forEach(event => {
    const listener = () => registerActivity();
    document.addEventListener(event, listener, { passive: true });
    state.eventListeners.push({ event, listener });
  });
};

/**
 * Remueve listeners de actividad
 */
const removeListeners = () => {
  state.eventListeners.forEach(({ event, listener }) => {
    document.removeEventListener(event, listener);
  });
  state.eventListeners = [];
};

/**
 * Verifica inactividad
 */
const checkInactivity = async () => {
  if (!state.isMonitoring || !state.lastActivity) return;

  const inactiveTime = Date.now() - state.lastActivity;
  
  if (inactiveTime >= CONFIG.INACTIVITY) {
    stopMonitoring();
    
    if (state.callbacks.onInactivity) {
      await state.callbacks.onInactivity();
    } else {
      await handleSessionExpiration();
    }
  } else {
    state.timers.inactivity = setTimeout(checkInactivity, 60000);
  }
};

/**
 * Verifica estado de la sesión
 */
const checkSessionStatus = async () => {
  const user = auth.currentUser;
  if (!user) {
    handleSessionExpiration();
    return;
  }

  try {
    const token = await user.getIdTokenResult();
    const expirationTime = new Date(token.expirationTime).getTime();
    const timeToExpire = expirationTime - Date.now();

    if (timeToExpire <= 0) {
      handleSessionExpiration();
    } else if (timeToExpire <= CONFIG.TOKEN_WARNING) {
      if (state.callbacks.onWarning) {
        state.callbacks.onWarning(timeToExpire);
      }
      await refreshToken();
    } else if (timeToExpire <= CONFIG.TOKEN_REFRESH) {
      await refreshToken();
    }
  } catch (error) {
    logger.error('Error al verificar sesión:', error);
    handleSessionExpiration();
  }
};

/**
 * Renueva el token
 */
const refreshToken = async () => {
  if (state.isTokenRefreshing) return true;
  
  try {
    state.isTokenRefreshing = true;
    const user = auth.currentUser;
    
    if (!user) return false;
    
    await user.getIdToken(true);
    logger.debug('Token renovado exitosamente');
    return true;
  } catch (error) {
    logger.error('Error al renovar token:', error);
    return false;
  } finally {
    state.isTokenRefreshing = false;
  }
};

/**
 * Maneja la expiración de sesión
 */
const handleSessionExpiration = async () => {
  stopMonitoring();
  if (state.callbacks.onExpired) {
    state.callbacks.onExpired();
  }
  await cerrarSesion();
};

/**
 * Inicia el monitoreo de sesión
 */
export const startMonitoring = (callbacks = {}) => {
  if (state.isMonitoring) return;

  state.callbacks = { ...state.callbacks, ...callbacks };
  state.isMonitoring = true;
  
  // Registrar actividad inicial
  registerActivity();
  
  // Adjuntar listeners
  attachListeners();
  
  // Iniciar monitoreo de sesión
  state.timers.session = setInterval(checkSessionStatus, CONFIG.TOKEN_CHECK);
  
  // Iniciar monitoreo de inactividad
  state.timers.inactivity = setTimeout(checkInactivity, 60000);
  
  logger.debug('Monitoreo de sesión iniciado');
};

/**
 * Detiene el monitoreo
 */
export const stopMonitoring = () => {
  if (!state.isMonitoring) return;

  // Limpiar timers
  clearInterval(state.timers.session);
  clearTimeout(state.timers.inactivity);
  
  // Remover listeners
  removeListeners();
  
  // Resetear estado
  state = {
    ...state,
    isMonitoring: false,
    lastActivity: null,
    timers: { session: null, inactivity: null }
  };
  
  logger.debug('Monitoreo de sesión detenido');
};

/**
 * Reinicia el temporizador de inactividad
 */
export const resetInactivityTimer = () => {
  if (!state.isMonitoring) return;
  
  registerActivity();
  clearTimeout(state.timers.inactivity);
  state.timers.inactivity = setTimeout(checkInactivity, 60000);
};

/**
 * Verifica si la sesión está activa
 */
export const isSessionActive = async () => {
  const user = auth.currentUser;
  if (!user) return false;

  try {
    const token = await user.getIdTokenResult();
    return new Date(token.expirationTime).getTime() > Date.now();
  } catch (error) {
    return false;
  }
};

/**
 * Obtiene tiempo restante de inactividad
 */
export const getRemainingInactivityTime = () => {
  if (!state.isMonitoring || !state.lastActivity) return 0;
  
  const elapsed = Date.now() - state.lastActivity;
  return Math.max(0, CONFIG.INACTIVITY - elapsed);
};

export default {
  startMonitoring,
  stopMonitoring,
  resetInactivityTimer,
  isSessionActive,
  getRemainingInactivityTime
}; 