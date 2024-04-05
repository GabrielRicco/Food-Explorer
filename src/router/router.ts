import { createRouter, createWebHistory } from 'vue-router'

import Home from '../components/Home.vue';
import Signin from '../components/Signin.vue';
import Signup from '../components/Signup.vue';

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/',
    name: 'Signin',
    component: Signin
  },
  {
    path: '/login',
    name: 'Signup',
    component: Signup
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router