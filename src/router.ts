import { createRouter, createWebHistory } from 'vue-router'

import Home from '@/pages/Main.vue'
import AboutMe from '@/pages/AboutMe.vue'
import Skills from '@/pages/Skills.vue'
import TechnicalSkills from '@/pages/TechnicalSkills.vue'
import NonTechnicalSkills from '@/pages/NonTechnicalSkills.vue'
import Experience from '@/pages/Experience.vue'
import Contact from '@/pages/Contact.vue'
import Main from '@/pages/Main.vue'

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
    path: '/skills/technical',
    name: 'TechnicalSkills',
    component: TechnicalSkills,
  },
  {
    path: '/skills/non-technical',
    name: 'NonTechnicalSkills',
    component: NonTechnicalSkills,
  },
  {
    path: '/experience',
    name: 'Experience',
    component: Experience,
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact,
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: Main,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
