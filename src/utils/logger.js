/**
 * Utilidad para manejar logs en la aplicación
 * Los logs solo se mostrarán si VITE_ENABLE_DEBUG_LOGS es true
 */

// Verificar si los logs de depuración están habilitados
const isDebugEnabled = import.meta.env.VITE_ENABLE_DEBUG_LOGS === 'true';

// Objeto logger que reemplazará a console en la aplicación
const logger = {
  log: (...args) => {
    if (isDebugEnabled) {
      console.log(...args);
    }
  },
  
  info: (...args) => {
    if (isDebugEnabled) {
      console.info(...args);
    }
  },
  
  warn: (...args) => {
    if (isDebugEnabled) {
      console.warn(...args);
    }
  },
  
  error: (...args) => {
    // Los errores siempre se registran para poder depurar problemas críticos
    console.error(...args);
  },
  
  debug: (...args) => {
    if (isDebugEnabled) {
      console.debug(...args);
    }
  }
};

export default logger; 