import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/planet/:id',
      name: 'Planet',
      component: () => import('../views/PlanetView.vue')
    },
    {
      path: '/solar-system',
      name: 'Solar System',
      component: () => import('../views/SolarSystemView.vue')
    }
  ]
})

export default router