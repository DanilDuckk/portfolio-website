<script setup lang="ts">
import SkillCard from '@/components/SkillCard.vue'

import { skills } from '@/data/skills'
</script>

<template>
  <TransitionGroup tag="section" name="fade-slide" class="grid" appear>
    <SkillCard
      v-for="(skill, index) in skills"
      :key="skill.title"
      v-bind="skill"
      :style="{ '--delay': index * 0.1 + 's' }"
    />
  </TransitionGroup>
</template>
