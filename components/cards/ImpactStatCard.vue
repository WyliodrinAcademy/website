<script setup lang="ts">
defineProps<{
  icon: string
  value: string
  label: string
}>()
</script>

<template>
  <div class="inline-flex shrink-0 items-center gap-6 bg-white/10 backdrop-blur-md rounded-2xl px-8 py-6 border border-white/20 min-w-[320px]">
    <div class="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
      <Icon :name="icon" class="w-8 h-8 text-[#66f2e3]" />
    </div>
    <div class="flex flex-col">
      <div class="text-4xl font-bold text-white" style="font-family: 'Space Grotesk', sans-serif">
        {{ value }}
      </div>
      <p class="text-lg font-semibold text-white/90">{{ label }}</p>
    </div>
  </div>
</template>
