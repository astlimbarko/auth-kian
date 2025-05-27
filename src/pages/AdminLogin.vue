<template>
  <div class="login-container">
    <div class="login-box">
      <h1 class="header">ENVIOS KIAN</h1>
      <p class="subheader">ADMINISTRATIV PANEL 2.0</p>

      <transition name="fade">
        <form @submit.prevent="iniciarSesion" class="login-form">
          <!-- Mensaje de error -->
          <div v-if="error" class="error-message">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="error-icon">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd" />
            </svg>
            <span>{{ error }}</span>
          </div>

          <!-- Campo de email -->
          <div class="input-group">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="input-icon">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>
            <input 
              v-model="email" 
              type="email" 
              placeholder="E-post" 
              required
              autocomplete="email"
              name="email"
              inputmode="email"
            />
          </div>

          <!-- Campo de contraseña -->
          <div class="input-group">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="input-icon">
              <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd" />
            </svg>
            <input 
              :type="mostrarPassword ? 'text' : 'password'" 
              v-model="password" 
              placeholder="Lösenord" 
              required
            />
            <button 
              type="button" 
              @click="mostrarPassword = !mostrarPassword" 
              class="password-toggle"
            >
              <svg v-if="mostrarPassword" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                <path fill-rule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clip-rule="evenodd" />
              </svg>
              <svg v-else xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M3.28 2.22a.75.75 0 00-1.06 1.06l14.5 14.5a.75.75 0 101.06-1.06l-1.745-1.745a10.029 10.029 0 003.3-4.38 1.651 1.651 0 000-1.185A10.004 10.004 0 009.999 3a9.956 9.956 0 00-4.744 1.194L3.28 2.22zM7.752 6.69l1.092 1.092a2.5 2.5 0 013.374 3.373l1.091 1.092a4 4 0 00-5.557-5.557z" clip-rule="evenodd" />
                <path d="M10.748 13.93l2.523 2.523a9.987 9.987 0 01-3.27.547c-4.258 0-7.894-2.66-9.337-6.41a1.651 1.651 0 010-1.186A10.007 10.007 0 012.839 6.02L6.07 9.252a4 4 0 004.678 4.678z" />
              </svg>
            </button>
          </div>

          <!-- Checkbox de Recordar sesión -->
          <div class="remember-me">
            <label class="remember-me-label">
              <input 
                type="checkbox" 
                v-model="rememberMe"
                class="remember-me-checkbox"
              >
              <span>Kom ihåg mig</span>
            </label>
          </div>

          <!-- Botón de inicio de sesión -->
          <button 
            type="submit" 
            :disabled="cargando" 
            class="login-button"
          >
            <span v-if="cargando" class="loader"></span>
            <span>{{ cargando ? 'Loggar in...' : 'Logga in' }}</span>
          </button>

          <!-- Enlace para volver -->
           <!-- 
          <div class="back-link">
            <router-link to="/">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z" clip-rule="evenodd" />
              </svg>
              <span>Tillbaka till kalkylatorn</span>
            </router-link>
          </div>
          -->

        </form>
      </transition>
    </div>
    
    <!-- Pie de página -->
    <div class="footer">
      <p>© {{ new Date().getFullYear() }} Envios Kian · Alla rättigheter förbehållna</p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { useRouter } from 'vue-router';
import { iniciarSesionConEmailYPassword, verificarAutenticacion, observarCambiosDeAutenticacion } from '../services/authService';

// Cargar la fuente de manera programática para evitar problemas CORS
onMounted(() => {
  // Crear elemento link para la fuente
  const fontLink = document.createElement('link');
  fontLink.href = 'https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap';
  fontLink.rel = 'stylesheet';
  fontLink.crossOrigin = 'anonymous'; // Añadir atributo crossorigin
  document.head.appendChild(fontLink);

  // Aplicar el degradado al fondo de forma directa
  const customCSS = `
    body, html {
      background: linear-gradient(135deg, #f5f7fa, #e9edf2) !important;
      background-color: transparent !important;
      background-image: linear-gradient(135deg, #f5f7fa, #e9edf2) !important;
      margin: 0 !important;
      padding: 0 !important;
      min-height: 100vh !important;
      min-width: 100vw !important;
      overflow-x: hidden !important;
    }
  `;
  
  const styleElement = document.createElement('style');
  styleElement.setAttribute('id', 'login-gradient-style');
  styleElement.textContent = customCSS;
  document.head.appendChild(styleElement);
});

// Revertir el color de fondo cuando se abandone la página
onUnmounted(() => {
  // Eliminar el estilo personalizado
  const styleElement = document.getElementById('login-gradient-style');
  if (styleElement) {
    styleElement.remove();
  }
  
  document.body.style.background = 'white';
  document.documentElement.style.background = 'white';
});

