import { auth } from '../firebase';
import { 
  signInWithEmailAndPassword, 
  signOut, 
  onAuthStateChanged,
  setPersistence,
  browserLocalPersistence,
  browserSessionPersistence
} from 'firebase/auth';
import logger from '../utils/logger';

// Función para sincronizar el estado de autenticación
const sincronizarEstadoAutenticacion = () => {
  return onAuthStateChanged(auth, (user) => {
    if (user) {
      logger.debug('Usuario autenticado:', user.email);
    } else {
      logger.debug('Usuario no autenticado');
    }
  });
};

// Iniciar sincronización al cargar el servicio
sincronizarEstadoAutenticacion();

// Escuchar cambios en localStorage para sincronizar entre pestañas
window.addEventListener('storage', (event) => {
  if (event.key === 'adminAutenticado' && !event.newValue) {
    // Si se eliminó la autenticación en otra pestaña, cerrar sesión aquí también
    cerrarSesion();
  }
});

/**
 * Inicia sesión con email y contraseña
 */
export const iniciarSesionConEmailYPassword = async (email, password, rememberMe) => {
  try {
    // Configurar persistencia según la preferencia del usuario
    const persistence = rememberMe ? browserLocalPersistence : browserSessionPersistence;
    await setPersistence(auth, persistence);

    // Intentar iniciar sesión
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    
    return {
      success: true,
      user: userCredential.user
    };
  } catch (error) {
    logger.error('Error en iniciarSesionConEmailYPassword:', error);
    return {
      success: false,
      error
    };
  }
};

/**
 * Cierra la sesión del usuario
 */
export const cerrarSesion = async () => {
  try {
    await signOut(auth);
    // Limpiar localStorage (esto disparará el evento storage en otras pestañas)
    localStorage.removeItem('sessionStartTime');
    localStorage.removeItem('adminAutenticado');
    localStorage.removeItem('adminUsuario');
    return { success: true };
  } catch (error) {
    logger.error('Error en cerrarSesion:', error);
    return {
      success: false,
      error
    };
  }
};

/**
 * Verifica si el usuario está autenticado
 */
export const verificarAutenticacion = () => {
  return new Promise((resolve) => {
    onAuthStateChanged(auth, (user) => {
      resolve(!!user);
    });
  });
};

/**
 * Obtiene el usuario actual
 */
export const obtenerUsuarioActual = () => {
  return auth.currentUser;
};

/**
 * Verifica si el usuario está autenticado
 */
export const estaAutenticado = async () => {
  return await verificarAutenticacion();
};

/**
 * Observa cambios en la autenticación
 */
export const observarCambiosDeAutenticacion = (callback) => {
  return onAuthStateChanged(auth, (user) => {
    callback(user);
  });
};

/**
 * Obtiene mensaje de error amigable
 */
export const getErrorMessage = (error) => {
  switch (error.code) {
    case 'auth/invalid-credential':
      return 'Credenciales inválidas. Por favor, verifica tu email y contraseña.';
    case 'auth/user-not-found':
      return 'No se encontró una cuenta con este email.';
    case 'auth/wrong-password':
      return 'Contraseña incorrecta.';
    case 'auth/too-many-requests':
      return 'Demasiados intentos fallidos. Por favor, intenta más tarde.';
    case 'auth/network-request-failed':
      return 'Error de conexión. Verifica tu conexión a internet.';
    default:
      return 'Error al iniciar sesión. Por favor, intenta nuevamente.';
  }
};

export default {
  iniciarSesionConEmailYPassword,
  cerrarSesion,
  obtenerUsuarioActual,
  estaAutenticado,
  observarCambiosDeAutenticacion
}; 