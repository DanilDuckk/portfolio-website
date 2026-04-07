<script setup lang="ts">
import { ref } from 'vue'
import type { Card } from '@/types/card'

defineProps<Card>()
const bgColor = ref('rgba(0,0,0,0.1)') // Колір за замовчуванням
const imgRef = ref<HTMLImageElement | null>(null)

const extractColor = () => {
  const img = imgRef.value
  if (!img) return

  // Створюємо канвас в пам'яті
  const canvas = document.createElement('canvas')
  const ctx = canvas.getContext('2d')
  if (!ctx) return

  // Робимо канвас маленьким (1x1 піксель), щоб браузер автоматично усереднив кольори
  canvas.width = 1
  canvas.height = 1

  // Малюємо картинку, стиснуту до 1 пікселя
  ctx.drawImage(img, 0, 0, 1, 1)

  // Отримуємо дані цього пікселя
  const [r, g, b] = ctx.getImageData(0, 0, 1, 1).data
  bgColor.value = `rgb(${r}, ${g}, ${b})`
}
</script>

<template>
  <section
    class="select-none card animated-card p-5 rounded-2xl"
    :style="{ backgroundColor: bgColor }"
  >
    <img ref="imgRef" :src="img" crossorigin="anonymous" class="card-img" @load="extractColor" />

    <div class="flex flex-row items-center justify-between mb-2">
      <h2>{{ title }}</h2>
      <component :is="icon" class="w-8 h-8 text-white" />
    </div>

    <p class="card-state">{{ description }}</p>

    <div class="card-state flex flex-row justify-center bg-white rounded-[10px] gap-2.5 p-2.5">
      <p class="text-black!">{{ state }}</p>
    </div>
  </section>
</template>
