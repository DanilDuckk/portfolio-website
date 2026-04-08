<template>
  <TransitionGroup
    tag="section"
    name="fade-slide"
    appear
    class="flex flex-row items-center justify-center min-h-screen gap-20 text-center"
  >
    <router-link
      to="/skills/technical"
      :key="1"
      class="cursor-pointer"
    >
      <h1 class="glow-effect">{{ $t('skills.technical.title') }}</h1>
    </router-link>

    <router-link
      to="/skills/non-technical"
      :key="2"
      :style="{ '--delay': '0.2s' }"
      class="cursor-pointer"
    >
      <h1 class="glow-effect">{{ $t('skills.non_technical.title') }}</h1>
    </router-link>
  </TransitionGroup>
</template>
