import { createRouter, createWebHistory } from 'vue-router'
import AdminLogin from '../pages/AdminLogin.vue'
import AdminPanel from '../pages/AdminPanel.vue'
import { estaAutenticado, obtenerUsuarioActual } from '../services/authService'

const routes = [
  {
    path: '/',
    redirect: '/admin/login'
  },
  {
    path: '/admin',
    redirect: '/admin/panel'
  },
  {
    path: '/admin/login',
    name: 'AdminLogin',
    component: AdminLogin
  },
  {
    path: '/admin/panel',
    name: 'AdminPanel',
    component: AdminPanel,
    meta: { requiereAutenticacion: true }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

// Guardia de navegación global
router.beforeEach(async (to, from, next) => {
  // Verificar si la ruta requiere autenticación
  if (to.matched.some(record => record.meta.requiereAutenticacion)) {
    try {
      // Verificar autenticación con el servicio
      const usuarioLogueado = await estaAutenticado();
      
      if (usuarioLogueado) {
        // Usuario autenticado con Firebase
        console.log('Usuario autenticado con Firebase');
        next();
      } else {
        // Verificar con localStorage como fallback durante la transición
        console.log('Verificando autenticación con localStorage como fallback');
        const estaAutenticado = localStorage.getItem('adminAutenticado') === 'true';
        
        if (estaAutenticado) {
          console.log('Usuario autenticado con localStorage');
          next();
        } else {
          console.log('Usuario no autenticado, redirigiendo al login');
          next({ name: 'AdminLogin' });
        }
      }
    } catch (error) {
      console.error('Error al verificar autenticación:', error);
      // Si hay un error, usar el método de respaldo
      const estaAutenticadoLocal = localStorage.getItem('adminAutenticado') === 'true';
      if (estaAutenticadoLocal) {
        next();
      } else {
        next({ name: 'AdminLogin' });
      }
    }
  } else {
    // Si la ruta no requiere autenticación, permitir navegación
    next();
  }
});

export default router