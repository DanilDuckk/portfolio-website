import { createRouter, createWebHistory } from 'vue-router'

import Home from '@/pages/Main.vue'
import AboutMe from '@/pages/AboutMe.vue'
import Skills from '@/pages/Skills.vue'
import Contact from '@/pages/Contact.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about-me',
    name: 'AboutMe',
    component: AboutMe,
  },
  {
    path: '/skills',
    name: 'Skills',
    component: Skills,
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
