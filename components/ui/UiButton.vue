<script setup lang="ts">
export type UiButtonVariant = 'primary' | 'outline' | 'ghost' | 'dark'

const props = withDefaults(
  defineProps<{
    variant?: UiButtonVariant
    as?: 'button' | 'a'
    href?: string
    target?: string
    type?: 'button' | 'submit' | 'reset'
  }>(),
  { variant: 'primary', as: 'button', type: 'button' },
)
</script>

<template>
  <component
    :is="as"
    :href="href"
    :target="target"
    :type="as === 'button' ? type : undefined"
    :class="[
      'inline-flex items-center justify-center gap-2 font-semibold transition-all cursor-pointer',

      variant === 'primary' && [
        'px-8 py-4 bg-[#f0441a] text-white rounded-lg shadow-lg',
        'hover:shadow-xl',
      ],

      variant === 'dark' && [
        'px-4 py-3 bg-[#560d08] text-white rounded-lg',
        'hover:bg-[#6e1109] transition-colors',
      ],

      variant === 'outline' && [
        'px-4 py-2 bg-white text-[#560d08] rounded-lg border-2 border-[#560d08]',
        'hover:bg-[#560d08] hover:text-white transition-all',
      ],

      variant === 'ghost' && [
        'px-8 py-4 bg-white text-[#560d08] rounded-lg shadow-xl',
        'hover:shadow-2xl transition-all',
      ],
    ]"
  >
    <slot />
  </component>
</template>
