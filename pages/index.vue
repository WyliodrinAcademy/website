<script setup lang="ts">
const { t } = useI18n()

useSeoMeta({
  title: t('meta.home.title'),
  description: t('meta.home.description'),
})
</script>

<template>
  <div>
    <!-- Sections will be added here once Figma designs are implemented -->
    <section class="container-site py-24">
      <h1 class="text-4xl font-bold text-primary">
        {{ t('home.hero.title') }}
      </h1>
      <p class="mt-4 text-lg text-gray-600">
        {{ t('home.hero.subtitle') }}
      </p>
    </section>
  </div>
</template>
