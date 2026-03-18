<script setup lang="ts">
withDefaults(
  defineProps<{
    title: string
    subtitle?: string
    align?: 'center' | 'left'
  }>(),
  { align: 'center' },
)
</script>

<template>
  <div :class="['mb-12', align === 'center' && 'text-center']">
    <h2 class="text-4xl font-bold text-[#f92d04] mb-4" style="font-family: 'Space Grotesk', sans-serif">
      {{ title }}
    </h2>
    <p v-if="subtitle" :class="['text-xl text-[#666] max-w-3xl', align === 'center' && 'mx-auto']">
      {{ subtitle }}
    </p>
  </div>
</template>
