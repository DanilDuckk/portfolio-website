<script setup lang="ts">
import { Box, Languages, Minus } from '@lucide/vue'
</script>

<template>
  <header class="flex flex-row justify-between">
    <section class="flex flex-row gap-20 items-center">
      <router-link to="/" class="text-lg"><h1>Danylo Kurbatov</h1></router-link>
      <nav class="flex flex-row gap-10 items-center">
        <router-link to="/about-me" class="text-lg"><p>About Me</p> </router-link>
        <router-link to="/skills" class="text-lg"><p>Skills</p> </router-link>
        <router-link to="/experience" class="text-lg"><p>Experience</p> </router-link>
        <router-link to="/contact" class="text-lg"><p>Contact</p> </router-link>
      </nav>
    </section>

    <section class="flex flex-row gap-10 items-center">
      <div class="flex flex-row gap-2.5 items-center">
        <Languages class="text-white" />
        <p>English</p>
      </div>
      <Minus class="rotate-90 text-white" />

      <a>
        <Box class="text-white" />
      </a>
      <a>
        <Box class="text-white" />
      </a>
    </section>
  </header>
</template>
