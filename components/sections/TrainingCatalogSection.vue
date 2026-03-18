<script setup lang="ts">
import type { Training } from '~/components/cards/TrainingCard.vue'

const categories = [
  { id: 'all', label: 'All', emoji: '🎯' },
  { id: 'rust', label: 'Rust', emoji: '🦀' },
  { id: 'wasm', label: 'WebAssembly', emoji: '⚡' },
  { id: 'embedded', label: 'Embedded', emoji: '🔧' },
  { id: 'interop', label: 'Interoperability', emoji: '🔗' },
]

const levels = ['All', 'Beginner', 'Intermediate', 'Advanced']

const activeCategory = ref('all')
const activeLevel = ref('All')

const trainings: Training[] = [
  {
    emoji: '🦀',
    title: 'Rust Fundamentals',
    subtitle: '(Short Format)',
    duration: '3 days',
    level: 'Beginner',
    description:
      'Understand how Rust thinks about memory. Covers ownership, borrowing, and the core type system — the foundations that determine whether your team writes safe Rust or unsafe habits wrapped in Rust syntax.',
    tags: ['Rust', 'Ownership', 'Memory Safety', 'C/C++', 'Traits'],
  },
  {
    emoji: '🦀',
    title: 'Rust Fundamentals',
    subtitle: '(With Final Project)',
    duration: '5 days',
    level: 'Beginner',
    description:
      'Everything in the 3-day program, plus design patterns, error handling, and a complete final project built with mentorship. For developers who need to move from understanding Rust to structuring a real codebase in it.',
    tags: ['Rust', 'Ownership', 'Error Handling', 'Design Patterns', 'Crates & Modules'],
  },
  {
    emoji: '🦀',
    title: 'Rust Fundamentals',
    subtitle: '(Extended Format)',
    duration: '7 days',
    level: 'Beginner',
    description:
      'The most comprehensive Rust foundation program. Covers the full language including smart pointers, concurrency, memory models, and unit testing. For teams that need a solid, production-ready Rust foundation from day one.',
    tags: ['Rust', 'Concurrency', 'Smart Pointers', 'Memory Models', 'Testing'],
  },
]
</script>

<template>
  <section class="py-12 md:py-20 bg-white">
    <div class="max-w-[1240px] mx-auto px-6">
      <UiSectionHeading
        title="Training Catalog"
        subtitle="Comprehensive courses designed for professional developers and engineering teams"
        align="center"
      />

      <!-- Filters -->
      <div class="mb-12">
        <!-- Category filter -->
        <div class="mb-6">
          <div class="flex items-center gap-2 mb-3">
            <Icon name="lucide:funnel" class="w-5 h-5 text-[#666]" />
            <span class="text-sm font-medium text-[#666]">Category</span>
          </div>
          <div class="flex flex-wrap gap-3">
            <UiFilterChip
              v-for="cat in categories"
              :key="cat.id"
              :active="activeCategory === cat.id"
              active-color="red"
              @click="activeCategory = cat.id"
            >
              <span>{{ cat.emoji }}</span>{{ cat.label }}
            </UiFilterChip>
          </div>
        </div>

        <!-- Level filter -->
        <div>
          <div class="flex items-center gap-2 mb-3">
            <span class="text-sm font-medium text-[#666]">Level</span>
          </div>
          <div class="flex flex-wrap gap-3">
            <UiFilterChip
              v-for="level in levels"
              :key="level"
              :active="activeLevel === level"
              active-color="orange"
              @click="activeLevel = level"
            >
              {{ level }}
            </UiFilterChip>
          </div>
        </div>
      </div>

      <!-- Count -->
      <div class="mb-6">
        <p class="text-sm text-[#666]">Showing {{ trainings.length }} trainings</p>
      </div>

      <!-- Cards grid -->
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <TrainingCard v-for="(training, i) in trainings" :key="i" :training="training" />
      </div>

      <!-- View All -->
      <div class="text-center mt-8">
        <button class="text-[#999] hover:text-[#666] underline text-sm font-medium transition-colors">
          View All
        </button>
      </div>
    </div>
  </section>
</template>
