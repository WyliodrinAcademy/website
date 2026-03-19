<script setup lang="ts">
const { t, locale } = useI18n()
const config = useRuntimeConfig()
const siteUrl = config.public.siteUrl
const canonicalUrl = locale.value === 'fr' ? `${siteUrl}/fr/` : `${siteUrl}/`

useSeoMeta({
  title: t('meta.home.title'),
  description: t('meta.home.description'),
  ogTitle: t('meta.home.title'),
  ogDescription: t('meta.home.description'),
  ogImage: `${siteUrl}/images/logo.png`,
  ogType: 'website',
  ogUrl: canonicalUrl,
  ogSiteName: 'Wyliodrin Academy',
  twitterCard: 'summary_large_image',
  twitterTitle: t('meta.home.title'),
  twitterDescription: t('meta.home.description'),
  twitterImage: `${siteUrl}/images/logo.png`,
})

useHead({
  link: [{ rel: 'canonical', href: canonicalUrl }],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@graph': [
          {
            '@type': 'Organization',
            name: 'Wyliodrin Academy',
            url: siteUrl,
            logo: `${siteUrl}/images/logo.png`,
            description: 'Qualiopi-certified B2B training in Rust, WebAssembly, and Embedded Systems.',
            sameAs: [],
          },
          {
            '@type': 'WebSite',
            name: 'Wyliodrin Academy',
            url: siteUrl,
          },
        ],
      }),
    },
  ],
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
