import {createRouter, createWebHistory} from 'vue-router'
import {routes} from 'vue-router/auto-routes'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    linkExactActiveClass: 'dark:text-black dark:bg-custom-primary-yellow',
    routes,
})

export default router
