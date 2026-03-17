<script setup lang="ts">
const { t } = useI18n()
const localePath = useLocalePath()

const year = new Date().getFullYear()
</script>

<template>
  <footer class="border-t border-gray-100 bg-white">
    <div class="container-site flex flex-col items-center justify-between gap-4 py-8 sm:flex-row">
      <p class="text-sm text-gray-500">
        © {{ year }} WyliodrinAcademy. {{ t('footer.rights') }}
      </p>

      <nav class="flex items-center gap-6">
        <NuxtLink
          :to="localePath('/about')"
          class="text-sm text-gray-500 transition-colors hover:text-primary"
        >
          {{ t('nav.about') }}
        </NuxtLink>
        <NuxtLink
          :to="localePath('/contact')"
          class="text-sm text-gray-500 transition-colors hover:text-primary"
        >
          {{ t('nav.contact') }}
        </NuxtLink>
      </nav>
    </div>
  </footer>
</template>
