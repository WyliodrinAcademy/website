<script setup lang="ts">
const { t, locale, locales, setLocale } = useI18n()
const localePath = useLocalePath()

const navLinks = computed(() => [
  { label: t('nav.home'), to: localePath('/') },
  { label: t('nav.about'), to: localePath('/about') },
  { label: t('nav.contact'), to: localePath('/contact') },
])

const otherLocales = computed(() =>
  (locales.value as Array<{ code: string; name: string }>).filter((l) => l.code !== locale.value),
)

const isMenuOpen = ref(false)
</script>

<template>
  <header class="sticky top-0 z-50 w-full border-b border-gray-100 bg-white/90 backdrop-blur-sm">
    <div class="container-site flex h-16 items-center justify-between">
      <!-- Logo -->
      <NuxtLink :to="localePath('/')" class="flex items-center gap-2 font-heading font-bold text-primary">
        <span class="text-xl">WyliodrinAcademy</span>
      </NuxtLink>

      <!-- Desktop nav -->
      <nav class="hidden items-center gap-8 md:flex">
        <NuxtLink
          v-for="link in navLinks"
          :key="link.to"
          :to="link.to"
          class="text-sm font-medium text-gray-600 transition-colors hover:text-primary"
          active-class="text-primary"
        >
          {{ link.label }}
        </NuxtLink>
      </nav>

      <!-- Right side: locale switcher -->
      <div class="flex items-center gap-3">
        <button
          v-for="l in otherLocales"
          :key="l.code"
          class="rounded-md px-3 py-1.5 text-xs font-semibold uppercase tracking-wide text-gray-500 ring-1 ring-gray-200 transition hover:ring-primary hover:text-primary"
          @click="setLocale(l.code as 'en' | 'fr')"
        >
          {{ l.code }}
        </button>

        <!-- Mobile hamburger -->
        <button
          class="flex items-center justify-center rounded-md p-2 text-gray-500 md:hidden"
          aria-label="Toggle menu"
          @click="isMenuOpen = !isMenuOpen"
        >
          <Icon :name="isMenuOpen ? 'lucide:x' : 'lucide:menu'" size="20" />
        </button>
      </div>
    </div>

    <!-- Mobile menu -->
    <Transition name="slide-down">
      <nav v-if="isMenuOpen" class="border-t border-gray-100 bg-white md:hidden">
        <div class="container-site flex flex-col gap-1 py-4">
          <NuxtLink
            v-for="link in navLinks"
            :key="link.to"
            :to="link.to"
            class="rounded-md px-3 py-2 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-50 hover:text-primary"
            active-class="bg-primary/5 text-primary"
            @click="isMenuOpen = false"
          >
            {{ link.label }}
          </NuxtLink>
        </div>
      </nav>
    </Transition>
  </header>
</template>

<style scoped>
.slide-down-enter-active,
.slide-down-leave-active {
  transition: all 0.2s ease;
}
.slide-down-enter-from,
.slide-down-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}
</style>
