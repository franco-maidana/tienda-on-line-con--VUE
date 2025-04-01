import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  { path: '/', redirect: '/inicio' },
  { path: '/inicio', component: () => import('../components/PaginaInicio.vue') },
  { path: '/productos', component: () => import('../components/ItemListConteiner.vue') },
  { path: '/carritoDeCompras', component: () => import('../components/CarritoDeCompras.vue') },
  { path: '/login', component: () => import('../components/InicioDeSession.vue') },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
