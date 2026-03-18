<script setup lang="ts">
withDefaults(
  defineProps<{
    active?: boolean
    activeColor?: 'red' | 'orange'
  }>(),
  { active: false, activeColor: 'red' },
)
</script>

<template>
  <button
    :class="[
      'px-5 py-2.5 rounded-full font-medium transition-all flex items-center gap-2',
      active && activeColor === 'red' && 'bg-[#f92d04] text-white shadow-lg',
      active && activeColor === 'orange' && 'bg-[#f0441a] text-white shadow-lg',
      !active && 'bg-white border border-[#d7d7d7] text-[#666] hover:border-[#f92d04]',
    ]"
  >
    <slot />
  </button>
</template>
