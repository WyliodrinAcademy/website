<script setup lang="ts">
defineProps<{
  category: string
  title: string
  description: string
  href: string
}>()
</script>

<template>
  <div class="bg-[#f9f9f6] rounded-xl border border-[#d7d7d7] overflow-hidden hover:shadow-lg transition-all duration-300 group">
    <div class="p-6">
      <UiBadge variant="category" :label="category" class="mb-3" />
      <h3
        class="text-xl font-bold text-[#1a1a1a] mb-2 group-hover:text-[#f0441a] transition-colors"
        style="font-family: 'Space Grotesk', sans-serif"
      >
        {{ title }}
      </h3>
      <p class="text-[#666] leading-relaxed mb-4">{{ description }}</p>
      <UiButton variant="outline" as="a" :href="href" target="_blank">
        Visit Resource
        <Icon name="lucide:external-link" class="w-4 h-4" />
      </UiButton>
    </div>
  </div>
</template>
