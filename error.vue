<script setup lang="ts">
defineProps<{
  error: {
    statusCode: number
    statusMessage: string
  }
}>()

const { t } = useI18n()

const handleError = () => clearError({ redirect: '/' })
</script>

<template>
  <NuxtLayout>
    <section class="bg-[#f9f9f6] flex flex-col items-center justify-center py-32 px-6 min-h-[70vh]">
      <div class="text-center max-w-xl mx-auto space-y-6">
        <!-- Giant 404 -->
        <div
          class="error-fade-up text-[clamp(120px,20vw,180px)] leading-none font-bold text-[#560d08] select-none"
          style="font-family: 'Space Grotesk', sans-serif"
        >
          {{ t('error.code') }}
        </div>

        <!-- Heading -->
        <h1
          class="error-fade-up error-delay-150 text-3xl md:text-4xl font-bold text-[#f92d04]"
          style="font-family: 'Space Grotesk', sans-serif"
        >
          {{ t('error.title') }}
        </h1>

        <!-- Subtitle -->
        <p class="error-fade-up error-delay-300 text-lg text-[#666] leading-relaxed">
          {{ t('error.subtitle') }}
        </p>

        <!-- CTA -->
        <div class="error-fade-up error-delay-450 pt-4">
          <UiButton variant="primary" @click="handleError">
            <Icon name="lucide:arrow-left" class="w-5 h-5" />
            {{ t('error.cta') }}
          </UiButton>
        </div>
      </div>
    </section>
  </NuxtLayout>
</template>

<style scoped>
@keyframes errorFadeUp {
  from { opacity: 0; transform: translateY(20px); }
  to   { opacity: 1; transform: translateY(0); }
}

.error-fade-up   { animation: errorFadeUp 600ms cubic-bezier(0.4, 0, 0.2, 1) both; }
.error-delay-150 { animation-delay: 150ms; }
.error-delay-300 { animation-delay: 300ms; }
.error-delay-450 { animation-delay: 450ms; }
</style>
