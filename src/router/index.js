import Vue from 'vue'
import VueRouter from 'vue-router'
import Landing from '../views/Landing.vue'
import About from '../components/About.vue'
import Pricing from '../components/Pricing.vue'
import Contact from '../components/Contact.vue'
import Home from '../views/Home.vue'
import LoginForm from '../components/LoginForm.vue'
// import { hasOwnMetadata } from 'core-js/fn/reflect'
Vue.use(VueRouter)

const routes = [
  {
    path: '/landing',
    name: 'Landing',
    component: Landing,
    alias: '/',
    children: [
      {
        path: '/landing/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
        component: About
      },
      {
        path: '/landing/pricing',
        name: 'Pricing',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
        component: Pricing
      },
      {
        path: '/landing/contact',
        name: 'Contact',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
        component: Contact
      },
      {
        path: '/landing/loginForm',
        name: 'LoginForm',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
        component: LoginForm
      }
    ]
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    meta: { requiresAuth: true }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    const token = localStorage.getItem('access_token')
    if (token) {
      next()
    } else {
      next({
        path: '/'
      })
    }
  } else {
    next()
  }
})

export default router
