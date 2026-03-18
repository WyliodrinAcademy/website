<script setup lang="ts">
const localePath = useLocalePath()
</script>

<template>
  <NuxtLink
    :to="localePath('/')"
    class="flex items-center gap-3 select-none no-underline"
    aria-label="Wyliodrin Academy — home"
  >
    <NuxtImg
      src="/images/logo.png"
      alt="Wyliodrin Academy logo"
      height="40"
      width="40"
      loading="eager"
    />
  </NuxtLink>
</template>
