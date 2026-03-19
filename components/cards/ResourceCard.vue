<script setup lang="ts">
const { t } = useI18n()

const props = defineProps<{
  category: string
  title: string
  description: string
  href: string
  delay?: number
}>()

const cardRef = ref<HTMLElement>()
const isVisible = ref(false)

onMounted(() => {
  const io = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        isVisible.value = true
        io.disconnect()
      }
    },
    { threshold: 0.15 },
  )
  if (cardRef.value) io.observe(cardRef.value)
})
</script>

<template>
  <div
    ref="cardRef"
    class="resource-card bg-[#f9f9f6] rounded-xl border border-[#d7d7d7] overflow-hidden
           hover:shadow-lg hover:-translate-y-1.5 group"
    :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'"
    :style="{
      transition: 'opacity 500ms ease-out, transform 500ms ease-out, box-shadow 300ms ease-out',
      transitionDelay: isVisible ? `${props.delay ?? 0}ms` : '0ms',
    }"
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
      <a
        :href="href"
        target="_blank"
        rel="noopener noreferrer"
        class="inline-flex items-center gap-2 font-semibold text-sm text-[#560d08] border border-[#d7d7d7] rounded-lg px-4 py-2 hover:border-[#560d08] transition-all"
      >
        {{ t('resources.visitResource') }}
        <Icon name="lucide:external-link" class="w-4 h-4" />
      </a>
    </div>
  </div>
</template>
