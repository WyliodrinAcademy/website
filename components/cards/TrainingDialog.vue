<script setup lang="ts">
import type { ITrainingType } from '~/types/index'

defineProps<{
  training: ITrainingType | null
  open: boolean
}>()

const emit = defineEmits<{
  close: []
}>()

const { t } = useI18n()

function handleLetsTalk() {
  emit('close')
  nextTick(() => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  })
}
</script>

<template>
  <Teleport to="body">
    <!-- Backdrop -->
    <Transition name="dialog-backdrop">
      <div
        v-if="open && training"
        class="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
        @click="$emit('close')"
      />
    </Transition>

    <!-- Modal -->
    <Transition name="dialog-modal">
      <div
        v-if="open && training"
        class="fixed inset-0 z-50 flex items-center justify-center p-4"
        @click.self="$emit('close')"
      >
        <div class="w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
          <!-- Header -->
          <div class="bg-gradient-to-r from-[#560d08] to-[#ba321f] p-6 flex-shrink-0">
            <div class="flex items-start justify-between gap-4">
              <div class="flex-1">
                <h2
                  class="text-2xl font-bold text-white mb-3"
                  style="font-family: 'Space Grotesk', sans-serif"
                >
                  {{ training.emoji }} {{ training.title }}
                  <span v-if="training.subtitle" class="text-lg font-normal opacity-80"> {{ training.subtitle }}</span>
                </h2>
                <div class="flex flex-wrap items-center gap-3">
                  <span class="px-3 py-1 bg-white/20 text-white text-sm font-medium rounded-full">
                    {{ training.level }}
                  </span>
                  <div class="flex items-center gap-1.5 text-white/80 text-sm">
                    <Icon name="lucide:clock" class="w-4 h-4" />
                    {{ training.duration }}
                  </div>
                </div>
              </div>
              <button
                class="p-2 hover:bg-white/10 rounded-full transition-colors flex-shrink-0 w-8 h-8 flex items-center justify-center"
                @click="$emit('close')"
              >
                <Icon name="lucide:x" class="w-5 h-5 text-white" />
              </button>
            </div>
          </div>

          <!-- Body -->
          <div class="p-6 space-y-6 overflow-y-auto flex-1 max-h-[60vh]">
            <!-- Overview -->
            <div>
              <div class="flex items-center gap-2 mb-3">
                <Icon name="lucide:target" class="w-5 h-5 text-[#f0441a]" />
                <h3 class="text-lg font-semibold text-[#1a1a1a]" style="font-family: 'Space Grotesk', sans-serif">
                  {{ t('trainings.overview') }}
                </h3>
              </div>
              <p class="text-[#666] leading-relaxed">{{ training.description }}</p>
            </div>

            <!-- Topics Covered -->
            <div>
              <div class="flex items-center gap-2 mb-3">
                <Icon name="lucide:book-open" class="w-5 h-5 text-[#f0441a]" />
                <h3 class="text-lg font-semibold text-[#1a1a1a]" style="font-family: 'Space Grotesk', sans-serif">
                  {{ t('trainings.topicsCovered') }}
                </h3>
              </div>
              <div class="flex flex-wrap gap-2">
                <span
                  v-for="tag in training.tags"
                  :key="tag"
                  class="px-3 py-1.5 bg-[#f5f5f5] rounded-lg text-sm font-mono text-[#666]"
                >
                  {{ tag }}
                </span>
              </div>
            </div>

            <!-- Training Details -->
            <div class="bg-[#f9f9f6] rounded-xl p-5">
              <h3
                class="font-semibold text-[#1a1a1a] mb-3"
                style="font-family: 'Space Grotesk', sans-serif"
              >
                {{ t('trainings.trainingDetails') }}
              </h3>
              <ul class="space-y-2">
                <li
                  v-for="detail in training.details"
                  :key="detail"
                  class="flex items-start gap-2 text-[#555]"
                >
                  <span class="w-2 h-2 rounded-full bg-[#f0441a] mt-1.5 flex-shrink-0"></span>
                  <span>{{ detail }}</span>
                </li>
              </ul>
            </div>
          </div>

          <!-- Footer -->
          <div class="sticky bottom-0 bg-white border-t border-[#d7d7d7] p-6 flex-shrink-0">
            <div class="flex flex-col gap-3">
              <a
                :href="training.programPdfLink"
                download
                class="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-[#f0441a] text-white font-medium rounded-lg hover:bg-[#d63a16] transition-colors"
              >
                <Icon name="lucide:download" class="w-4 h-4" />
                {{ t('trainings.downloadProgram') }}
              </a>
              <button
                class="flex-1 flex items-center justify-center gap-2 px-6 py-3 border-2 border-[#560d08] text-[#560d08] font-medium rounded-lg hover:bg-[#560d08] hover:text-white transition-colors"
                @click="handleLetsTalk"
              >
                <Icon name="lucide:message-circle" class="w-4 h-4" />
                {{ t('trainings.letsTalk') }}
              </button>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
.dialog-backdrop-enter-active,
.dialog-backdrop-leave-active {
  transition: opacity 0.25s ease;
}
.dialog-backdrop-enter-from,
.dialog-backdrop-leave-to {
  opacity: 0;
}

.dialog-modal-enter-active,
.dialog-modal-leave-active {
  transition: opacity 0.25s ease, transform 0.25s ease;
}
.dialog-modal-enter-from,
.dialog-modal-leave-to {
  opacity: 0;
  transform: scale(0.95);
}
</style>
