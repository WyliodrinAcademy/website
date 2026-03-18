<script setup lang="ts">
import type { IExpertType } from '~/types/index'

const { t, locale } = useI18n()

const animationKey = ref(0)
watch(locale, () => { animationKey.value++ })

const experts = computed<IExpertType[]>(() => [
  {
    name: t('instructors.experts.alexandru.name'),
    role: t('instructors.experts.alexandru.role'),
    aboutMe: t('instructors.experts.alexandru.bio'),
    photoUrl: '/images/experts/alexandru-radovici.png',
    linkedinUrl: 'https://www.linkedin.com/in/alexandruradovici/',
  },
  {
    name: t('instructors.experts.ioana.name'),
    role: t('instructors.experts.ioana.role'),
    aboutMe: t('instructors.experts.ioana.bio'),
    photoUrl: '/images/experts/ioana-culic.png',
    linkedinUrl: 'https://www.linkedin.com/in/ioanaculic/',
  },
])

const selectedExpert = ref<IExpertType | null>(null)
const dialogOpen = ref(false)

function openDialog(expert: IExpertType) {
  selectedExpert.value = expert
  dialogOpen.value = true
}
</script>

<template>
  <section id="instructors" class="py-20 bg-[#f9f9f6]">
    <div class="max-w-[1240px] mx-auto px-6">
      <UiSectionHeading
        :title="t('instructors.heading')"
        :subtitle="t('instructors.subtitle')"
        align="center"
      />

      <div class="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <ExpertCard
          v-for="(expert, i) in experts"
          :key="`${animationKey}-${expert.name}`"
          :expert="expert"
          :index="i"
          @click="openDialog(expert)"
        />
      </div>
    </div>

    <ExpertDialog
      :expert="selectedExpert"
      :open="dialogOpen"
      @close="dialogOpen = false"
    />
  </section>
</template>
