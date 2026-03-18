<script setup lang="ts">
const tabs = [
  { id: 'public', label: 'Public Resources', icon: 'lucide:file-text' },
  { id: 'compliance', label: 'Quality & Compliance', icon: 'lucide:circle-check-big' },
]

const activeTab = ref('public')
const search = ref('')

const resources = [
  {
    category: 'Documentation',
    title: 'The Rust Programming Language Book',
    description: 'Official comprehensive guide to learning Rust programming language.',
    href: 'https://doc.rust-lang.org/book/',
  },
  {
    category: 'Documentation',
    title: 'WebAssembly on MDN',
    description: "Mozilla's comprehensive WebAssembly documentation and tutorials.",
    href: 'https://developer.mozilla.org/en-US/docs/WebAssembly',
  },
  {
    category: 'Documentation',
    title: 'Embedded Rust Book',
    description: 'Learn how to use Rust for embedded systems development.',
    href: 'https://docs.rust-embedded.org/book/',
  },
  {
    category: 'Labs & Code',
    title: 'Wyliodrin GitHub Repositories',
    description: 'Access our open-source projects, labs, and learning materials.',
    href: 'https://github.com/wyliodrin',
  },
]
</script>

<template>
  <section id="resources" class="py-20 bg-white">
    <div class="max-w-[1240px] mx-auto px-6">
      <UiSectionHeading
        title="Resources"
        subtitle="Access documentation, labs, and compliance materials"
        align="center"
      />

      <!-- Tab filters -->
      <div class="mb-8">
        <div class="flex flex-wrap gap-3 justify-center">
          <button
            v-for="tab in tabs"
            :key="tab.id"
            :class="[
              'px-6 py-3 rounded-xl font-medium transition-all flex items-center gap-2',
              activeTab === tab.id
                ? 'bg-[#560d08] text-white shadow-lg'
                : 'bg-[#f9f9f6] text-[#666] hover:bg-[#f5f5f5] border border-[#d7d7d7]',
            ]"
            @click="activeTab = tab.id"
          >
            <Icon :name="tab.icon" class="w-5 h-5" />
            {{ tab.label }}
          </button>
        </div>
      </div>

      <!-- Search -->
      <div class="mb-8 max-w-2xl mx-auto">
        <div class="relative">
          <Icon name="lucide:search" class="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#666]" />
          <input
            v-model="search"
            type="text"
            placeholder="Search resources..."
            class="w-full pl-12 pr-4 py-4 bg-[#f9f9f6] border border-[#d7d7d7] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#f0441a] transition-all"
          />
        </div>
      </div>

      <!-- Resource cards grid -->
      <div class="grid md:grid-cols-2 gap-6">
        <ResourceCard
          v-for="(res, i) in resources"
          :key="i"
          :category="res.category"
          :title="res.title"
          :description="res.description"
          :href="res.href"
        />
      </div>
    </div>
  </section>
</template>
