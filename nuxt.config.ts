// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  runtimeConfig: {
    public: {
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL ?? 'https://wyliodrinacademy.github.io',
    },
  },

  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      meta: [
        { name: 'theme-color', content: '#560d08' },
      ],
    },
  },

  // Keep Nuxt 3-style root source directory (components/, pages/, etc. at project root)
  srcDir: '.',

  // Nuxt 4 prefixes components with their folder name (layout/AppHeader → LayoutAppHeader).
  // pathPrefix: false restores the Nuxt 3 behaviour — folder is for organisation only.
  components: [{ path: '~/components', pathPrefix: false }],

  modules: [
    '@nuxt/ui', // includes Tailwind v4 + @nuxt/icon automatically
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

  // Static site generation for GitHub Pages.
  // - Generates .output/public/ with pre-rendered HTML for / and /fr/
  // - Adds .nojekyll so GitHub Pages doesn't strip _nuxt/ assets
  // - Generates 404.html for SPA fallback (handles deep links & i18n routes)
  // Base URL: set NUXT_APP_BASE_URL env var when deploying to a project page
  // (e.g. https://org.github.io/repo-name/ → set it to /repo-name/).
  // Leave unset for custom domains or user/org pages (defaults to /).
  nitro: {
    preset: 'github-pages',
  },

  compatibilityDate: '2024-11-01',

  vite: {
    optimizeDeps: {
      include: ['@vue/devtools-core', '@vue/devtools-kit'],
    },
  },
})
