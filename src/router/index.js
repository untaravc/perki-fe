import { createRouter, createWebHistory } from 'vue-router'
import PublicLayout from '../views/PublicLayout.vue'
import HomeView from '../views/home/Index.vue'
import Register from '../views/register/Index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'layout',
      component: PublicLayout,
      children: [
        {
          path: '/',
          name: 'home',
          component: HomeView,
        },
        {
          path: '/register',
          name: 'register',
          component: Register,
        },
      ]
    },
  ]
})

export default router
