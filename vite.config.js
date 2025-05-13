import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { nodePolyfills } from 'vite-plugin-node-polyfills'
import fs from 'fs-extra'
import path from 'path'

// Plugin personalizado para permitir actualizar el archivo de precios
const actualizadorPrecios = () => {
  return {
    name: 'actualizador-precios',
    configureServer(server) {
      // Ruta al archivo de precios
      const rutaArchivo = path.resolve(__dirname, 'src/constants/precios.js')
      
      server.middlewares.use('/api/actualizar-precios', async (req, res) => {
        // Solo permitir solicitudes POST
        if (req.method !== 'POST') {
          res.statusCode = 405
          res.end('Método no permitido')
          return
        }
        
        try {
          // Obtener los datos enviados
          const chunks = []
          for await (const chunk of req) {
            chunks.push(chunk)
          }
          const data = JSON.parse(Buffer.concat(chunks).toString())
          
          // Validar los datos recibidos
          if (typeof data.estandar !== 'number' || typeof data.especial !== 'number') {
            res.statusCode = 400
            res.end(JSON.stringify({ error: 'Datos inválidos' }))
            return
          }
          
          // Leer el archivo actual
          const contenido = await fs.readFile(rutaArchivo, 'utf-8')
          
          // Reemplazar los valores de las variables
          const nuevoContenido = contenido
            .replace(/let PRECIO_ESTANDAR = [^;]+;/, `let PRECIO_ESTANDAR = ${data.estandar};`)
            .replace(/let PRECIO_ESPECIAL = [^;]+;/, `let PRECIO_ESPECIAL = ${data.especial};`)
          
          // Guardar el archivo con los nuevos valores
          await fs.writeFile(rutaArchivo, nuevoContenido, 'utf-8')
          
          // Enviar respuesta exitosa
          res.statusCode = 200
          res.setHeader('Content-Type', 'application/json')
          res.end(JSON.stringify({ 
            success: true, 
            message: 'Precios actualizados correctamente',
            precios: {
              estandar: data.estandar,
              especial: data.especial
            }
          }))
          
          console.log('✅ Archivo precios.js actualizado correctamente')
        } catch (error) {
          console.error('Error al actualizar precios:', error)
          res.statusCode = 500
          res.end(JSON.stringify({ error: 'Error interno del servidor' }))
        }
      })
    }
  }
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    nodePolyfills(),
    actualizadorPrecios()
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  build: {
    rollupOptions: {
      output: {
        entryFileNames: `assets/[name].[hash].js`,
        chunkFileNames: `assets/[name].[hash].js`,
        assetFileNames: `assets/[name].[hash].[ext]`
      }
    }
  }
})
