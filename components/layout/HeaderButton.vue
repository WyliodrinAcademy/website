<script setup lang="ts">
/**
 * HeaderButton — three visual variants matching the Figma header spec.
 *
 * variant   | use case               | bg        | text
 * ──────────────────────────────────────────────────────
 * nav        | desktop nav links      | transparent | #1A1A1A
 * lang-active | current locale pill   | #560D08   | #000000
 * lang-inactive | other locale pill   | #000000   | #666666
 *
 * The component always renders as a <button>.
 * For nav links, wrap it inside a <NuxtLink>.
 */

export type HeaderButtonVariant = 'nav' | 'lang-active' | 'lang-inactive'

const _props = withDefaults(
  defineProps<{
    variant?: HeaderButtonVariant
  }>(),
  { variant: 'nav' },
)
</script>

<template>
  <button
    :class="[
      // ── Shared base ────────────────────────────────
      'inline-flex items-center justify-center cursor-pointer transition-colors duration-150',

      // ── nav variant ────────────────────────────────
      variant === 'nav' && ['text-ink text-sm font-semibold px-2 py-1', 'hover:text-primary-500'],

      // ── lang-active (selected locale) ──────────────
      variant === 'lang-active' && [
        'bg-burgundy text-[#FFFFFF] text-xs font-semibold uppercase tracking-wide',
        'rounded-xl px-3 py-1.5 min-w-9',
      ],

      // ── lang-inactive (unselected locale) ──────────
      variant === 'lang-inactive' && [
        'bg-[#000000] text-[#666666] text-xs font-semibold uppercase tracking-wide',
        'rounded-xl px-3 py-1.5 min-w-9',
        'hover:text-[#999999]',
      ],
    ]"
    :style="
      variant === 'lang-active' || variant === 'lang-inactive'
        ? { fontFamily: '\'Outfit\', sans-serif' }
        : { fontFamily: '\'Outfit\', sans-serif' }
    "
  >
    <slot />
  </button>
</template>
