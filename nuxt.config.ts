// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  // Keep Nuxt 3-style root source directory (components/, pages/, etc. at project root)
  srcDir: '.',

  // Nuxt 4 prefixes components with their folder name (layout/AppHeader → LayoutAppHeader).
  // pathPrefix: false restores the Nuxt 3 behaviour — folder is for organisation only.
  components: [
    { path: '~/components', pathPrefix: false },
  ],

  modules: [
    '@nuxt/ui',           // includes Tailwind v4 + @nuxt/icon automatically
    '@nuxtjs/i18n',
    '@nuxt/image',
    '@nuxt/eslint',
  ],

  i18n: {
    locales: [
      { code: 'en', file: 'en.json', language: 'en-US', name: 'English' },
      { code: 'fr', file: 'fr.json', language: 'fr-FR', name: 'Français' },
    ],
    defaultLocale: 'en',
    // restructureDir defaults to 'i18n', so langDir resolves to i18n/locales/
    langDir: 'locales/',
    strategy: 'prefix_except_default',
    bundle: {
      optimizeTranslationDirective: false,
    },
  },

  css: ['~/assets/css/main.css'],

  typescript: {
    strict: true,
  },

  compatibilityDate: '2024-11-01',
})
