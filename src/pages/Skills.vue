<script setup lang="ts">
import SkillCard from '@/components/SkillCard.vue'

import { cards } from '@/data/cards'
</script>

<template>
  <section class="flex justify-center pt-26">
    <h1>Skills</h1>
  </section>
  <section class="flex flex-row gap-20 justify-center items-center cards-grid">
    <SkillCard v-for="card in cards" :key="card.title" v-bind="card" />
  </section>
</template>
