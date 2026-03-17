<script setup lang="ts">
const localePath = useLocalePath()

// Once you have the logo file, place it at assets/images/logo.svg (or .png)
// and set this to true to switch from the placeholder to the real logo.
const LOGO_READY = false
</script>

<template>
  <NuxtLink
    :to="localePath('/')"
    class="flex items-center gap-3 select-none no-underline"
    aria-label="Wyliodrin Academy — home"
  >
    <!-- ── Real logo (activate when file is ready) ─────────────────── -->
    <NuxtImg
      v-if="LOGO_READY"
      src="/images/logo.svg"
      alt="Wyliodrin Academy logo"
      height="40"
      width="40"
      loading="eager"
    />

    <!-- ── Placeholder SVG (3-circle network topology in coral) ──────
         Replace with the real logo by setting LOGO_READY = true above.
         ─────────────────────────────────────────────────────────────── -->
    <svg
      v-else
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <!-- Hub circle (left) -->
      <circle cx="12" cy="20" r="7" fill="#E05A44" />
      <!-- Satellite top-right -->
      <circle cx="30" cy="10" r="5" fill="#E05A44" />
      <!-- Satellite bottom-right -->
      <circle cx="30" cy="30" r="5" fill="#E05A44" />
      <!-- Connector lines -->
      <line x1="19" y1="17" x2="25" y2="13" stroke="#E05A44" stroke-width="2" stroke-linecap="round" />
      <line x1="19" y1="23" x2="25" y2="27" stroke="#E05A44" stroke-width="2" stroke-linecap="round" />
      <line x1="30" y1="15" x2="30" y2="25" stroke="#E05A44" stroke-width="2" stroke-linecap="round" />
    </svg>

    <!-- ── Wordmark ────────────────────────────────────────────────── -->
    <span
      class="flex flex-col leading-tight font-semibold text-[#1A1A1A]"
      style="font-family: 'Outfit', sans-serif;"
    >
      <span class="text-[15px]">Wyliodrin</span>
      <span class="text-[15px]">Academy</span>
    </span>
  </NuxtLink>
</template>
