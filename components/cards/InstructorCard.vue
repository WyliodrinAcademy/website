<script setup lang="ts">
defineProps<{
  name: string
  role: string
  bio: string
  photo?: string
}>()
</script>

<template>
  <div class="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-[#d7d7d7] cursor-pointer">
    <!-- Photo area -->
    <div class="relative h-80 overflow-hidden bg-[#e8e4dd]">
      <img
        v-if="photo"
        :src="photo"
        :alt="name"
        class="w-full h-full object-cover object-top group-hover:scale-105 transition-all duration-500"
      />
      <div v-else class="w-full h-full flex items-center justify-center">
        <Icon name="lucide:user" class="w-24 h-24 text-[#c4bdb5]" />
      </div>
      <!-- LinkedIn badge -->
      <div class="absolute top-4 right-4 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg">
        <Icon name="lucide:linkedin" class="w-6 h-6 text-[#0077b5]" />
      </div>
    </div>

    <!-- Info -->
    <div class="p-6">
      <h3 class="text-2xl font-bold text-[#1a1a1a] mb-2" style="font-family: 'Space Grotesk', sans-serif">
        {{ name }}
      </h3>
      <p class="text-[#f0441a] font-medium mb-3">{{ role }}</p>
      <p class="text-[#666] leading-relaxed line-clamp-3">{{ bio }}</p>
    </div>
  </div>
</template>
