<template>
  <header class="admin-header">
    <div class="header-content">
      <!-- Logo y título -->
      <div class="logo-title">
        <div class="logo-container">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" class="logo-icon">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        </div>
        <div>
          <h1>Administrativ Panel 2.0</h1>
         <!-- <p>Envios Kian</p> -->
          <span class="user-email">{{ userEmail }}</span>
        </div>
      </div>
      
      <!-- Botón de cerrar sesión -->
      <button 
        @click="cerrarSesion" 
        class="logout-button"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="button-icon">
          <path fill-rule="evenodd" d="M3 3a1 1 0 00-1 1v12a1 1 0 001 1h12a1 1 0 001-1V4a1 1 0 00-1-1H3zm11 3a1 1 0 00-1-1H7a1 1 0 00-1 1v1a1 1 0 001 1h6a1 1 0 001-1V6zm-7.25 4.937a.75.75 0 01.344-.657l2.25-1.5a.75.75 0 01.812 0l2.25 1.5a.75.75 0 010 1.307l-2.25 1.5a.75.75 0 01-.812 0l-2.25-1.5a.75.75 0 01-.344-.65V10.5h-1V9.937z" clip-rule="evenodd" />
        </svg>
        Logga ut
      </button>
    </div>
  </header>
</template>

<script setup>
import { defineEmits, ref, onMounted } from 'vue';
import { obtenerUsuarioActual } from '../../services/authService';

// Definir los eventos que emite este componente
const emit = defineEmits(['cerrar-sesion']);

const userEmail = ref('');

onMounted(async () => {
  const user = obtenerUsuarioActual();
  if (user) {
    userEmail.value = user.email;
  }
});

/**
 * Maneja el evento de cerrar sesión
 */
const cerrarSesion = () => {
  // Emitir evento para que el componente padre lo maneje
  emit('cerrar-sesion');
};
</script>

<style scoped>
/* Estilos del encabezado */
.admin-header {
  background-color: white;
  border-bottom: 1px solid var(--border-color, #e1e4e8);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  padding: 0.65rem 1rem;
  flex: 0 0 auto;
  width: 100%;
  box-sizing: border-box;
  overflow: hidden;
}

.header-content {
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  box-sizing: border-box;
}

.logo-title {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.logo-container {
  background: linear-gradient(to right, #3073ad, #d94cba);
  padding: 0.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
}

.logo-icon {
  width: 1.25rem;
  height: 1.25rem;
  color: white;
}

.logo-title h1 {
  font-size: 1.2rem;
  font-weight: 600;
  margin: 0;
  color: var(--text-primary, #333);
}

.logo-title p {
  font-size: 0.8rem;
  color: var(--text-secondary, #666);
  margin: 0;
}

.logout-button {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  background-color: white;
  border: 1px solid var(--border-color, #e1e4e8);
  border-radius: 8px;
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--text-primary, #333);
  cursor: pointer;
  transition: all 0.2s ease;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
}

.logout-button:hover {
  background-color: #f5f5f5;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.button-icon {
  width: 1rem;
  height: 1rem;
  color: var(--text-secondary, #666);
}

/* Responsive */
@media (max-width: 640px) {
  .admin-header {
    padding: 0.5rem 0.75rem;
    width: 100%;
    overflow-x: hidden;
  }
  
  .logo-title h1 {
    font-size: 1rem;
  }
  
  .logo-title p {
    font-size: 0.75rem;
  }
  
  .logout-button {
    padding: 0.4rem 0.8rem;
    font-size: 0.8rem;
  }
  
  .button-icon {
    width: 0.9rem;
    height: 0.9rem;
  }
  
  .logo-icon {
    width: 1.1rem;
    height: 1.1rem;
  }
}

.logo-section {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.user-email {
  font-size: 0.8rem;
  color: #666;
  margin-top: 2px;
}
</style> 