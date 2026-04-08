<script setup lang="ts">
import ExperienceCard from '@/components/ExperienceCard.vue'

import { experiences } from '@/data/experiences'
</script>

<template>
  <TransitionGroup
    tag="section"
    name="fade-slide"
    class="grid gap-6"
    appear
  >
    <wrapper
      v-for="(experience, index) in experiences"
      :key="experience.job"
      :style="{ '--delay': index * 0.3 + 's' }"
    >
      <ExperienceCard
        v-bind="experience"
        class="hover-scale cursor-pointer"
      />
    </wrapper>
  </TransitionGroup>
</template>
