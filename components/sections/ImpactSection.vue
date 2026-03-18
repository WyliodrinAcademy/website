<script setup lang="ts">
const { t, locale } = useI18n()

const stats = computed(() => [
  { icon: 'lucide:book-open',  value: '150+',   label: t('impact.stats.trainings') },
  { icon: 'lucide:award',      value: '98%',    label: t('impact.stats.satisfaction') },
  { icon: 'lucide:users',      value: '2,500+', label: t('impact.stats.students') },
  { icon: 'lucide:building-2', value: '75+',    label: t('impact.stats.companies') },
])

// Duplicate for seamless infinite marquee
const ticker = computed(() => [...stats.value, ...stats.value])

// Exact pixel offset for the loop point: 4 × (card_width + margin_right).
// Percentage-based translateX is unreliable because scrollWidth may omit the
// last card's trailing margin, causing a visible jump on every loop reset.
const trackRef = ref<HTMLElement>()
const oneSetWidth = ref(0)

function measureTrack() {
  const track = trackRef.value
  if (!track || !track.children.length) return
  const card = track.children[0] as HTMLElement
  const cardW = card.getBoundingClientRect().width
  const mr = parseFloat(getComputedStyle(card).marginRight) || 0
  oneSetWidth.value = Math.round(4 * (cardW + mr))
}

onMounted(async () => {
  await nextTick()
  measureTrack()
})

// Recompute if locale changes (labels may affect card width)
watch(locale, async () => {
  await nextTick()
  measureTrack()
})
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
        <div
          ref="trackRef"
          class="marquee-track flex whitespace-nowrap"
          :style="oneSetWidth ? { '--one-set-width': oneSetWidth + 'px' } : {}"
        >
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
        <a href="/#contact">
          <UiButton variant="ghost">{{ t('impact.button') }}</UiButton>
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.marquee-track {
  animation: marquee 15s linear infinite;
}

/* Each card owns its right-margin so the loop offset is predictable */
.marquee-track > * {
  margin-right: 2rem;
}

@keyframes marquee {
  from {
    transform: translateX(0);
  }
  to {
    /* Use JS-measured exact pixel value; falls back to ~50% before mount */
    transform: translateX(calc(-1 * var(--one-set-width, 50%)));
  }
}
</style>
