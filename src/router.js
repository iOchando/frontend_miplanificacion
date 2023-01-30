import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: () => import('@/views/dashboard/Index'),
      children: [
        // Dashboard
        {
          name: 'Inicio',
          path: '',
          component: () => import('@/views/dashboard/Dashboard'),
        },
        // Pages
        {
          name: 'Mi Planificación',
          path: 'planificacion',
          component: () => import('@/views/dashboard/pages/Planificacion'),
        },
        {
          name: 'Distribución',
          path: 'distribucion',
          component: () => import('@/views/dashboard/pages/Distribucion'),
        },
        {
          name: 'Reportes',
          path: 'reportes',
          component: () => import('@/views/dashboard/pages/Reportes'),
        },
        {
          name: 'Maestro de Plantas',
          path: 'maestros/plantas',
          component: () => import('@/views/dashboard/maestros/Plantas'),
        },
        {
          name: 'Maestro de Agrupaciones',
          path: 'maestros/agrupaciones',
          component: () => import('@/views/dashboard/maestros/Agrupaciones'),
        },
        {
          name: 'Maestro de Familias',
          path: 'maestros/familias',
          component: () => import('@/views/dashboard/maestros/Familias'),
        },
        {
          name: 'Dashboard',
          path: 'dashboard',
          component: () => import('@/views/dashboard/pages/Dashboard'),
        },
      ],
    },
    {
      name: 'login',
      path: '/login',
      component: () => import('@/views/dashboard/Login'),
    },
  ],
})
