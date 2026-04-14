<template>
  <TransitionGroup
    tag="section"
    name="fade-slide"
    appear
    class="flex flex-col items-center justify-center min-h-screen gap-6 text-center px-6"
  >
    <h1 :key="1">
      {{ $t('contact.title') }}
    </h1>

    <p
      :key="2"
      class="max-w-full leading-relaxed"
      :style="{ '--delay': '0.2s' }"
      v-html="$t('contact.description')"
    ></p>

    <a
      :key="3"
      href="mailto:danylo.kurbatov@gmail.com"
      class="relative text-white no-underline group mt-2"
      :style="{ '--delay': '0.4s' }"
    >
      <p class="font-bold! glow-effect break-all sm:break-normal">danylo.kurbatov@gmail.com</p>
    </a>
  </TransitionGroup>
</template>
