<template>
  <TransitionGroup
    tag="section"
    name="fade-slide"
    appear
    class="flex flex-col items-center justify-center min-h-screen gap-6 text-center px-6 py-12 md:px-0 md:gap-8"
  >
    <h1 :key="1" class="text-3xl md:text-5xl lg:text-6xl font-bold">
      {{ $t('aboutMe.title') }}
    </h1>

    <p
      v-for="(n, index) in 4"
      :key="index + 2"
      v-html="$t(`aboutMe.paragraph_${n}`)"
      class="w-full max-w-full md:max-w-[80%] lg:max-w-[60%] text-base md:text-lg leading-relaxed"
      :style="{ '--delay': (index + 1) * 0.2 + 's' }"
    ></p>
  </TransitionGroup>
</template>
