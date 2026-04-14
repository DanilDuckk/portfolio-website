<script setup lang="ts">
import { ref } from 'vue'
import type { Skill } from '@/types/skill'

defineProps<Skill & { isActive: boolean }>()
const emit = defineEmits(['toggle'])

const bgColor = ref('rgba(0,0,0,0.1)')
const imgRef = ref<HTMLImageElement | null>(null)

const toggleCard = () => {
  emit('toggle')
}

const extractColor = () => {
  const img = imgRef.value
  if (!img) return

  const canvas = document.createElement('canvas')
  const ctx = canvas.getContext('2d')
  if (!ctx) return

  const size = 50
  canvas.width = size
  canvas.height = size

  ctx.drawImage(img, 0, 0, size, size)

  const imageData = ctx.getImageData(0, 0, size, size).data
  const colorCounts: Record<string, number> = {}

  for (let i = 0; i < imageData.length; i += 4) {
    const r = imageData[i] ?? 0
    const g = imageData[i + 1] ?? 0
    const b = imageData[i + 2] ?? 0
    const a = imageData[i + 3] ?? 0

    if (a > 125 && (r < 240 || g < 240 || b < 240)) {
      const key = `${Math.floor(r / 10) * 10},${Math.floor(g / 10) * 10},${Math.floor(b / 10) * 10}`
      colorCounts[key] = (colorCounts[key] || 0) + 1
    }
  }

  const sortedColors = Object.entries(colorCounts)
    .map(([rgb, count]) => {
      const parts = rgb.split(',').map(Number)
      const r = parts[0] ?? 0
      const g = parts[1] ?? 0
      const b = parts[2] ?? 0

      const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255
      const score = count * (1 - luminance)

      return { rgb, score, luminance }
    })
    .sort((a, b) => b.score - a.score)

  if (sortedColors.length > 0) {
    const topColor = sortedColors[0]!

    const parts = topColor.rgb.split(',').map(Number)
    let r = parts[0] ?? 0
    let g = parts[1] ?? 0
    let b = parts[2] ?? 0

    if (topColor.luminance > 0.6) {
      r = Math.floor(r * 0.7)
      g = Math.floor(g * 0.7)
      b = Math.floor(b * 0.7)
    }

    bgColor.value = `rgb(${r}, ${g}, ${b})`
  }
}
</script>

<template>
  <section
    class="select-none card animated-card"
     :class="{ 'is-active': isActive }"
    :style="{ backgroundColor: bgColor }"
    @pointerdown.stop="toggleCard"
  >
    <img ref="imgRef" :src="img" crossorigin="anonymous" class="card-img" @load="extractColor" />

    <div class="flex flex-row items-center justify-between">
      <h2>{{ $t(title) }}</h2>
      <component :is="icon" class="w-8 h-8 text-white" />
    </div>

    <p class="card-state">{{ $t(description) }}</p>

    <div class="card-state flex flex-row justify-center bg-white rounded-[10px] gap-2.5 p-2.5">
      <p class="text-black!">{{ $t(state) }}</p>
    </div>
  </section>
</template>
