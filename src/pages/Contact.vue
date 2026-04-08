<template>
  <TransitionGroup
    tag="section"
    name="fade-slide"
    appear
    class="flex flex-col items-center justify-center min-h-screen gap-5 text-center"
  >
    <h1 :key="1">
      {{ $t('header.title') }}
    </h1>

    <p :key="2" v-html="$t('header.description')" :style="{ '--delay': '0.2s' }"></p>

    <a :key="3" href="mailto:danylo.kurbatov@gmail.com"
       class="relative text-white no-underline group"
       :style="{ '--delay': '0.4s' }">
      <p class="font-bold! glow-effect">danylo.kurbatov@gmail.com</p>
    </a>
  </TransitionGroup>
</template>
