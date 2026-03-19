<script setup lang="ts">
const props = defineProps<{
  emoji: string
  title: string
  subtitle: string
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
    { threshold: 0.2 },
  )
  if (cardRef.value) io.observe(cardRef.value)
})
</script>

<template>
  <div
    ref="cardRef"
    class="flex items-center gap-4 bg-white rounded-xl p-4 border border-[#d7d7d7] shadow-sm hover:translate-x-2"
    :class="isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-5'"
    :style="{
      transition: 'opacity 500ms ease-out, transform 500ms ease-out',
      transitionDelay: isVisible ? `${props.delay ?? 0}ms` : '0ms',
    }"
  >
    <div class="text-3xl flex-shrink-0">{{ emoji }}</div>
    <div>
      <div class="font-semibold text-[#1a1a1a]">{{ title }}</div>
      <div class="text-sm text-[#666]">{{ subtitle }}</div>
    </div>
  </div>
</template>
