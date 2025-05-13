# Calculadora de Conversión KIAN

## Descripción
Calculadora de conversión de divisas especializada para envíos de dinero entre Suecia y Bolivia. Esta aplicación permite convertir valores entre Coronas Suecas (SEK) y Bolivianos (BOB) de manera rápida y sencilla.

## Características
- Conversión instantánea entre SEK y BOB
- Interfaz intuitiva con banderas de los países
- Teclado numérico integrado estilo calculadora
- Navegación con teclas de flecha (arriba/abajo) entre las divisas
- Diseño responsive adaptado a diferentes dispositivos
- Indicador visual del campo activo
- Panel de administración para actualizar tasas de cambio
- Carga de precios en tiempo real desde Firebase
- Metadatos optimizados para compartir en redes sociales

## Actualizaciones Recientes
- **22/06/2024** - Optimización para compartir en redes sociales: Se añadieron metadatos para mejor visualización al compartir enlaces en WhatsApp y otras plataformas.
- **22/06/2024** - Mejora en la experiencia de usuario: Se implementó la visualización de guiones ("---") durante la carga de precios para evitar mostrar valores temporales.
- **21/06/2024** - Corrección de problemas de responsividad: Se eliminó la barra de desplazamiento horizontal en dispositivos móviles.
- **20/06/2024** - Implementación de Panel Administrativo: Se creó una interfaz para actualizar las tasas de cambio.

## Tecnologías
- Vue 3 con Composition API
- Vite como herramienta de construcción
- Tailwind CSS para estilos
- Firebase (Firestore y Hosting)
- Autenticación segura para el panel de administración

## Instalación

```bash
# Clonar el repositorio
git clone [url-del-repositorio]

# Ingresar al directorio
cd kian-calculadora

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev
```

## Uso
1. Ingrese la cantidad en Coronas Suecas (SEK) o Bolivianos (BOB)
2. La conversión se realiza automáticamente
3. Use las teclas de flecha (↑/↓) para alternar entre divisas
4. Pulse Enter para confirmar la conversión

## Acceso al Panel Administrativo
- URL: https://calculadora-kian.web.app/admin/login
- Se requieren credenciales de administrador para acceder

## Sitio Web Público
- URL: https://calculadora-kian.web.app

## Desarrollado por
Astlimbark - Para Envios Kian
astlimbark@gmail.com
