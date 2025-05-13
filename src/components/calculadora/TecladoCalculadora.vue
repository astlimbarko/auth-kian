<template>
  <div class="teclado-container">
    <div class="fila-teclas">
      <button class="tecla" @click="agregarNumero('7')">7</button>
      <button class="tecla" @click="agregarNumero('8')">8</button>
      <button class="tecla" @click="agregarNumero('9')">9</button>
      <button class="tecla tecla-borrar" @click="borrarUltimo">←</button>
    </div>
    <div class="fila-teclas">
      <button class="tecla" @click="agregarNumero('4')">4</button>
      <button class="tecla" @click="agregarNumero('5')">5</button>
      <button class="tecla" @click="agregarNumero('6')">6</button>
      <button class="tecla tecla-limpiar" @click="limpiar">C</button>
    </div>
    <div class="fila-teclas">
      <button class="tecla" @click="agregarNumero('1')">1</button>
      <button class="tecla" @click="agregarNumero('2')">2</button>
      <button class="tecla" @click="agregarNumero('3')">3</button>
      <button class="tecla tecla-intercambiar" @click="intercambiarInputs">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M21 17H3M21 7H3M10 3L6 7L10 11M18 13L14 17L18 21"/>
        </svg>
      </button>
    </div>
    <div class="fila-teclas">
      <button class="tecla" @click="agregarNumero('0')">0</button>
      <button class="tecla" @click="agregarNumero('00')">00</button>
      <button class="tecla" @click="agregarNumero('.')">.</button>
      <div class="tecla tecla-vacia"></div>
    </div>
    <!-- Sistema de feedback -->
    <transition name="fade">
      <div v-if="feedback.mostrar" :class="['feedback-message', feedback.tipo]">
        <svg v-if="feedback.tipo === 'success'" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
        </svg>
        <svg v-else xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd" />
        </svg>
        <span>{{ feedback.mensaje }}</span>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

const emit = defineEmits(['agregarNumero', 'borrarUltimo', 'limpiar', 'intercambiarInputs']);
const mostrarNotificacion = ref(false);

// Sistema de feedback
const feedback = ref({
  mostrar: false,
  mensaje: '',
  tipo: 'success'
});

const agregarNumero = (numero) => {
  emit('agregarNumero', numero);
};

const borrarUltimo = () => {
  emit('borrarUltimo');
};

const limpiar = () => {
  emit('limpiar');
};

const mostrarFeedback = (mensaje, tipo = 'success') => {
  feedback.value = {
    mostrar: true,
    mensaje,
    tipo
  };
  
  // Ocultar después de 3 segundos
  setTimeout(() => {
    feedback.value.mostrar = false;
  }, 3000);
};

const intercambiarInputs = () => {
  emit('intercambiarInputs');
};
</script>

<style scoped>
.teclado-container {
  display: flex;
  flex-direction: column;
  gap: 0;
  width: 100%;
  max-width: 100%;
  padding: 0;
  box-sizing: border-box;
  flex: 1;
  position: relative;
  overflow: hidden;
  min-height: 0;
  height: 100%;
  align-items: stretch;
}

.fila-teclas {
  display: flex;
  gap: 0.15rem;
  width: 100%;
  justify-content: space-between;
  flex: 1;
  min-height: 0;
  margin: 0;
  padding: 0;
  height: 25%;
  align-items: stretch;
}

.tecla {
  flex: 1;
  min-width: 0;
  min-height: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: clamp(1.25rem, 4vw, 2rem);
  font-weight: bold;
  color: #333;
  background-color: #f0f0f0;
  border: 1px solid #ddd;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.2s ease;
  padding: 0;
  margin: 0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  height: 100%;
  flex-grow: 1;
  align-self: stretch;
}

.tecla:active {
  transform: scale(0.95);
  background-color: #e0e0e0;
}

.tecla-borrar {
  background-color: #ff6b6b;
  color: white;
}

.tecla-limpiar {
  background-color: #ffd166;
  color: #333;
}

.tecla-intercambiar {
  background-color: #4cc9f0;
  color: white;
}

.tecla-vacia {
  background-color: transparent;
  border: none;
  box-shadow: none;
  cursor: default;
}

.tecla-intercambiar svg {
  width: clamp(1.5rem, 5vw, 2rem);
  height: clamp(1.5rem, 5vw, 2rem);
}

@media (min-width: 768px) {
  .teclado-container {
    gap: 0.25rem;
    padding: 0.25rem;
  }
  
  .fila-teclas {
    gap: 0.25rem;
  }
  
  .tecla {
    font-size: clamp(1.75rem, 3vw, 2.25rem);
  }

  .tecla-intercambiar svg {
    width: clamp(1.75rem, 3vw, 2rem);
    height: clamp(1.75rem, 3vw, 2rem);
  }
}

@media (min-width: 1024px) {
  .teclado-container {
    gap: 0.35rem;
    padding: 0.35rem;
  }
  
  .fila-teclas {
    gap: 0.35rem;
  }
  
  .tecla {
    font-size: clamp(1.75rem, 2vw, 2rem);
  }

  .tecla-intercambiar svg {
    width: clamp(1.75rem, 2vw, 2rem);
    height: clamp(1.75rem, 2vw, 2rem);
  }
}

/* Estilos para el sistema de feedback */
.feedback-message {
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  padding: 12px 24px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.9rem;
  font-weight: 500;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 1000;
}

.feedback-message.success {
  background-color: #10b981;
  color: white;
}

.feedback-message.error {
  background-color: #ef4444;
  color: white;
}

.feedback-message svg {
  width: 1.25rem;
  height: 1.25rem;
}

/* Animaciones para el feedback */
.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translate(-50%, 20px);
}

/* Ajustes específicos para móvil y tablet */
@media (max-width: 1024px) {
  .teclado-container {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 0.1rem;
    gap: 0.1rem;
    min-height: 0;
    height: 100%;
  }

  .fila-teclas {
    flex: 1;
    display: flex;
    justify-content: space-between;
    gap: 0.1rem;
    margin-bottom: 0.05rem;
    min-height: 0;
    height: 25%;
  }

  .tecla {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.4rem;
    font-size: clamp(1.25rem, 3.5vw, 1.75rem);
    min-height: 0;
    height: 100%;
  }
}

/* Ajustes específicos para iOS */
@supports (-webkit-touch-callout: none) {
  .teclado-container {
    flex: none;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 0;
    gap: 0;
    min-height: 0;
    height: 40%;
    margin: 0;
    align-items: stretch;
    position: absolute;
    bottom: 2rem;
    left: 0;
    right: 0;
    z-index: 1;
    top: auto;
    margin-top: -0.5rem; /* Ajuste para acercar al input */
  }

  .fila-teclas {
    flex: 1;
    min-height: 0;
    height: 25%;
    margin: 0;
    padding: 0;
    gap: 0.1rem;
    align-items: stretch;
    display: flex;
    justify-content: space-between;
  }

  .tecla {
    height: 100%;
    min-height: 0;
    padding: 0;
    margin: 0;
    border-radius: 0;
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: clamp(1.25rem, 3.5vw, 1.75rem);
  }

  .tecla:active {
    transform: scale(0.95);
    background-color: #e0e0e0;
  }
}
</style> 