import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Cart from '../views/Cart.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.name === 'Home' && !localStorage.access_token) {
    next({ name: 'Login' })
  } else if (to.name === 'Cart' && !localStorage.access_token) {
    next({ name: 'Login' })
  } else if ((to.name === 'Login' || to.name === 'Register') && localStorage.access_token) {
    next({ name: 'Home' })
  } else {
    next()
  }
})
export default router
