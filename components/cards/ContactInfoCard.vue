<script setup lang="ts">
defineProps<{
  emoji: string
  title: string
  subtitle: string
  index?: number
}>()
</script>

<template>
  <div
    class="card-slide-in flex items-center gap-4 bg-white rounded-xl p-4 border border-[#d7d7d7] shadow-sm hover:translate-x-2 transition-transform duration-200"
    :style="{ animationDelay: `${(index ?? 0) * 150}ms` }"
  >
    <div class="text-3xl flex-shrink-0">{{ emoji }}</div>
    <div>
      <div class="font-semibold text-[#1a1a1a]">{{ title }}</div>
      <div class="text-sm text-[#666]">{{ subtitle }}</div>
    </div>
  </div>
</template>

<style scoped>
@keyframes slideInLeft {
  from { opacity: 0; transform: translateX(-40px); }
  to   { opacity: 1; transform: translateX(0); }
}

.card-slide-in {
  animation: slideInLeft 0.5s ease forwards;
  opacity: 0;
}
</style>
