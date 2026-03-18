<script setup lang="ts">
const localePath = useLocalePath()
</script>

<template>
  <NuxtLink
    :to="localePath('/')"
    class="flex items-center gap-3 select-none no-underline"
    aria-label="Wyliodrin Academy — home"
  >
    <img
      src="/images/logo.png"
      alt="Wyliodrin Academy logo"
      width="40"
      height="40"
      class="w-10 h-10 transition-transform duration-300 hover:scale-110"
    />
  </NuxtLink>
</template>