const router = useRouter();
const email = ref('');
const password = ref('');
const error = ref('');
const cargando = ref(false);
const mostrarPassword = ref(false);
const rememberMe = ref(false);

// Configurar escuchadores de eventos al montar
let unsubscribe = null;

onMounted(async () => {
  try {
    // Configurar observador de cambios de autenticación
    unsubscribe = observarCambiosDeAutenticacion((user) => {
      if (user) {
        console.log('Usuario autenticado detectado, redirigiendo al panel...');
        router.push('/admin/panel');
      }
    });

    // Verificar si ya hay una sesión activa
    const estaAutenticado = await verificarAutenticacion();
    if (estaAutenticado) {
      console.log('Usuario ya autenticado, redirigiendo al panel...');
      router.push('/admin/panel');
    }
  } catch (error) {
    console.error('Error al verificar autenticación:', error);
  }
});

// Limpiar el observador al desmontar
onUnmounted(() => {
  if (unsubscribe) {
    unsubscribe();
  }
});

const iniciarSesion = async () => {
  error.value = '';
  cargando.value = true;
  
  try {
    // Validaciones básicas
    if (!email.value.trim()) {
      error.value = 'Ange en e-postadress.';
      cargando.value = false;
      return;
    }
    
    if (!password.value.trim()) {
      error.value = 'Ange ett lösenord.';
      cargando.value = false;
      return;
    }
    
    // Verificar que el email tenga un formato válido
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.value)) {
      error.value = 'Ange en giltig e-postadress.';
      cargando.value = false;
      return;
    }
    
    // Verificar si ya hay una sesión activa
    const estaAutenticado = await verificarAutenticacion();
    if (estaAutenticado) {
      console.log('Usuario ya autenticado, redirigiendo al panel...');
      router.push('/admin/panel');
      return;
    }
    
    // Simulamos un retraso para dar sensación de procesamiento
    await new Promise(resolve => setTimeout(resolve, 800));
    
    console.log('Intentando autenticación con Firebase para:', email.value);
    // Intento de autenticación con Firebase usando el servicio
    const resultado = await iniciarSesionConEmailYPassword(email.value, password.value, rememberMe.value);
    
    if (resultado.success) {
      console.log('Usuario autenticado con Firebase:', resultado.user);
      router.push('/admin/panel');
    } else {
      console.error('Error de Firebase:', resultado.error);
      // Traducir mensaje de error al sueco
      if (resultado.error?.code === 'auth/invalid-credential') {
        error.value = 'Felaktiga uppgifter. Försök igen.';
      } else if (resultado.error?.code === 'auth/too-many-requests') {
        error.value = 'För många försök. Försök igen senare.';
      } else if (resultado.error?.code === 'auth/user-not-found') {
        error.value = 'Användaren hittades inte.';
      } else if (resultado.error?.code === 'auth/wrong-password') {
        error.value = 'Felaktigt lösenord.';
      } else if (resultado.error?.code === 'auth/network-request-failed') {
        error.value = 'Nätverksfel. Kontrollera din anslutning.';
      } else {
        error.value = `Ett fel uppstod vid inloggningen: ${resultado.error?.code || 'okänt fel'}`;
      }
    }
  } catch (err) {
    console.error('Error inesperado al iniciar sesión:', err);
    error.value = `Ett fel uppstod vid inloggningen: ${err.message || 'okänt fel'}`;
  } finally {
    cargando.value = false;
  }
};
</script>

<style scoped>
:root {
  --primary-color: #0073e6;
  --primary-hover: #0056b3;
  --bg-color: #f0f0f0;
  --input-bg: #fff;
  --input-border: #ccc;
  --input-hover: #f2f2f2;
  --btn-color: #fff;
  --error-color: #ef4444;
  --text-color: #333;
  --text-muted: #666;
}

*, *::before, *::after {
  box-sizing: border-box;
}

.login-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  position: relative; /* necesario para que el ::before se posicione bien */
  z-index: 0;

  background: linear-gradient(135deg, #242424, #161616); 
  /* background: linear-gradient(135deg, #f0f0f0, #d9d9d9); */
  font-family: 'Poppins', system-ui, -apple-system, BlinkMacSystemFont, sans-serif;
  overflow: hidden; /* evita que el pseudo-elemento sobresalga */
}

.login-container::before {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  background-image: url('/6106991.jpg');
  background-size: cover;
  background-position: center;
  opacity: 0.3; /* 👈 nivel de fantasma */
  filter: blur(1px); /* 👈 aquí el desenfoque */
  z-index: -1; /* 👈 asegura que quede detrás del contenido */
  pointer-events: none; /* por si acaso, para que no interfiera con clics */
}




