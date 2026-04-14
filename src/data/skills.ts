import {
  CodeXml,
  Wallpaper,
  Database,
  Cloud,
  FileCode,
  ChartArea,
  Users,
  Speech,
  BriefcaseBusiness,
  Star,
} from '@lucide/vue'
import type { Skill } from '@/types/skill'
import AngularImg from '@/assets/skills/Angular.png'
import VueImg from '@/assets/skills/Vue.png'
import TypeScriptImg from '@/assets/skills/Typescript.png'
import GraphQLImg from '@/assets/skills/GraphQL.webp'
import JavaImg from '@/assets/skills/Java.jpg'
import CloudflareImg from '@/assets/skills/Cloudflare.png'
import AwsImg from '@/assets/skills/Aws.png'
import AzureImg from '@/assets/skills/Azure.png'
import RustImg from '@/assets/skills/Rust.png'
import C_SharpImg from '@/assets/skills/C_Sharp.png'
import C from '@/assets/skills/C.webp'
import SqlImg from '@/assets/skills/SQL.png'

import FigmaImg from '@/assets/skills/Figma.webp'
import MetabaseImg from '@/assets/skills/Metabase.png'
import TeamworkImg from '@/assets/skills/Teamwork.webp'
import AdaptabilityImg from '@/assets/skills/Adaptability.png'
import CommunicationImg from '@/assets/skills/Communication.jpg'
import BusinessAnalysisImg from '@/assets/skills/BusinessAnalysis.webp'

export const technical_skills: Skill[] = [
  {
    title: 'skills.technical.angular.title',
    description: 'skills.technical.angular.description',
    state: 'states.intermediate',
    img: AngularImg,
    icon: FileCode,
  },
  {
    title: 'skills.technical.typescript.title',
    description: 'skills.technical.typescript.description',
    state: 'states.intermediate',
    img: TypeScriptImg,
    icon: CodeXml,
  },
  {
    title: 'skills.technical.vue.title',
    description: 'skills.technical.vue.description',
    state: 'states.expert',
    img: VueImg,
    icon: FileCode,
  },
  {
    title: 'skills.technical.graphql.title',
    description: 'skills.technical.graphql.description',
    state: 'states.intermediate',
    img: GraphQLImg,
    icon: CodeXml,
  },
  {
    title: 'skills.technical.java.title',
    description: 'skills.technical.java.description',
    state: 'states.intermediate',
    img: JavaImg,
    icon: CodeXml,
  },
  {
    title: 'skills.technical.cloudflare.title',
    description: 'skills.technical.cloudflare.description',
    state: 'states.intermediate',
    img: CloudflareImg,
    icon: Cloud,
  },
  {
    title: 'skills.technical.aws.title',
    description: 'skills.technical.aws.description',
    state: 'states.intermediate',
    img: AwsImg,
    icon: Cloud,
  },
  {
    title: 'skills.technical.azure.title',
    description: 'skills.technical.azure.description',
    state: 'states.intermediate',
    img: AzureImg,
    icon: Cloud,
  },
  {
    title: 'skills.technical.rust.title',
    description: 'skills.technical.rust.description',
    state: 'states.beginner',
    img: RustImg,
    icon: CodeXml,
  },
  {
    title: 'skills.technical.c_sharp.title',
    description: 'skills.technical.c_sharp.description',
    state: 'states.intermediate',
    img: C_SharpImg,
    icon: CodeXml,
  },
  {
    title: 'skills.technical.c.title',
    description: 'skills.technical.c.description',
    state: 'states.intermediate',
    img: C,
    icon: CodeXml,
  },
  {
    title: 'skills.technical.sql.title',
    description: 'skills.technical.sql.description',
    state: 'states.expert',
    img: SqlImg,
    icon: Database,
  },
]

export const non_technical_skills: Skill[] = [
  {
    title: 'skills.non_technical.figma.title',
    description: 'skills.non_technical.figma.description',
    state: 'states.expert',
    img: FigmaImg,
    icon: Wallpaper,
  },
  {
    title: 'skills.non_technical.metabase.title',
    description: 'skills.non_technical.metabase.description',
    state: 'states.intermediate',
    img: MetabaseImg,
    icon: ChartArea,
  },
  {
    title: 'skills.non_technical.teamwork.title',
    description: 'skills.non_technical.teamwork.description',
    state: 'states.intermediate',
    img: TeamworkImg,
    icon: Users,
  },
  {
    title: 'skills.non_technical.adaptability.title',
    description: 'skills.non_technical.adaptability.description',
    state: 'states.expert',
    img: AdaptabilityImg,
    icon: Star,
  },
  {
    title: 'skills.non_technical.communication.title',
    description: 'skills.non_technical.communication.description',
    state: 'states.expert',
    img: CommunicationImg,
    icon: Speech,
  },
  {
    title: 'skills.non_technical.business_analysis.title',
    description: 'skills.non_technical.business_analysis.description',
    state: 'states.intermediate',
    img: BusinessAnalysisImg,
    icon: BriefcaseBusiness,
  },
]
