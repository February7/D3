import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/core/Hello/Hello.vue'),
  },
  {
    path: '/No.1',
    component: () => import('@/core/No.1/No.1.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router