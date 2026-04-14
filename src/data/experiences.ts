import type { Experience } from '@/types/experience'
import CybermeisterImg from '@/assets/experiences/cybermeister.png'
import DanaveroImg from '@/assets/experiences/Danavero.png'
import TopicusImg from '@/assets/experiences/Topicus.png'

export const experiences: Experience[] = [
  {
    job: 'experiences.cybermeister.job',
    company: 'Cybermeister',
    year: '2025',
    description: 'experiences.cybermeister.description',
    stack: ['Vue', 'TypeScript', 'Cloudflare', 'Teamwork'],
    img: CybermeisterImg,
    bgColor: 'rgb(87, 41, 148)',
    textColor: 'rgb(255, 255, 255)',
  },
  {
    job: 'experiences.topicus.job',
    company: 'Topicus Healthcare',
    year: '2026 - Now',
    description: 'experiences.topicus.description',
    stack: ['Angular', 'Graphql', 'AWS', 'Adaptability'],
    img: TopicusImg,
    bgColor: 'rgb(253, 224, 71)',
    textColor: 'rgb(0, 0, 0)',
  },
  {
    job: 'experiences.danavero.job',
    company: 'Danavero',
    year: '2024 - Now',
    description: 'experiences.danavero.description',
    stack: ['SQL', 'Angular', 'Communication', 'Business Analysis'],
    img: DanaveroImg,
    bgColor: 'rgb(255, 255, 255)',
    textColor: 'rgb(0, 0, 0)',
  },
]
