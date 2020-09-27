import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Products from '../views/Products.vue'
import Shopping from '../views/Shopping.vue'
import Sukses from '../views/Sukses.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/About.vue')
    },
    {
        path: '/Products',
        name: '/Products',
        component: Products

    },
    {
        path: '/Shopping',
        name: '/Shopping',
        component: Shopping
    },
    {
        path: '/Sukses',
        name: '/Sukses',
        component: Sukses
    },
]

const router = new VueRouter({
    routes
})

export default router