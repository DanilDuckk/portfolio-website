<script setup lang="ts">
import SkillCard from '@/components/SkillCard.vue'
import { non_technical_skills } from '@/data/skills'
import { ref, onMounted, onUnmounted, computed } from 'vue'

const isMobile = ref(false)

const updateSize = () => {
  isMobile.value = window.matchMedia('(max-width: 1024px)').matches
}

onMounted(() => {
  updateSize()
  window.addEventListener('resize', updateSize)
})

onUnmounted(() => {
  window.removeEventListener('resize', updateSize)
})

const COLUMN_COUNT = computed(() => (isMobile.value ? 1 : 3))

const columns = computed(() =>
  Array.from({ length: COLUMN_COUNT.value }, (_, colIndex) =>
    non_technical_skills
      .map((skill, i) => ({ skill, i }))
      .filter(({ i }) => i % COLUMN_COUNT.value === colIndex)
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
