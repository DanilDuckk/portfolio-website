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
    meta: { title: 'Danylo Kurbatov' }
  },
  {
    path: '/about-me',
    name: 'AboutMe',
    component: AboutMe,
    meta: { title: 'About me' }
  },
  {
    path: '/skills',
    name: 'Skills',
    component: Skills,
    meta: { title: 'Skills' }
  },
  {
    path: '/skills/technical',
    name: 'TechnicalSkills',
    component: TechnicalSkills,
    meta: { title: 'Technical skills' }
  },
  {
    path: '/skills/non-technical',
    name: 'NonTechnicalSkills',
    component: NonTechnicalSkills,
    meta: { title: 'Non-technical skills' }
  },
  {
    path: '/experience',
    name: 'Experience',
    component: Experience,
    meta: { title: 'Experience' }
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact,
    meta: { title: 'Contact' }

  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: Main,
    meta: { title: 'Danylo Kurbatov' }
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach((to) => {
  document.title = (to.meta.title as string)
})

export default router
