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
  <header class="flex flex-col gap-6 md:flex-row md:justify-between md:items-center p-4">

    <section class="flex flex-col items-center gap-4 md:flex-row md:gap-10 lg:gap-20">
      <router-link to="/" class="text-lg">
        <h1 class="glow-effect whitespace-nowrap">{{ $t('header.name') }}</h1>
      </router-link>

      <nav class="flex flex-wrap justify-center gap-x-6 gap-y-2 items-center md:gap-8">
        <router-link to="/about-me" class="text-base md:text-lg">
          <p class="glow-effect">{{ $t('header.aboutMe') }}</p>
        </router-link>
        <router-link to="/skills" class="text-base md:text-lg">
          <p class="glow-effect">{{ $t('header.skills') }}</p>
        </router-link>
        <router-link to="/experience" class="text-base md:text-lg">
          <p class="glow-effect">{{ $t('header.experience') }}</p>
        </router-link>
        <router-link to="/contact" class="text-base md:text-lg">
          <p class="glow-effect">{{ $t('header.contact') }}</p>
        </router-link>
      </nav>
    </section>

    <section class="flex flex-row justify-center items-center gap-4 md:gap-5">
      <button @click="toggleLanguage" class="glow-effect flex flex-row gap-2 items-center cursor-pointer">
        <Languages class="text-white w-5 h-5 md:w-6 md:h-6" />
        <p class="hidden sm:block text-sm md:text-base">
          {{ locale === 'en' ? 'Українська' : 'English' }}
        </p>
        <p class="sm:hidden text-sm">{{ locale === 'en' ? 'UA' : 'EN' }}</p>
      </button>

      <Minus class="rotate-90 text-white opacity-50" />

      <div class="flex flex-row gap-4 md:gap-5">
        <a
          v-for="social in links"
          :key="social.link"
          :href="social.link"
          target="_blank"
          class="shrink-0"
        >
          <img :src="social.img" class="w-6 h-6 md:w-8 md:h-8 hover-scale" alt="social link" />
        </a>
      </div>
    </section>
  </header>
</template>
