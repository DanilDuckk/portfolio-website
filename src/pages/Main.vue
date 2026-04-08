<template>
  <TransitionGroup
    tag="section"
    name="fade-slide"
    appear

    class="flex flex-col lg:flex-row gap-10 lg:gap-20 justify-center items-center min-h-screen p-5"
  >
    <img
      :key="1"
      src="@/assets/Me.png"
      class="rounded-[10px] w-full max-w-75 lg:max-w-md"
      alt="Danylo Kurbatov"
    />

    <section
      class="flex flex-col gap-5 w-full lg:w-125 text-center lg:text-left"
      :key="2"
      :style="{ '--delay': '0.2s' }"
    >
      <h1>{{ $t('main.title') }}</h1>
      <p>
        {{ $t('main.description') }}
      </p>
    </section>
  </TransitionGroup>
</template>