:deep(body), :deep(html) {
  margin: 0;
  padding: 0;
  min-height: 100vh;
  background: linear-gradient(135deg, #f5f7fa, #e9edf2) !important;
}

.login-box {
  width: 100%;
  max-width: 400px;
  padding: 2rem;
  border-radius: 12px;
  background-color: white;
  box-shadow: 0 0 10px rgba(0,0,0,0.1);
  text-align: center;
  border: 1px solid var(--input-border);
  position: relative;
  overflow: hidden;
}

.header {
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--primary-color);
  margin: 0 0 1rem;
}

.subheader {
  font-size: 0.875rem;
  font-weight: 400;
  color: var(--text-muted);
  margin-top: 0;
  margin-bottom: 1.5rem;
}

.login-form {
  display: flex;
  flex-direction: column;
}

.input-group {
  position: relative;
  margin-bottom: 1rem;
}

.input-icon {
  position: absolute;
  left: 1rem;
  top: 50%;
  transform: translateY(-50%);
  width: 1rem;
  height: 1rem;
  color: var(--text-muted);
}

input {
  width: 100%;
  padding: 0.75rem 1rem 0.75rem 2.5rem;
  border: 1px solid var(--input-border);
  border-radius: 8px;
  background-color: var(--input-bg);
  font-size: 0.95rem;
  transition: all 0.2s;
}

input:focus {
  outline: none;
  border-color: var(--primary-color);
  background-color: var(--input-hover);
}

.password-toggle {
  position: absolute;
  right: 0.75rem;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  color: var(--text-muted);
  width: 1.25rem;
  height: 1.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.password-toggle:hover {
  color: var(--primary-color);
}

.password-toggle svg {
  width: 100%;
  height: 100%;
}

.login-button {
  margin-top: 0.5rem;
  padding: 0.75rem 1rem;
  border: none;
  border-radius: 8px;
  background: linear-gradient(to right, #3073ad, #d94cba);
  color: white;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  letter-spacing: 0.5px;
}

.login-button:hover:not(:disabled) {
  background: linear-gradient(to right, #2a689c, #c43aa7);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  transform: translateY(-1px);
}

.login-button:active:not(:disabled) {
  transform: translateY(1px);
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
}

.login-button:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

.loader {
  width: 1rem;
  height: 1rem;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  border-top-color: white;
  animation: spin 1s ease-in-out infinite;
  margin-right: 0.5rem;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

.error-message {
  display: flex;
  align-items: flex-start;
  padding: 0.75rem;
  margin-bottom: 1rem;
  background-color: rgba(239, 68, 68, 0.1);
  border-radius: 8px;
  color: var(--error-color);
  font-size: 0.875rem;
  text-align: left;
}

.error-icon {
  width: 1rem;
  height: 1rem;
  margin-right: 0.5rem;
  margin-top: 0.125rem;
  flex-shrink: 0;
}

.back-link {
  margin-top: 1.5rem;
  font-size: 0.875rem;
  text-align: center;
}

.back-link a {
  color: #2563eb;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  transition: all 0.2s ease;
  font-weight: 500;
  padding: 0.3rem 0;
}

.back-link a:hover {
  color: #1d4ed8;
  text-decoration: underline;
}

.back-link svg {
  width: 0.875rem;
  height: 0.875rem;
  margin-right: 0.375rem;
}

.footer {
  margin-top: 2rem;
  color: #f2f2f2;
  font-size: 0.75rem;
  text-align: center;
}

/* Animations */
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes fadeOut {
  from { opacity: 1; transform: translateY(0); }
  to { opacity: 0; transform: translateY(10px); }
}

.fade-enter-active {
  animation: fadeIn 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
}

.fade-leave-active {
  animation: fadeOut 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
}

/* Responsive */
@media (max-width: 576px) {
  .login-box {
    width: 90%;
    padding: 1.5rem;
    margin: 0 1rem;
  }
  
  .header {
    font-size: 1.25rem;
  }
}

/* Específicamente para esta página, asegurar que el fondo sea el gradiente */
::v-deep() {
  body {
    background: linear-gradient(135deg, #f5f7fa, #e9edf2) !important;
    margin: 0 !important;
    padding: 0 !important;
    min-height: 100vh !important;
  }
  
  html {
    background: linear-gradient(135deg, #f5f7fa, #e9edf2) !important;
    margin: 0 !important;
    padding: 0 !important;
    min-height: 100vh !important;
  }
}

/* Estilo adicional con alta especificidad para el body */
:deep(#app) body,
:deep(html) body,
:deep(body) {
  background: linear-gradient(135deg, #f5f7fa, #e9edf2) !important;
  background-color: transparent !important;
  margin: 0 !important;
  padding: 0 !important;
  min-height: 100vh !important;
}

.remember-me {
  margin: 15px 0;
  display: flex;
  align-items: center;
}

.remember-me-label {
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  font-size: 0.9rem;
  color: #4b5563;
}

.remember-me-checkbox {
  width: 16px;
  height: 16px;
  cursor: pointer;
}
</style> 