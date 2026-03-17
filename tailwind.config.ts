import type { Config } from 'tailwindcss'

export default {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './composables/**/*.{js,ts}',
    './plugins/**/*.{js,ts}',
    './app.vue',
    './error.vue',
  ],
  theme: {
    extend: {
      // ─── Colors (fill from Figma tokens) ───────────────────────────
      colors: {
        primary: {
          DEFAULT: '#0066FF',
          50: '#e6f0ff',
          100: '#cce0ff',
          200: '#99c2ff',
          300: '#66a3ff',
          400: '#3385ff',
          500: '#0066FF',
          600: '#0052cc',
          700: '#003d99',
          800: '#002966',
          900: '#001433',
        },
        secondary: {
          DEFAULT: '#1A1A2E',
        },
        neutral: {
          DEFAULT: '#F5F5F7',
        },
      },

      // ─── Typography (fill from Figma) ──────────────────────────────
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        heading: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },

      // ─── Spacing / sizing tokens ────────────────────────────────────
      maxWidth: {
        site: '1280px',
      },
    },
  },
  plugins: [],
} satisfies Config
