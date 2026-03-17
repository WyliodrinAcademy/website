// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(
  // Prettier must come last to disable conflicting rules
  {
    rules: {
      'vue/multi-word-component-names': 'off',
    },
  },
)
