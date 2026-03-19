<script setup lang="ts">
const head = useLocaleHead({ addSeoAttributes: true })
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
