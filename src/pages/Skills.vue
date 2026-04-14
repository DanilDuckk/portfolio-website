<template>
  <TransitionGroup
    tag="section"
    name="fade-slide"
    appear
    class="flex flex-col md:flex-row items-center justify-center min-h-screen gap-12 md:gap-20 text-center px-4"
  >
    <router-link
      to="/skills/technical"
      :key="1"
      class="cursor-pointer group"
    >
      <h1 class=" glow-effect whitespace-nowrap">
        {{ $t('skills.technical.title') }}
      </h1>
    </router-link>

    <router-link
      to="/skills/non-technical"
      :key="2"
      :style="{ '--delay': '0.2s' }"
      class="cursor-pointer group"
    >
      <h1 class=" glow-effect whitespace-nowrap">
        {{ $t('skills.non_technical.title') }}
      </h1>
    </router-link>
  </TransitionGroup>
</template>
