<script setup lang="ts">
import type { IExpertType } from '~/types/index'

defineProps<{
  expert: IExpertType
  index?: number
}>()

defineEmits<{
  click: []
}>()
</script>

<template>
  <div
    class="card-fade-up group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-[#d7d7d7] cursor-pointer"
    :style="{ '--delay': (index ?? 0) * 150 }"
    @click="$emit('click')"
  >
    <!-- Photo area -->
    <div class="relative h-80 overflow-hidden bg-[#e8e4dd]">
      <img
        v-if="expert.photoUrl"
        :src="expert.photoUrl"
        :alt="expert.name"
        class="w-full h-full object-cover object-top group-hover:scale-105 transition-all duration-500"
      />
      <div v-else class="w-full h-full flex items-center justify-center">
        <Icon name="lucide:user" class="w-24 h-24 text-[#c4bdb5]" />
      </div>

      <!-- LinkedIn badge -->
      <a
        :href="expert.linkedinUrl"
        target="_blank"
        rel="noopener noreferrer"
        class="absolute top-4 right-4 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-200"
        @click.stop
      >
        <Icon name="lucide:linkedin" class="w-6 h-6 text-[#0077b5]" />
      </a>
    </div>

    <!-- Info -->
    <div class="p-6">
      <h3
        class="text-2xl font-bold text-[#1a1a1a] mb-2"
        style="font-family: 'Space Grotesk', sans-serif"
      >
        {{ expert.name }}
      </h3>
      <p class="text-[#f0441a] font-medium mb-3">{{ expert.role }}</p>
      <p class="text-[#666] leading-relaxed line-clamp-3">{{ expert.aboutMe }}</p>
    </div>
  </div>
</template>

<style scoped>
@keyframes fadeUp {
  from { opacity: 0; transform: translateY(30px); }
  to   { opacity: 1; transform: translateY(0); }
}

.card-fade-up {
  animation: fadeUp 0.5s ease forwards;
  opacity: 0;
  animation-delay: calc(var(--delay) * 1ms);
}
</style>
