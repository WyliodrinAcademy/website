<script setup lang="ts">
const { t } = useI18n()
const localePath = useLocalePath()

const year = new Date().getFullYear()

const quickLinks = [
  { key: 'trainings', to: '/trainings' },
  { key: 'instructors', to: '/instructors' },
  { key: 'resources', to: '/resources' },
  { key: 'contact', to: '/contact' },
]
</script>

<template>
  <footer class="bg-[#1a1a1a] text-white">
    <div class="max-w-[1240px] mx-auto px-6 py-12">
      <!-- 3-col grid -->
      <div class="grid md:grid-cols-3 gap-8 mb-8">
        <!-- Logo + description -->
        <div>
          <div class="mb-4">
            <NuxtLink :to="localePath('/')" class="flex items-center gap-3">
              <NuxtImg src="/images/logo.png" alt="Wyliodrin Academy" width="48" height="48" loading="lazy" />
              <span class="text-lg font-bold" style="font-family: 'Space Grotesk', sans-serif">
                Wyliodrin Academy
              </span>
            </NuxtLink>
          </div>
          <p class="text-white/60 text-sm leading-relaxed">
            Professional training in Rust, WebAssembly, and embedded systems with Qualiopi certification.
          </p>
        </div>

        <!-- Quick Links -->
        <div>
          <h3 class="font-semibold text-white mb-4" style="font-family: 'Space Grotesk', sans-serif">
            Quick Links
          </h3>
          <ul class="space-y-2">
            <li v-for="link in quickLinks" :key="link.key">
              <NuxtLink
                :to="localePath(link.to)"
                class="text-white/60 hover:text-[#f0441a] transition-colors text-sm"
              >
                {{ t(`nav.${link.key}`) }}
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Legal & Compliance -->
        <div>
          <h3 class="font-semibold text-white mb-4" style="font-family: 'Space Grotesk', sans-serif">
            Legal &amp; Compliance
          </h3>
          <ul class="space-y-2">
            <li>
              <a href="#" class="text-white/60 hover:text-[#f0441a] transition-colors text-sm">
                Accessibility Statement
              </a>
            </li>
            <li>
              <a
                href="/legal/mentions.pdf"
                target="_blank"
                rel="noopener noreferrer"
                class="text-white/60 hover:text-[#f0441a] transition-colors text-sm"
              >
                Legal Mentions
              </a>
            </li>
            <li>
              <a
                href="/legal/privacy.pdf"
                target="_blank"
                rel="noopener noreferrer"
                class="text-white/60 hover:text-[#f0441a] transition-colors text-sm"
              >
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" class="text-white/60 hover:text-[#f0441a] transition-colors text-sm">Quality Standards</a>
            </li>
            <li>
              <a href="#" class="text-white/60 hover:text-[#f0441a] transition-colors text-sm flex items-center gap-2">
                <span>🎯</span> Qualiopi Certified
              </a>
            </li>
          </ul>
        </div>
      </div>

      <!-- Bottom bar -->
      <div class="border-t border-white/10 pt-8">
        <div class="flex flex-col md:flex-row justify-between items-center gap-4">
          <p class="text-white/60 text-sm">© {{ year }} Wyliodrin Academy. {{ t('footer.rights') }}</p>
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
