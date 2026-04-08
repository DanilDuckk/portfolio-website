import { Code, Braces } from '@lucide/vue'
import type { Skill } from '@/types/skill'
import AngularImg from '@/assets/skills/Angular.png'
import VueImg from '@/assets/skills/Vue.png'
import TypeScriptImg from '@/assets/skills/Typescript.png'
import JavaScriptImg from '@/assets/skills/Javascript.avif'
import SvelteImg from '@/assets/skills/Svelte.png'
import JavaImg from '@/assets/skills/Java.jpg'
import CloudflareImg from '@/assets/skills/Cloudflare.png'
import AwsImg from '@/assets/skills/Aws.png'
import AzureImg from '@/assets/skills/Azure.png'


import FigmaImg from '@/assets/skills/Figma.webp'

export const skills: Skill[] = [
  {
    title: 'skills.technical.angular.title',
    description: 'skills.technical.angular.description',
    state: 'states.intermediate',
    img: AngularImg,
    icon: Code,
  },
  {
    title: 'skills.technical.typescript.title',
    description: 'skills.technical.typescript.description',
    state: 'states.intermediate',
    img: TypeScriptImg,
    icon: Code,
  },
  {
    title: 'skills.technical.vue.title',
    description: 'skills.technical.vue.description',
    state: 'states.expert',
    img: VueImg,
    icon: Code,
  },
  {
    title: 'skills.technical.javascript.title',
    description: 'skills.technical.javascript.description',
    state: 'states.intermediate',
    img: JavaScriptImg,
    icon: Braces,
  },
  {
    title: 'skills.technical.svelte.title',
    description: 'skills.technical.svelte.description',
    state: 'states.intermediate',
    img: SvelteImg,
    icon: Code,
  },
  {
    title: 'skills.technical.java.title',
    description: 'skills.technical.java.description',
    state: 'states.intermediate',
    img: JavaImg,
    icon: Code,
  },
  {
    title: 'skills.technical.cloudflare.title',
    description: 'skills.technical.cloudflare.description',
    state: 'states.intermediate',
    img: CloudflareImg,
    icon: Code,
  },
    {
    title: 'skills.technical.aws.title',
    description: 'skills.technical.aws.description',
    state: 'states.intermediate',
    img: AwsImg,
    icon: Code,
  },
  {
    title: 'skills.technical.azure.title',
    description: 'skills.technical.azure.description',
    state: 'states.intermediate',
    img: AzureImg,
    icon: Code,
  },





  {
    title: 'skills.non_technical.figma.title',
    description: 'skills.non_technical.figma.description',
    state: 'states.intermediate',
    img: FigmaImg,
    icon: Code,
  },

]
