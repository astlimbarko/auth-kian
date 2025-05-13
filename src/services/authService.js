import { 
  auth, 
  signInWithEmailAndPassword, 
  signOut, 
  onAuthStateChanged
} from '../firebase';
import { 
  setPersistence,
  browserLocalPersistence,
  browserSessionPersistence 
} from 'firebase/auth';
import sessionManager from './sessionManager';
import logger from '../utils/logger';

/**
 * Inicia sesión con email y contraseña
 */
export const iniciarSesionConEmailYPassword = async (email, password, rememberMe = false) => {
  try {
    logger.debug('Iniciando sesión:', email);
    
    // Configurar persistencia según la preferencia del usuario
    await setPersistence(auth, rememberMe ? browserLocalPersistence : browserSessionPersistence);
    
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    
    // Iniciar monitoreo de sesión
    sessionManager.startMonitoring({
      onWarning: (timeLeft) => {
        logger.warn(`Sesión expirando en ${Math.ceil(timeLeft / 1000 / 60)} minutos`);
      },
      onExpired: () => {
        logger.warn('Sesión expirada');
      }
    });
    
    return {
      success: true,
      user: userCredential.user
    };
  } catch (error) {
    logger.error('Error al iniciar sesión:', error);
    return {
      success: false,
      error: getErrorMessage(error.code)
    };
  }
};

/**
 * Cierra la sesión del usuario
 */
export const cerrarSesion = async () => {
  try {
    // Detener monitoreo de sesión
    sessionManager.stopMonitoring();
    
    // Cerrar sesión en Firebase
    await signOut(auth);
    logger.debug('Sesión cerrada exitosamente');
    
    return { success: true };
  } catch (error) {
    logger.error('Error al cerrar sesión:', error);
    return { success: false, error: error.message };
  }
};

/**
 * Obtiene el usuario actual
 */
export const obtenerUsuarioActual = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = onAuthStateChanged(auth, user => {
      unsubscribe();
      resolve(user);
    }, reject);
  });
};

/**
 * Verifica si el usuario está autenticado
 */
export const estaAutenticado = async () => {
  try {
    const user = await obtenerUsuarioActual();
    return !!user;
  } catch (error) {
    logger.error('Error al verificar autenticación:', error);
    return false;
  }
};

/**
 * Observa cambios en la autenticación
 */
export const observarCambiosDeAutenticacion = (callback) => {
  return onAuthStateChanged(auth, callback);
};

/**
 * Obtiene mensaje de error amigable
 */
const getErrorMessage = (code) => {
  const errors = {
    'auth/invalid-credential': 'Credenciales inválidas',
    'auth/user-not-found': 'Usuario no encontrado',
    'auth/wrong-password': 'Contraseña incorrecta',
    'auth/too-many-requests': 'Demasiados intentos fallidos',
    'auth/network-request-failed': 'Error de conexión'
  };
  
  return errors[code] || 'Error al iniciar sesión';
};

export default {
  iniciarSesionConEmailYPassword,
  cerrarSesion,
  obtenerUsuarioActual,
  estaAutenticado,
  observarCambiosDeAutenticacion
}; 