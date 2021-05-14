import { createRouter, createWebHistory } from 'vue-router'
import TheLandingPage from '../components/Pages/TheLandingPage.vue';

const routes = [
  {
    path: '/', component: TheLandingPage
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
