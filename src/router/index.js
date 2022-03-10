import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [{
  path: '/',
  component: () => import('@/core/home/Home.vue')
}]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router