<script setup lang="ts">
const localePath = useLocalePath()
</script>

<template>
  <NuxtLink
    :to="localePath('/')"
    class="flex items-center gap-3 select-none no-underline"
    aria-label="Wyliodrin Academy — home"
  >
    <!-- ── Real logo (activate when file is ready) ─────────────────── -->
    <NuxtImg
      src="/images/logo.png"
      alt="Wyliodrin Academy logo"
      height="40"
      width="40"
      loading="eager"
    />

    <!-- ── Wordmark ────────────────────────────────────────────────── -->
    <span
      class="flex flex-col leading-tight font-semibold text-ink"
      style="font-family: 'Outfit', sans-serif"
    >
      <span class="text-[15px]">Wyliodrin</span>
      <span class="text-[15px]">Academy</span>
    </span>
  </NuxtLink>
</template>
