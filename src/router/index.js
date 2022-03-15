import Vue from 'vue'
import VueRouter from 'vue-router'
import AboutView from '../views/AboutView.vue'
import Home from '../views/Home.vue'
import Contact from '../views/Contact.vue'
import Operations from '../views/Operations.vue'

Vue.use(VueRouter)

const routes = [
 
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/contact',
    name: 'contact',
    component: Contact,
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView,
  },
  {
    path: '/operations',
    name: 'operations',
    component: Operations,
  },
  
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
