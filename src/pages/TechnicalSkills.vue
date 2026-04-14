<script setup lang="ts">
import SkillsGrid from '@/components/SkillsGrid.vue'
import { technical_skills } from '@/data/skills'
</script>

<template>
  <SkillsGrid :skills="technical_skills" />
</template>
