<script setup lang="ts">
import type { IExpertType } from '~/types/index'

defineProps<{
  expert: IExpertType | null
  open: boolean
}>()

defineEmits<{
  close: []
}>()

const { t } = useI18n()
</script>

<template>
  <Teleport to="body">
    <!-- Backdrop: blur + dim -->
    <Transition name="dialog-backdrop">
      <div
        v-if="open && expert"
        class="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
        @click="$emit('close')"
      />
    </Transition>

    <!-- Modal: flex-centered so no translate conflicts with scale animation -->
    <Transition name="dialog-modal">
      <div
        v-if="open && expert"
        class="fixed inset-0 z-50 flex items-end md:items-center justify-center md:p-4"
        @click.self="$emit('close')"
      >
        <div class="w-full md:max-w-2xl bg-white rounded-t-2xl md:rounded-2xl shadow-2xl overflow-hidden">
          <!-- Header with photo + gradient -->
          <div class="relative h-64 bg-gradient-to-br from-[#560d08] to-[#ba321f]">
            <img
              v-if="expert.photoUrl"
              :src="expert.photoUrl"
              :alt="expert.name"
              class="w-full h-full object-cover opacity-90"
            />
            <!-- Gradient overlay -->
            <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

            <!-- Close button: explicit square so rounded-full stays circular -->
            <button
              class="absolute top-4 right-4 w-10 h-10 flex items-center justify-center bg-white/10 backdrop-blur-md hover:bg-white/20 rounded-full transition-colors"
              @click="$emit('close')"
            >
              <Icon name="lucide:x" class="w-6 h-6 text-white" />
            </button>

            <!-- Name + Role -->
            <div class="absolute bottom-6 left-6 right-6">
              <h2
                class="text-3xl font-bold text-white mb-2"
                style="font-family: 'Space Grotesk', sans-serif"
              >
                {{ expert.name }}
              </h2>
              <p class="text-[#66f2e3] font-medium text-lg">{{ expert.role }}</p>
            </div>
          </div>

          <!-- Body -->
          <div class="p-6">
            <div class="mb-6">
              <h3
                class="text-lg font-semibold text-[#1a1a1a] mb-3"
                style="font-family: 'Space Grotesk', sans-serif"
              >
                {{ t('instructors.about') }}
              </h3>
              <p class="text-[#666] leading-relaxed">{{ expert.aboutMe }}</p>
            </div>

            <a
              :href="expert.linkedinUrl"
              target="_blank"
              rel="noopener noreferrer"
              class="w-full px-6 py-4 bg-[#0077b5] text-white rounded-lg font-medium flex items-center justify-center gap-2 shadow-lg hover:shadow-xl hover:bg-[#006a9e] transition-all"
            >
              <Icon name="lucide:linkedin" class="w-5 h-5" />
              {{ t('instructors.viewLinkedin') }}
            </a>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
/* Backdrop: fade in/out */
.dialog-backdrop-enter-active,
.dialog-backdrop-leave-active {
  transition: opacity 0.25s ease;
}
.dialog-backdrop-enter-from,
.dialog-backdrop-leave-to {
  opacity: 0;
}

/* Modal: fade + zoom in/out */
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
