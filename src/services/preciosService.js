import { db, doc, getDoc, setDoc, onSnapshot } from '../firebase';
import { arrayUnion, updateDoc } from 'firebase/firestore';
import logger from '../utils/logger';

// Valores por defecto para cuando no hay datos en Firestore
const DEFAULTS = {
  precioEstandar: 0,
  precioEspecial: 0,
  umbralEspecial: 5000,
  ultimaActualizacion: new Date().toLocaleString('es-BO', { timeZone: 'America/La_Paz' }),
  usuario: 'sistema',
  historial: [{
    precioEstandar: 0,
    precioEspecial: 0,
    fecha: new Date().toLocaleString('es-BO', { timeZone: 'America/La_Paz' }),
    usuario: 'sistema'
  }]
};

// Función para inicializar los precios si no existen
export const inicializarPrecios = async () => {
  try {
    logger.debug('Inicializando precios en Firestore...');
    const docRef = doc(db, 'configuracion', 'precios');
    const docSnap = await getDoc(docRef);
    
    if (!docSnap.exists()) {
      logger.debug('No se encontró el documento de precios, creando con valores por defecto...');
      await setDoc(docRef, DEFAULTS);
      logger.debug('Documento de precios creado exitosamente');
      return DEFAULTS;
    }
    
    return docSnap.data();
  } catch (error) {
    logger.error('Error al inicializar precios:', error);
    throw error;
  }
};

// Obtener precios desde Firestore
export const obtenerPrecios = async () => {
  try {
    logger.debug('Obteniendo precios de Firestore...');
    logger.debug('Ruta del documento: configuracion/precios');
    
    const docRef = doc(db, 'configuracion', 'precios');
    logger.debug('Referencia al documento creada:', docRef.path);
    
    logger.debug('Intentando obtener documento...');
    const docSnap = await getDoc(docRef);
    logger.debug('Respuesta de Firestore recibida');
    
    if (docSnap.exists()) {
      const data = docSnap.data();
      logger.debug("Datos obtenidos de Firestore:", JSON.stringify(data, null, 2));
      
      // Verificar que los datos tengan la estructura esperada
      if (!data.precioEstandar || !data.precioEspecial) {
        logger.error('Los datos obtenidos no tienen la estructura esperada:', data);
        // En lugar de lanzar error, intentamos inicializar
        return await inicializarPrecios();
      }
      
      return data;
    } else {
      logger.error("No se encontró el documento de precios en Firestore");
      // En lugar de lanzar error, intentamos inicializar
      return await inicializarPrecios();
    }
  } catch (error) {
    logger.error('Error al obtener precios:', error);
    // En caso de error, devolvemos los valores por defecto
    return DEFAULTS;
  }
};

// Guardar precios en Firestore
export const guardarPrecios = async (estandar, especial, usuario) => {
  try {
    logger.debug('preciosService: Iniciando guardarPrecios');
    logger.debug('Usuario que realiza el cambio:', usuario);
    
    // Obtener la fecha actual en la zona horaria de Bolivia (UTC-4)
    const fechaBolivia = new Date().toLocaleString('es-BO', { timeZone: 'America/La_Paz' });
    
    // Obtener el documento actual para mantener la estructura existente
    const docRef = doc(db, 'configuracion', 'precios');
    const docSnap = await getDoc(docRef);
    
    // Validar que el usuario no sea undefined o null
    const usuarioValido = usuario && usuario !== 'undefined' && usuario !== 'null' ? usuario : 'Usuario no identificado';
    
    // Preparar los datos a actualizar
    const datosActualizados = {
      precioEstandar: estandar,
      precioEspecial: especial,
      ultimaActualizacion: fechaBolivia,
      usuario: usuarioValido
    };
    
    // Manejar el historial
    if (docSnap.exists()) {
      const data = docSnap.data();
      const historialActual = data.historial || [];
      
      // Agregar el nuevo cambio al historial
      const nuevoCambio = {
        precioEstandar: estandar,
        precioEspecial: especial,
        fecha: fechaBolivia,
        usuario: usuarioValido
      };
      
      // Mantener solo los últimos 10 cambios
      const historialActualizado = [nuevoCambio, ...historialActual].slice(0, 10);
      datosActualizados.historial = historialActualizado;
    } else {
      // Si es el primer cambio, crear el historial
      datosActualizados.historial = [{
        precioEstandar: estandar,
        precioEspecial: especial,
        fecha: fechaBolivia,
        usuario: usuarioValido
      }];
    }
    
    // Guardar los datos actualizados
    await setDoc(docRef, datosActualizados, { merge: true });
    
    logger.debug('preciosService: Precios guardados exitosamente');
    return { success: true };
  } catch (error) {
    logger.error('preciosService: Error al guardar precios:', error);
    throw error;
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