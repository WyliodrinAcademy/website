<script setup lang="ts">
import type { IExpertType } from '~/types/index'

const props = defineProps<{
  expert: IExpertType
  index?: number
}>()

defineEmits<{
  click: []
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
    { threshold: 0.1 },
  )
  if (cardRef.value) io.observe(cardRef.value)
})

const cardDelay = computed(() => (props.index ?? 0) * 150)
const badgeDelay = computed(() => cardDelay.value + 350)
</script>

<template>
  <div
    ref="cardRef"
    class="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl border border-[#d7d7d7] cursor-pointer"
    :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'"
    :style="{
      transition: 'opacity 500ms ease-out, transform 500ms ease-out, box-shadow 300ms ease-out',
      transitionDelay: isVisible ? `${cardDelay}ms` : '0ms',
    }"
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
        class="linkedin-badge absolute top-4 right-4 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg hover:scale-110"
        :class="isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-0'"
        :style="{ transitionDelay: isVisible ? `${badgeDelay}ms` : '0ms' }"
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
.linkedin-badge {
  transition: transform 350ms cubic-bezier(0.34, 1.56, 0.64, 1),
              opacity   200ms ease-out;
}
</style>
