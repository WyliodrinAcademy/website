<script setup lang="ts">
import type { ITrainingType } from '~/types/index'

const props = defineProps<{
  training: ITrainingType
  index?: number
}>()

const { t } = useI18n()

const cardRef = ref<HTMLElement | null>(null)
const isVisible = ref(false)

onMounted(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        isVisible.value = true
        observer.disconnect()
      }
    },
    { threshold: 0.1 },
  )
  if (cardRef.value) observer.observe(cardRef.value)
})
</script>

<template>
  <div
    ref="cardRef"
    class="bg-white rounded-xl border border-[#d7d7d7] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 ease-out h-full flex flex-col"
    :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[19px]'"
    :style="{ transitionDelay: isVisible ? `${(props.index ?? 0) % 3 * 150}ms` : '0ms' }"
  >
    <!-- Card header -->
    <div class="bg-gradient-to-br from-[#f9f9f6] to-white p-6 border-b border-[#d7d7d7]">
      <div class="flex items-start justify-between mb-3">
        <span class="text-4xl">{{ training.emoji }}</span>
        <UiBadge variant="level" :level="training.level" />
      </div>
      <h3 class="text-xl font-bold text-[#1a1a1a] mb-1" style="font-family: 'Space Grotesk', sans-serif">
        {{ training.title }}
      </h3>
      <p v-if="training.subtitle" class="text-sm text-[#999] mb-2">{{ training.subtitle }}</p>
      <div class="flex items-center gap-1 text-sm text-[#666]">
        <Icon name="lucide:clock" class="w-4 h-4" />
        {{ training.duration }}
      </div>
    </div>

    <!-- Card body -->
    <div class="p-6 flex-1 flex flex-col">
      <p class="text-[#666] leading-relaxed mb-4 flex-1">{{ training.description }}</p>
      <div class="flex flex-wrap gap-2 mb-6">
        <UiTagPill v-for="tag in training.tags" :key="tag">{{ tag }}</UiTagPill>
      </div>
      <UiButton variant="dark" class="w-full justify-center">
        <Icon name="lucide:book-open" class="w-4 h-4" />
        {{ t('trainings.viewDetails') }}
        <Icon name="lucide:chevron-right" class="w-4 h-4" />
      </UiButton>
    </div>
  </div>
</template>
