<script setup lang="ts">
const { t } = useI18n()

useSeoMeta({
  title: t('meta.home.title'),
  description: t('meta.home.description'),
})
</script>

<template>
  <div>
    <HeroSection />
    <TrainingCatalogSection />
    <InstructorsSection />
    <ImpactSection />
    <ResourcesSection />
    <ContactSection />
  </div>
</template>
