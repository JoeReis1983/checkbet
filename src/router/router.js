import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
    //   path: '/',
    //   name: 'Home',
    //   component: Home
    },
    {
    //   path: '/about',
    //   name: 'About',
    //   component: About
    }
  ]

// Crie uma instância do Vue Router
const router = createRouter({
    history: createWebHistory(),
    routes
  })
  
  export default router  