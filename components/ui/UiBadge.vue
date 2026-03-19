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

const { t } = useI18n()

const displayLabel = computed(() => {
  if (props.level) return t(`trainings.levels.${props.level.toLowerCase()}`, props.level)
  return props.label ?? ''
})
</script>

<template>
  <span
    :class="[
      'inline-block px-3 py-1 rounded-full text-xs font-semibold',

      variant === 'level' && level === 'Beginner' && 'bg-[#66f2e3]/20 text-[#1a1a1a] border border-[#66f2e3]',
      variant === 'level' && level === 'Intermediate' && 'bg-amber-50 text-amber-800 border border-amber-300',
      variant === 'level' && level === 'Advanced' && 'bg-red-50 text-red-800 border border-red-300',

      variant === 'category' && 'bg-[#66f2e3]/20 text-[#1a1a1a]',
    ]"
  >
    {{ displayLabel }}
  </span>
</template>
