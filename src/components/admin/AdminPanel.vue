import { obtenerPrecios, guardarPrecios, inicializarPrecios } from '../../services/preciosService';

const cargarPrecios = async () => {
  try {
    console.log('Cargando precios desde Firebase...');
    const precios = await obtenerPrecios();
    
    if (!precios) {
      throw new Error('No se pudieron obtener los precios');
    }
    
    // Actualizar los valores reactivos
    precioEstandar.value = precios.precioEstandar;
    precioEspecial.value = precios.precioEspecial;
    umbralEspecial.value = precios.umbralEspecial || 5000;
    
    console.log('Precios cargados exitosamente:', precios);
  } catch (error) {
    console.error('Error al cargar los precios:', error.message, error);
    mostrarError(error.message);
  }
}; 