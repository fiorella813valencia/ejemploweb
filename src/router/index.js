import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/home',
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('../running-artis/home.vue')
    },
    {
      path: '/business/challenges',
      name: 'challenges',
      component: () => import('../running-artis/challenges.vue')
    },
    {
      path: '/admin/artist/new',
      name: 'nuevo',
      component: () => import('../running-artis/Nuevo.vue')
    }

  ]
})

export default router
