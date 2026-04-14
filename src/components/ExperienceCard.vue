<script setup lang="ts">
import type { Experience } from '@/types/experience';

defineProps<Experience>();
</script>

<template>
  <section class="flex flex-col gap-5 p-5 w-100 rounded-[10px]" :style="{ backgroundColor: bgColor }">
    <div class="p-5">
      <img :src="img" crossorigin="anonymous" />
    </div>
    <h2 :style="{ color: textColor }"> {{ $t(job) }}</h2>
    <div class="flex flex-col">
      <p :style="{ color: textColor }">{{ company }}</p>
      <p :style="{ color: textColor }">{{ year }}</p>
    </div>
    <p :style="{ color: textColor }">{{ $t(description) }}</p>
    <div class="flex flex-wrap gap-2.5">
  <div v-for="s in stack" :key="s" class="flex justify-center px-2.5 py-1.25 bg-black rounded-[10px]">
    <p>{{ s }}</p>
  </div>
</div>
  </section>

</template>
