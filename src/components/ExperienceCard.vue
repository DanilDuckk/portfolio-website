<script setup lang="ts">
import type { Experience } from '@/types/experience';

defineProps<Experience>();
</script>

<template>
  <section
    class="flex flex-col gap-5 p-6 md:p-8 rounded-[10px] transition-all"
    :style="{ backgroundColor: bgColor }"
  >
    <div class="flex justify-center items-center p-4 rounded-lg">
      <img
        :src="img"
        crossorigin="anonymous"
        alt="company logo"
      />
    </div>

    <h2 :style="{ color: textColor }">
      {{ $t(job) }}
    </h2>

    <div class="flex flex-col">
      <p :style="{ color: textColor }" class="font-semibold">{{ company }}</p>
      <p :style="{ color: textColor }">{{ year }}</p>
    </div>

    <p class="leading-relaxed grow" :style="{ color: textColor }">
      {{ $t(description) }}
    </p>

    <div class="flex flex-wrap gap-2 mt-auto pt-4">
      <div
        v-for="s in stack"
        :key="s"
        class="flex justify-center px-3 py-1 bg-black rounded-lg"
      >
        <p>{{ s }}</p>
      </div>
    </div>
  </section>
</template>
