<script setup lang="ts">
import ExperienceCard from '@/components/ExperienceCard.vue'

import { experiences } from '@/data/experiences'
</script>

<template>
  <TransitionGroup
    tag="section"
    name="fade-slide"
    class="flex flex-col lg:flex-row items-center lg:items-stretch justify-center min-h-screen gap-6 p-6 md:p-10 w-full"
    appear
  >
    <section
      v-for="(experience, index) in experiences"
      :key="experience.job"
      :style="{ '--delay': index * 0.3 + 's' }"
      class="w-full max-w-112.5 lg:max-w-none lg:flex-1"
    >
      <ExperienceCard v-bind="experience" class="hover-scale cursor-pointer" />
    </section>
  </TransitionGroup>
</template>
