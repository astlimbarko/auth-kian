import { db, doc, getDoc, setDoc, onSnapshot } from '../firebase';
import logger from '../utils/logger';

// Valores por defecto (se usarán si no hay datos en la base de datos)
const DEFAULTS = {
  precioEstandar: 1.0989011,
  precioEspecial: 1.1111111,
  umbralEspecial: 5000
};

// Obtener precios desde Firestore
export const obtenerPrecios = async () => {
  try {
    const docRef = doc(db, 'configuracion', 'precios');
    const docSnap = await getDoc(docRef);
    
    if (docSnap.exists()) {
      return docSnap.data();
    } else {
      logger.debug("No hay precios configurados, usando valores por defecto");
      // Si no existen datos, creamos el documento con valores por defecto
      await setDoc(docRef, DEFAULTS);
      return DEFAULTS;
    }
  } catch (error) {
    logger.error("Error al obtener precios:", error);
    return DEFAULTS;
  }
};

// Guardar precios en Firestore
export const guardarPrecios = async (estandar, especial) => {
  try {
    logger.debug('preciosService: Iniciando guardarPrecios con valores:', estandar, especial);
    const docRef = doc(db, 'configuracion', 'precios');
    logger.debug('preciosService: Referencia al documento creada');
    
    // Creamos el objeto de datos
    const data = {
      precioEstandar: estandar,
      precioEspecial: especial,
      umbralEspecial: DEFAULTS.umbralEspecial,
      ultimaActualizacion: new Date().toISOString()
    };
    logger.debug('preciosService: Datos a guardar:', data);
    
    // Actualizar documento con nuevos precios
    logger.debug('preciosService: Intentando setDoc...');
    await setDoc(docRef, data);
    logger.debug('preciosService: setDoc completado exitosamente');
    
    return { 
      success: true,
      mensaje: 'Precios actualizados correctamente'
    };
  } catch (error) {
    logger.error("Error detallado al guardar precios:", error);
    logger.error("Tipo de error:", error.name);
    logger.error("Mensaje de error:", error.message);
    logger.error("Código de error:", error.code);
    logger.error("Stack trace:", error.stack);
    throw new Error('Error al guardar precios: ' + error.message);
  }
};

/**
 * Escucha cambios en tiempo real en el documento de precios
 * @param {Function} callback - Función que se ejecutará cuando cambien los precios
 * @returns {Function} - Función para detener la escucha
 */
export const escucharCambiosPrecios = (callback) => {
  logger.debug('Iniciando escucha de cambios en precios...');
  const docRef = doc(db, 'configuracion', 'precios');
  
  // Crear un listener que se activará cada vez que el documento cambie
  const unsubscribe = onSnapshot(docRef, 
    // Callback cuando hay cambios
    (docSnapshot) => {
      if (docSnapshot.exists()) {
        const data = docSnapshot.data();
        logger.debug('Datos actualizados recibidos en tiempo real:', data);
        callback({
          success: true,
          data: data
        });
      } else {
        logger.debug('El documento de precios no existe');
        // Si no existe, intentar crearlo con valores por defecto
        setDoc(docRef, DEFAULTS)
          .then(() => {
            logger.debug('Documento creado con valores por defecto');
            callback({
              success: true,
              data: DEFAULTS
            });
          })
          .catch(error => {
            logger.error('Error al crear documento:', error);
            callback({
              success: false,
              error: error.message
            });
          });
      }
    },
    // Callback de error
    (error) => {
      logger.error('Error en listener:', error);
      callback({
        success: false,
        error: error.message
      });
    }
  );
  
  // Devolver función para detener la escucha cuando sea necesario
  return unsubscribe;
};

// Obtener tasa de cambio basada en el monto
export const obtenerTasaCambio = async (sekAmount) => {
  // Primero obtener los precios actuales
  const precios = await obtenerPrecios();
  
  // Determinar qué precio usar
  return sekAmount >= precios.umbralEspecial ? 
    precios.precioEspecial : 
    precios.precioEstandar;
}; 