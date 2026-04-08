import type { Experience } from '@/types/experience'
import CybermeisterImg from '@/assets/experiences/cybermeister.png'
import DanaveroImg from '@/assets/experiences/Danavero.png'
import TopicusImg from '@/assets/experiences/Topicus.png'

export const experiences: Experience[] = [
  {
    job: 'Student Intern',
    company: 'Cybermeister',
    year: '2025',
    description: 'Developed while working at Danavero and implementing MVP for a client.',
    stack: ['Angular', 'Vue'],
    img: CybermeisterImg,
    bgColor: 'rgb(87, 41, 148)',
    textColor: 'rgb(255, 255, 255)',
  },
   {
    job: 'Student Intern',
    company: 'Topicus Healthcare',
    year: '2026-present',
    description: 'Developed while working at Danavero and implementing MVP for a client.',
    stack: ['Angular', 'Graphql','Angular','Angular','Angular','Angular'],
    img: TopicusImg,
bgColor: 'rgb(253, 224, 71)',    textColor: 'rgb(0, 0, 0)',
  },
    {
    job: 'Junior Web Developer',
    company: 'Danavero',
    year: '2024-present',
    description: 'Developed while working at Danavero and implementing MVP for a client.',
    stack: ['Angular', 'Vue'],
    img: DanaveroImg,
    bgColor: 'rgb(255, 255, 255)',
    textColor: 'rgb(0, 0, 0)',
  },
]
