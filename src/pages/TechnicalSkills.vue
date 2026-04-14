<script setup lang="ts">
import SkillCard from '@/components/SkillCard.vue'
import { technical_skills } from '@/data/skills'
import { computed } from 'vue'

const COLUMN_COUNT = 3

const columns = computed(() =>
  Array.from({ length: COLUMN_COUNT }, (_, colIndex) =>
    technical_skills
      .map((skill, i) => ({ skill, i }))
      .filter(({ i }) => i % COLUMN_COUNT === colIndex)
  )
)
</script>

<template>
  <section class="grid">
    <div class="column" v-for="(col, colIndex) in columns" :key="colIndex">
      <Transition
        v-for="{ skill, i } in col"
        :key="skill.title"
        name="fade-slide"
        appear
      >
        <SkillCard
          v-bind="skill"
          :style="{ '--delay': i * 0.1 + 's' }"
        />
      </Transition>
    </div>
  </section>
</template>
