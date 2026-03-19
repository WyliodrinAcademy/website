<script setup lang="ts">
const head = useLocaleHead({ addSeoAttributes: true })
const siteUrl = useRuntimeConfig().public.siteUrl

useHead({
  link: [{ rel: 'icon', type: 'image/png', href: `${siteUrl}/favicon.png` }],
})
</script>

<template>
  <Html :lang="head.htmlAttrs?.lang ?? 'en'">
    <Head>
      <template v-for="link in head.link" :key="link.id">
        <Link v-bind="link" />
      </template>
      <template v-for="meta in head.meta" :key="meta.id">
        <Meta v-bind="meta" />
      </template>
    </Head>
    <Body>
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </Body>
  </Html>
</template>
