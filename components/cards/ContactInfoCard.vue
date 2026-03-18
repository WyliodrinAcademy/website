<script setup lang="ts">
defineProps<{
  emoji: string
  title: string
  subtitle: string
}>()
</script>

<template>
  <div class="flex items-center gap-4 bg-white rounded-xl p-4 border border-[#d7d7d7] shadow-sm">
    <div class="text-3xl flex-shrink-0">{{ emoji }}</div>
    <div>
      <div class="font-semibold text-[#1a1a1a]">{{ title }}</div>
      <div class="text-sm text-[#666]">{{ subtitle }}</div>
    </div>
  </div>
</template>
