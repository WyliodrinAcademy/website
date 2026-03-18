<script setup lang="ts">
const { t, locale, locales, setLocale } = useI18n()
const router = useRouter()

const navLinks = [
  { key: 'trainings', href: '/#trainings' },
  { key: 'instructors', href: '/#instructors' },
  { key: 'resources', href: '/#resources' },
  { key: 'our_impact', href: '/#our-impact' },
  { key: 'contact', href: '/#contact' },
]

const allLocales = computed(() => locales.value as Array<{ code: string; name: string }>)

const isMenuOpen = ref(false)

async function switchLocale(code: 'en' | 'fr') {
  const scrollY = window.scrollY
  // Strip hash from both Vue Router state and browser URL so that
  // when i18n navigates to the new locale URL it won't include the
  // hash — preventing the browser from auto-scrolling to the anchor.
  if (router.currentRoute.value.hash) {
    await router.replace({ hash: '' })
  }
  await setLocale(code)
  await nextTick()
  window.scrollTo({ top: scrollY, behavior: 'instant' })
}
</script>

<template>
  <header class="sticky top-0 z-50 w-full border-b border-gray-100 bg-white">
    <div class="container-site flex h-16 items-center justify-between gap-6">
      <!-- ── LEFT: Logo ───────────────────────────────────────────── -->
      <HeaderImage />

      <!-- ── CENTER: Desktop nav ──────────────────────────────────── -->
      <nav
        class="hidden flex-1 items-center justify-center gap-6 md:flex"
        aria-label="Main navigation"
      >
        <a
          v-for="link in navLinks"
          :key="link.key"
          :href="link.href"
        >
          <HeaderButton variant="nav">
            {{ t(`nav.${link.key}`) }}
          </HeaderButton>
        </a>
      </nav>

      <!-- ── RIGHT: Language switcher + mobile trigger ─────────────── -->
      <div class="flex items-center gap-3">
        <!-- Globe + pill (desktop only) -->
        <div class="hidden items-center gap-2 md:flex">
          <!-- Globe icon -->
          <Icon name="lucide:globe" :size="18" class="text-[#666666]" aria-hidden="true" />

          <!-- Language pill wrapper -->
          <div
            class="flex items-center gap-1 rounded-l bg-[#F5F5F5] p-0.75 overflow-hidden"
            role="group"
            aria-label="Language selector"
          >
            <HeaderButton
              v-for="l in allLocales"
              :key="l.code"
              :variant="l.code === locale ? 'lang-active' : 'lang-inactive'"
              :aria-pressed="l.code === locale"
              :aria-label="`Switch to ${l.name}`"
              @click="switchLocale(l.code as 'en' | 'fr')"
            >
              {{ l.code.toUpperCase() }}
            </HeaderButton>
          </div>
        </div>

        <!-- Mobile hamburger -->
        <button
          class="flex items-center justify-center rounded-md p-2 text-[#666666] md:hidden"
          aria-label="Toggle navigation menu"
          :aria-expanded="isMenuOpen"
          @click="isMenuOpen = !isMenuOpen"
        >
          <Icon :name="isMenuOpen ? 'lucide:x' : 'lucide:menu'" :size="20" />
        </button>
      </div>
    </div>

    <!-- ── Mobile slide-down menu ──────────────────────────────────── -->
    <Transition name="slide-down">
      <nav
        v-if="isMenuOpen"
        class="border-t border-gray-100 bg-white md:hidden"
        aria-label="Mobile navigation"
      >
        <div class="container-site flex flex-col gap-1 py-4">
          <!-- Nav links -->
          <a
            v-for="link in navLinks"
            :key="link.key"
            :href="link.href"
            class="rounded-md px-3 py-2.5 text-sm font-semibold text-ink transition-colors hover:bg-gray-50 hover:text-[#f0441a]"
            style="font-family: 'Outfit', sans-serif"
            @click="isMenuOpen = false"
          >
            {{ t(`nav.${link.key}`) }}
          </a>

          <!-- Language switcher row -->
          <div class="mt-3 flex items-center gap-2 border-t border-gray-100 px-3 pt-4">
            <Icon name="lucide:globe" :size="16" class="text-[#666666]" aria-hidden="true" />
            <div class="flex items-center gap-1 rounded-l bg-[#F5F5F5] p-0.75 overflow-hidden">
              <HeaderButton
                v-for="l in allLocales"
                :key="l.code"
                :variant="l.code === locale ? 'lang-active' : 'lang-inactive'"
                :aria-label="`Switch to ${l.name}`"
                @click="
                  () => {
                    switchLocale(l.code as 'en' | 'fr')
                    isMenuOpen = false
                  }
                "
              >
                {{ l.code.toUpperCase() }}
              </HeaderButton>
            </div>
          </div>
        </div>
      </nav>
    </Transition>
  </header>
</template>

<style scoped>
.slide-down-enter-active,
.slide-down-leave-active {
  transition:
    opacity 0.2s ease,
    transform 0.2s ease;
}
.slide-down-enter-from,
.slide-down-leave-to {
  opacity: 0;
  transform: translateY(-6px);
}
</style>
