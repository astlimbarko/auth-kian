import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import logger from '../utils/logger';

export const useUiStore = defineStore('ui', () => {
  // Estado
  const isLoading = ref(false);
  const loadingMessage = ref('');
  const toast = ref({
    show: false,
    message: '',
    type: 'info', // info, success, error, warning
    timeout: 3000,
    timestamp: 0
  });
  const confirmDialog = ref({
    show: false,
    title: 'Confirmar acción',
    message: '¿Estás seguro de realizar esta acción?',
    confirmBtnText: 'Aceptar',
    cancelBtnText: 'Cancelar',
    type: 'info',
    callback: null,
    closeOnOverlayClick: true
  });
  const isSidebarOpen = ref(false);
  const errorBoundaryError = ref(null);
  const theme = ref(localStorage.getItem('theme') || 'sistema');

  // Calcular el tema actual basado en preferencias del sistema
  const currentTheme = computed(() => {
    if (theme.value === 'sistema') {
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'oscuro' : 'claro';
    }
    return theme.value;
  });

  // Detectar cambios en el tema del sistema
  function watchSystemTheme() {
    try {
      // Acciones
      const startLoading = (message = '') => {
        loadingMessage.value = message;
        isLoading.value = true;
        logger.debug('Iniciando carga...', { message });
      };

      const stopLoading = () => {
        isLoading.value = false;
        loadingMessage.value = '';
        logger.debug('Carga finalizada');
      };

      const showToast = ({ message, type = 'info', timeout = 3000 }) => {
        toast.value = {
          show: true,
          message,
          type,
          timeout,
          timestamp: Date.now()
        };
      };

      const hideToast = () => {
        toast.value.show = false;
      };

      const showConfirmDialog = ({
        title = 'Confirmar acción',
        message = '¿Estás seguro de realizar esta acción?',
        confirmBtnText = 'Aceptar',
        cancelBtnText = 'Cancelar',
        type = 'info',
        callback = null,
        closeOnOverlayClick = true
      }) => {
        confirmDialog.value = {
          show: true,
          title,
          message,
          confirmBtnText,
          cancelBtnText,
          type,
          callback,
          closeOnOverlayClick
        };
      };

      const hideConfirmDialog = () => {
        confirmDialog.value.show = false;
      };

      const confirmAction = () => {
        if (confirmDialog.value.callback && typeof confirmDialog.value.callback === 'function') {
          confirmDialog.value.callback();
        }
        hideConfirmDialog();
      };

      const toggleSidebar = () => {
        isSidebarOpen.value = !isSidebarOpen.value;
        logger.debug('Sidebar toggled:', isSidebarOpen.value);
      };

      const setErrorBoundary = (error) => {
        errorBoundaryError.value = error;
        if (error) {
          logger.error('Error capturado en boundary:', error);
        } else {
          logger.debug('Error boundary reseteado');
        }
      };

      const toggleTheme = () => {
        theme.value = theme.value === 'light' ? 'dark' : 'light';
        localStorage.setItem('theme', theme.value);
        
        // Aplicar tema al documento
        document.documentElement.setAttribute('data-theme', theme.value);
        
        logger.debug('Tema cambiado a:', theme.value);
      };

      // Getters computados
      const isDarkTheme = computed(() => theme.value === 'dark');

      // Inicializar tema
      const initTheme = () => {
        document.documentElement.setAttribute('data-theme', theme.value);
        logger.debug('Tema inicializado:', theme.value);
      };

      // Llamar a initTheme en la creación del store
      initTheme();

      // Funciones de ayuda para mostrar toasts específicos
      function showSuccessToast(message, timeout = 3000) {
        showToast({ message, type: 'success', timeout });
      }

      function showErrorToast(message, timeout = 4000) {
        showToast({ message, type: 'error', timeout });
      }

      function showWarningToast(message, timeout = 3500) {
        showToast({ message, type: 'warning', timeout });
      }

      function showInfoToast(message, timeout = 3000) {
        showToast({ message, type: 'info', timeout });
      }

      return {
        // Estado
        isLoading,
        loadingMessage,
        toast,
        confirmDialog,
        isSidebarOpen,
        errorBoundaryError,
        theme,
        
        // Getters
        isDarkTheme,
        
        // Acciones
        startLoading,
        stopLoading,
        showToast,
        hideToast,
        showConfirmDialog,
        hideConfirmDialog,
        confirmAction,
        toggleSidebar,
        setErrorBoundary,
        toggleTheme,
        showSuccessToast,
        showErrorToast,
        showWarningToast,
        showInfoToast
      };
    } catch (error) {
      logger.error('Error al inicializar el store:', error);
      return {
        // Estado
        isLoading: ref(false),
        loadingMessage: ref(''),
        toast: ref({
          show: false,
          message: '',
          type: 'info',
          timeout: 3000,
          timestamp: 0
        }),
        confirmDialog: ref({
          show: false,
          title: 'Confirmar acción',
          message: '¿Estás seguro de realizar esta acción?',
          confirmBtnText: 'Aceptar',
          cancelBtnText: 'Cancelar',
          type: 'info',
          callback: null,
          closeOnOverlayClick: true
        }),
        isSidebarOpen: ref(false),
        errorBoundaryError: ref(null),
        theme: ref('sistema'),
        currentTheme: computed(() => 'claro'),
        
        // Getters
        isDarkTheme: computed(() => false),
        
        // Acciones
        startLoading: () => {},
        stopLoading: () => {},
        showToast: () => {},
        hideToast: () => {},
        showConfirmDialog: () => {},
        hideConfirmDialog: () => {},
        confirmAction: () => {},
        toggleSidebar: () => {},
        setErrorBoundary: () => {},
        toggleTheme: () => {},
        showSuccessToast: () => {},
        showErrorToast: () => {},
        showWarningToast: () => {},
        showInfoToast: () => {}
      };
    }
  }

  return {
    // Estado
    isLoading,
    loadingMessage,
    toast,
    confirmDialog,
    isSidebarOpen,
    errorBoundaryError,
    theme,
    currentTheme,
    
    // Getters
    isDarkTheme,
    
    // Acciones
    startLoading,
    stopLoading,
    showToast,
    hideToast,
    showConfirmDialog,
    hideConfirmDialog,
    confirmAction,
    toggleSidebar,
    setErrorBoundary,
    toggleTheme,
    showSuccessToast,
    showErrorToast,
    showWarningToast,
    showInfoToast,

    // Funciones del tema
    setTheme,

    // Funciones del sidebar
    closeSidebar,

    // Funciones del error boundary
    clearErrorBoundaryError
  };
}); 