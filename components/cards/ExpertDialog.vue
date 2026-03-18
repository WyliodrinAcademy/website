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
    <template v-if="open && expert">
      <!-- Backdrop -->
      <div
        class="fixed inset-0 bg-black/50 z-40"
        @click="$emit('close')"
      />

      <!-- Modal -->
      <div
        class="fixed inset-4 md:inset-auto md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:w-full md:max-w-2xl bg-white rounded-2xl shadow-2xl z-50 overflow-hidden"
      >
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

          <!-- Close button -->
          <button
            class="absolute top-4 right-4 p-2 bg-white/10 backdrop-blur-md hover:bg-white/20 rounded-full transition-colors"
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
    </template>
  </Teleport>
</template>
