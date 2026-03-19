<script setup lang="ts">
const { t } = useI18n()

const year = new Date().getFullYear()

const quickLinks = [
  { key: 'trainings', href: '/#trainings' },
  { key: 'instructors', href: '/#instructors' },
  { key: 'resources', href: '/#resources' },
  { key: 'contact', href: '/#contact' },
]

const footerRef = ref<HTMLElement>()
const footerVisible = ref(false)

onMounted(() => {
  const io = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        footerVisible.value = true
        io.disconnect()
      }
    },
    { threshold: 0.2 },
  )
  if (footerRef.value) io.observe(footerRef.value)
})
</script>

<template>
  <footer ref="footerRef" class="bg-[#1a1a1a] text-white">
    <div class="max-w-310 mx-auto px-6 py-12">
      <!-- 3-col grid -->
      <div class="grid md:grid-cols-3 gap-8 mb-8">
        <!-- Logo + description -->
        <div
          class="transition-all duration-500 ease-out"
          :class="footerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'"
        >
          <div class="mb-4">
            <img src="/images/logo.png" alt="Wyliodrin Academy" class="h-16 w-auto" />
          </div>
          <p class="text-white/60 text-sm leading-relaxed">
            {{ t('footer.description') }}
          </p>
        </div>

        <!-- Quick Links -->
        <div
          class="transition-all duration-500 ease-out"
          :class="footerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'"
          :style="{ transitionDelay: footerVisible ? '100ms' : '0ms' }"
        >
          <h3
            class="font-semibold text-white mb-4"
            style="font-family: 'Space Grotesk', sans-serif"
          >
            {{ t('footer.quickLinks') }}
          </h3>
          <ul class="space-y-2">
            <li v-for="link in quickLinks" :key="link.key">
              <a
                :href="link.href"
                class="text-white/60 hover:text-[#f0441a] transition-colors text-sm"
              >
                {{ t(`nav.${link.key}`) }}
              </a>
            </li>
          </ul>
        </div>

        <!-- Legal & Compliance -->
        <div
          class="transition-all duration-500 ease-out"
          :class="footerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'"
          :style="{ transitionDelay: footerVisible ? '200ms' : '0ms' }"
        >
          <h3
            class="font-semibold text-white mb-4"
            style="font-family: 'Space Grotesk', sans-serif"
          >
            {{ t('footer.legal.title') }}
          </h3>
          <ul class="space-y-2">
            <li>
              <a href="#" class="text-white/60 hover:text-[#f0441a] transition-colors text-sm">
                {{ t('footer.legal.accessibility') }}
              </a>
            </li>
            <li>
              <a
                href="/legal/mentions.pdf"
                target="_blank"
                rel="noopener noreferrer"
                class="text-white/60 hover:text-[#f0441a] transition-colors text-sm"
              >
                {{ t('footer.legal.mentions') }}
              </a>
            </li>
            <li>
              <a
                href="/legal/privacy.pdf"
                target="_blank"
                rel="noopener noreferrer"
                class="text-white/60 hover:text-[#f0441a] transition-colors text-sm"
              >
                {{ t('footer.legal.privacy') }}
              </a>
            </li>
            <li>
              <a href="#" class="text-white/60 hover:text-[#f0441a] transition-colors text-sm">
                {{ t('footer.legal.quality') }}
              </a>
            </li>
            <li>
              <a
                href="#"
                class="text-white/60 hover:text-[#f0441a] transition-colors text-sm flex items-center gap-2"
              >
                <span>🎯</span> {{ t('footer.legal.qualiopi') }}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <!-- Bottom bar -->
      <div
        class="border-t border-white/10 pt-8 transition-all duration-500 ease-out"
        :class="footerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'"
        :style="{ transitionDelay: footerVisible ? '300ms' : '0ms' }"
      >
        <div class="flex flex-col md:flex-row justify-between items-center gap-4">
          <p class="text-white/60 text-sm">
            © {{ year }} Wyliodrin Academy. {{ t('footer.rights') }}
          </p>
          <div class="flex gap-6">
            <a
              href="https://www.linkedin.com/company/wyliodrin"
              target="_blank"
              rel="noopener noreferrer"
              class="text-white/60 hover:text-[#f0441a] transition-colors text-sm"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/wyliodrin"
              target="_blank"
              rel="noopener noreferrer"
              class="text-white/60 hover:text-[#f0441a] transition-colors text-sm"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
