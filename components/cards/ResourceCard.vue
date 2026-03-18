<script setup lang="ts">
const { t } = useI18n()

defineProps<{
  category: string
  title: string
  description: string
  href: string
  delay?: number
}>()
</script>

<template>
  <div
    class="resource-card bg-[#f9f9f6] rounded-xl border border-[#d7d7d7] overflow-hidden
           hover:shadow-lg hover:-translate-y-1.5 transition-all duration-300 group"
    :style="{ animationDelay: `${delay ?? 0}ms` }"
  >
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
        {{ t('resources.visitResource') }}
        <Icon name="lucide:external-link" class="w-4 h-4" />
      </UiButton>
    </div>
  </div>
</template>

<style scoped>
@keyframes fadeUp {
  from { opacity: 0; transform: translateY(20px); }
  to   { opacity: 1; transform: translateY(0); }
}
.resource-card {
  animation: fadeUp 0.5s cubic-bezier(0.4, 0, 0.2, 1) both;
}
</style>
