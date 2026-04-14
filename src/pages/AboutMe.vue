<template>
  <TransitionGroup
    tag="section"
    name="fade-slide"
    appear
    class="flex flex-col items-center justify-center min-h-screen gap-5 text-center"
  >
    <h1 :key="1">
      {{ $t('aboutMe.title') }}
    </h1>

    <p
      v-for="(n, index) in 4"
      :key="index + 2"
      v-html="$t(`aboutMe.paragraph_${n}`)"
      class="max-w-[60%]"
      :style="{ '--delay': (index + 1) * 0.2 + 's' }"
    ></p>
  </TransitionGroup>
</template>
