import { db, doc, getDoc, setDoc, onSnapshot } from '../firebase';
import { arrayUnion, updateDoc } from 'firebase/firestore';
import logger from '../utils/logger';

// No usamos valores por defecto, forzamos a que se obtengan de Firestore
const DEFAULTS = {
  precioEstandar: null,
  precioEspecial: null,
  umbralEspecial: 5000
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
        throw new Error('La estructura de los datos en Firestore no es válida');
      }
      
      return data;
    } else {
      logger.error("No se encontró el documento de precios en Firestore");
      // Verificar si la colección existe
      try {
        const colRef = collection(db, 'configuracion');
        const colSnapshot = await getDocs(colRef);
        const docs = colSnapshot.docs.map(doc => doc.id);
        logger.error('Documentos en la colección "configuracion":', docs);
      } catch (colError) {
        logger.error('Error al verificar la colección configuracion:', colError);
      }
      
      throw new Error("No se encontró la configuración de precios en la base de datos");
    }
  } catch (error) {
    logger.error("Error al obtener precios:", error);
    logger.error('Tipo de error:', error.name);
    logger.error('Mensaje de error:', error.message);
    
    // Verificar si es un error de permisos
    if (error.code === 'permission-denied') {
      logger.error('Error de permisos: La aplicación no tiene permisos para acceder a Firestore');
    }
    
    // Verificar si hay problemas de red
    if (error.code === 'unavailable') {
      logger.error('Error de red: No se pudo conectar a Firestore');
    }
    
    throw error; // Propagar el error para manejarlo en el componente
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