import { Code, Braces } from '@lucide/vue'
import type { Card } from '../types/card'
import AngularImg from '@/assets/Angular.png'
import VueImg from '@/assets/Vue.png'

export const cards: Card[] = [
  {
    title: 'Angular',
    description: 'Developped while working at Danavero and implementiong MVP for a client.',
    state: 'Intermediate',
    img: AngularImg,
    icon: Code,
  },
  {
    title: 'Vue',
    description: 'Main frontend framework for the dashboard project in Cybermeister.',
    state: 'Completed',
    img: VueImg,
    icon: Code,
  },
  {
    title: 'JavaScript',
    description: 'JavaScript adds interactivity to web pages.',
    state: 'Completed',
    img: 'https://www.w3schools.com/js/img_js.gif',
    icon: Braces,
  },
]
