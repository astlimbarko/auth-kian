import { ref, computed } from 'vue';

const visible = ref(false);
const message = ref('');
const type = ref('info');
const timeout = ref(3000);
const position = ref('top-right');
const timestamp = ref(0);

export function useToast() {
  const show = (options) => {
    if (typeof options === 'string') {
      message.value = options;
      type.value = 'info';
    } else {
      message.value = options.message || '';
      type.value = options.type || 'info';
      timeout.value = options.timeout || 3000;
      position.value = options.position || 'top-right';
    }
    
    visible.value = true;
    // Cambiar el timestamp para reiniciar el temporizador en caso de múltiples mensajes
    timestamp.value = Date.now();
  };

  const hide = () => {
    visible.value = false;
  };

  const success = (msg, options = {}) => {
    show({
      message: msg,
      type: 'success',
      ...options
    });
  };

  const info = (msg, options = {}) => {
    show({
      message: msg,
      type: 'info',
      ...options
    });
  };

  const warning = (msg, options = {}) => {
    show({
      message: msg,
      type: 'warning',
      ...options
    });
  };

  const error = (msg, options = {}) => {
    show({
      message: msg,
      type: 'error',
      timeout: 5000, // Error messages stay longer by default
      ...options
    });
  };

  // Propiedades reactivas para el componente Toast
  const toastProps = computed(() => ({
    show: visible.value,
    message: message.value,
    type: type.value,
    timeout: timeout.value,
    position: position.value,
    timestamp: timestamp.value
  }));

  return {
    // Propiedades
    visible,
    message,
    type,
    position,
    toastProps,
    
    // Métodos
    show,
    hide,
    success,
    info,
    warning,
    error
  };
}

// Crear una instancia global para uso en toda la aplicación
const toast = useToast();
export default toast; 