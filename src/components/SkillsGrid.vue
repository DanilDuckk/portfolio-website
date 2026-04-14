<script setup lang="ts">
import SkillCard from '@/components/SkillCard.vue'
import { ref, onMounted, onUnmounted, computed } from 'vue'
import type { Skill } from '@/types/skill'

const props = defineProps<{
  skills: Skill[]
}>()

const isMobile = ref(false)
const activeIndex = ref<number | null>(null)

const toggle = (i: number) => {
  activeIndex.value = activeIndex.value === i ? null : i
}

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
    props.skills
      .map((skill, i) => ({ skill, i }))
      .filter(({ i }) => i % COLUMN_COUNT.value === colIndex),
  ),
)
</script>

<template>
  <section class="grid">
    <div class="column" v-for="(col, colIndex) in columns" :key="colIndex">
      <Transition v-for="{ skill, i } in col" :key="i" name="fade-slide" appear>
        <SkillCard
          v-bind="skill"
          :is-active="activeIndex === i"
          @toggle="toggle(i)"
          :style="{ '--delay': i * 0.1 + 's' }"
        />
      </Transition>
    </div>
  </section>
</template>
