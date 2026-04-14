<script setup lang="ts">
import SkillsGrid from '@/components/SkillsGrid.vue'
import { non_technical_skills } from '@/data/skills'
</script>

<template>
  <SkillsGrid :skills="non_technical_skills" />
</template>
