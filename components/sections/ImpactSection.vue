<script setup lang="ts">
const { t } = useI18n()

const stats = computed(() => [
  { icon: 'lucide:book-open',  value: '150+',   label: t('impact.stats.trainings') },
  { icon: 'lucide:award',      value: '98%',    label: t('impact.stats.satisfaction') },
  { icon: 'lucide:users',      value: '2,500+', label: t('impact.stats.students') },
  { icon: 'lucide:building-2', value: '75+',    label: t('impact.stats.companies') },
])

// Duplicate for seamless infinite marquee (×2 + per-card margin = exact -50% loop)
const ticker = computed(() => [...stats.value, ...stats.value])
</script>

<template>
  <section id="our-impact" class="py-16 bg-gradient-to-br from-[#560d08] to-[#ba321f] text-white relative overflow-hidden">
    <!-- Background blobs -->
    <div class="absolute inset-0 opacity-10">
      <div class="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl" />
      <div class="absolute bottom-0 right-0 w-96 h-96 bg-[#66f2e3] rounded-full blur-3xl" />
    </div>

    <div class="relative z-10">
      <!-- Heading -->
      <div class="text-center mb-12 px-6">
        <h2 class="text-4xl font-bold mb-4" style="font-family: 'Space Grotesk', sans-serif">{{ t('impact.heading') }}</h2>
        <p class="text-xl text-white/90 max-w-3xl mx-auto">{{ t('impact.subtitle') }}</p>
      </div>

      <!-- Marquee ticker -->
      <div class="relative overflow-hidden">
        <div class="marquee-track flex whitespace-nowrap">
          <ImpactStatCard
            v-for="(stat, i) in ticker"
            :key="i"
            :icon="stat.icon"
            :value="stat.value"
            :label="stat.label"
          />
        </div>
      </div>

      <!-- CTA -->
      <div class="text-center mt-12 px-6">
        <p class="text-lg text-white/90 mb-6">{{ t('impact.cta') }}</p>
        <UiButton variant="ghost">{{ t('impact.button') }}</UiButton>
      </div>
    </div>
  </section>
</template>

<style scoped>
.marquee-track {
  animation: marquee 15s linear infinite;
}

/* Each card owns its right-margin so translateX(-50%) loops exactly at 1 set width */
.marquee-track > * {
  margin-right: 2rem;
}

@keyframes marquee {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-50%);
  }
}
</style>
