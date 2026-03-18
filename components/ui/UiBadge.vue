<script setup lang="ts">
export type UiBadgeVariant = 'level' | 'category'
export type UiBadgeLevel = 'Beginner' | 'Intermediate' | 'Advanced'

const props = withDefaults(
  defineProps<{
    variant?: UiBadgeVariant
    level?: UiBadgeLevel
    label?: string
  }>(),
  { variant: 'category' },
)
</script>

<template>
  <span
    :class="[
      'inline-block px-3 py-1 rounded-full text-xs font-medium',

      variant === 'level' && level === 'Beginner' && 'bg-[#66f2e3]/20 text-[#1a1a1a] border border-[#66f2e3]',
      variant === 'level' && level === 'Intermediate' && 'bg-amber-50 text-amber-800 border border-amber-300',
      variant === 'level' && level === 'Advanced' && 'bg-red-50 text-red-800 border border-red-300',

      variant === 'category' && 'bg-[#66f2e3]/20 text-[#1a1a1a]',
    ]"
  >
    {{ level ?? label }}
  </span>
</template>
