<script setup lang="ts">
import { Languages, Minus } from '@lucide/vue'
import { useI18n } from 'vue-i18n'
import { links } from '@/data/links'
const { locale } = useI18n()

const toggleLanguage = () => {
  locale.value = locale.value === 'en' ? 'uk' : 'en'
}
</script>

<template>
  <header class="flex flex-row justify-between">
    <section class="flex flex-row gap-20 items-center">
      <router-link to="/" class="text-lg"><h1 class="glow-effect">{{ $t('header.name') }}</h1></router-link>
      <nav class="flex flex-row gap-10 items-center pt-1">
        <router-link to="/about-me" class="text-lg"><p class="glow-effect">{{ $t('header.aboutMe') }}</p> </router-link>
        <router-link to="/skills" class="text-lg"><p class="glow-effect">{{ $t('header.skills') }}</p> </router-link>
        <router-link to="/experience" class="text-lg"><p class="glow-effect">{{ $t('header.experience') }}</p> </router-link>
        <router-link to="/contact" class="text-lg"><p class="glow-effect">{{ $t('header.contact') }}</p> </router-link>
      </nav>
    </section>

    <section class="flex flex-row gap-5 items-center">
      <button @click="toggleLanguage" class="glow-effect flex flex-row gap-2.5 items-center cursor-pointer">
        <Languages class="text-white" />

        <p>{{ locale === 'en' ? 'Українська' : 'English' }}</p>
      </button>
      <Minus class="rotate-90 text-white" />

      <div class="flex flex-row gap-5">
      <a
        v-for="social in links"
        :key="social.link"
        :href="social.link"
        target="_blank"
      >
        <img :src="social.img" class="w-8 h-8 hover-scale" alt="social link" />
      </a>
    </div>
    </section>
  </header>
</template>
