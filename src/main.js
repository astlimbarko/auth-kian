import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import './firebase' // Importamos la configuración de Firebase

const app = createApp(App)
app.use(router)

// Desactivar los mensajes de consola en producción
if (import.meta.env.PROD) {
  // Guardamos los métodos originales de console
  const originalConsole = { ...console };
  
  // Reemplazamos los métodos de depuración para que no hagan nada en producción
  console.log = () => {};
  console.debug = () => {};
  console.info = () => {};
  
  // Mantenemos errores y advertencias
  console.warn = originalConsole.warn;
  console.error = originalConsole.error;
}

// Esta es una configuración para desarrollo que permite
// modificar físicamente el archivo precios.js
if (typeof window !== 'undefined' && !window.electronAPI) {
  window.electronAPI = {
    guardarPreciosEnArchivo: async (estandar, especial) => {
      try {
        console.log('Guardando precios en el archivo físico...', estandar, especial);
        
        // Llamar al endpoint que hemos configurado en el plugin de Vite
        const response = await fetch('/api/actualizar-precios', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ estandar, especial }),
        });
        
        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.error || 'Error al guardar precios');
        }
        
        const data = await response.json();
        console.log('✅ Precios guardados correctamente:', data);
        
        // Emitir un evento global que puede ser capturado por el componente
        if (data.success) {
          // Pequeño delay antes de emitir el evento para evitar que se pierda
          setTimeout(() => {
            const evento = new CustomEvent('precios-actualizados', { 
              detail: { 
                success: true, 
                precios: { estandar, especial }
              }
            });
            console.log('Emitiendo evento precios-actualizados');
            window.dispatchEvent(evento);
          }, 300);
        }
        
        return data;
      } catch (error) {
        console.error('Error al guardar precios en el archivo:', error);
        
        // Pequeño delay antes de emitir el evento para evitar que se pierda
        setTimeout(() => {
          const evento = new CustomEvent('precios-error', { 
            detail: { error: error.message }
          });
          console.log('Emitiendo evento precios-error');
          window.dispatchEvent(evento);
        }, 300);
        
        // Re-lanzar el error para que se pueda manejar en la UI
        throw error;
      }
    }
  };
}

app.mount('#app')
