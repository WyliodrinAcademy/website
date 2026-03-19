<script setup lang="ts">
import type { ITrainingType } from '~/types/index'

const { t, tm, locale } = useI18n()

const categories = computed(() => [
  { id: 'all', label: t('trainings.categories.all'), emoji: '🎯' },
  { id: 'rust', label: t('trainings.categories.rust'), emoji: '🦀' },
  { id: 'wasm', label: t('trainings.categories.wasm'), emoji: '⚡' },
  { id: 'embedded', label: t('trainings.categories.embedded'), emoji: '🔧' },
  { id: 'interop', label: t('trainings.categories.interop'), emoji: '🔗' },
])

const levels = computed(() => [
  { id: 'All', label: t('trainings.levels.all') },
  { id: 'Beginner', label: t('trainings.levels.beginner') },
  { id: 'Intermediate', label: t('trainings.levels.intermediate') },
  { id: 'Advanced', label: t('trainings.levels.advanced') },
])

const activeCategory = ref('all')
const activeLevel = ref('All')
const showAll = ref(false)

watch([activeCategory, activeLevel], () => {
  showAll.value = false
})

// Scroll animation
const sectionRef = ref<HTMLElement | null>(null)
const sectionVisible = ref(false)

onMounted(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        sectionVisible.value = true
        observer.disconnect()
      }
    },
    { threshold: 0.1 },
  )
  if (sectionRef.value) observer.observe(sectionRef.value)
})

// Dialog state
const selectedTraining = ref<ITrainingType | null>(null)
const dialogOpen = ref(false)

function openDialog(training: ITrainingType) {
  selectedTraining.value = training
  dialogOpen.value = true
}

const trainings: ITrainingType[] = [
  {
    emoji: '🦀',
    key: 'rustFundamentalsShort',
    title: 'Rust Fundamentals',
    subtitle: '(Short Format)',
    duration: '3 days',
    level: 'Beginner',
    category: 'rust',
    description:
      'Understand how Rust thinks about memory. Covers ownership, borrowing, and the core type system — the foundations that determine whether your team writes safe Rust or unsafe habits wrapped in Rust syntax.',
    tags: ['Rust', 'Ownership', 'Memory Safety', 'C/C++', 'Traits'],
    details: [
      'Ownership and borrowing model',
      'Primitive types, structs, enums',
      'Pattern matching and control flow',
      'Traits and generics basics',
      'Cargo and the package ecosystem',
    ],
    programPdfLink: '/pdfs/rust-fundamentals-short.pdf',
  },
  {
    emoji: '🦀',
    key: 'rustFundamentalsProject',
    title: 'Rust Fundamentals',
    subtitle: '(With Final Project)',
    duration: '5 days',
    level: 'Beginner',
    category: 'rust',
    description:
      'Everything in the 3-day program, plus design patterns, error handling, and a complete final project built with mentorship. For developers who need to move from understanding Rust to structuring a real codebase in it.',
    tags: ['Rust', 'Ownership', 'Error Handling', 'Design Patterns', 'Crates & Modules'],
    details: [
      'All 3-day content included',
      'Error handling with Result and Option',
      'Design patterns in Rust',
      'Modules and crate organization',
      'Guided final project with mentorship',
    ],
    programPdfLink: '/pdfs/rust-fundamentals-project.pdf',
  },
  {
    emoji: '🦀',
    key: 'rustFundamentalsExtended',
    title: 'Rust Fundamentals',
    subtitle: '(Extended Format)',
    duration: '7 days',
    level: 'Beginner',
    category: 'rust',
    description:
      'The most comprehensive Rust foundation program. Covers the full language including smart pointers, concurrency, memory models, and unit testing. For teams that need a solid, production-ready Rust foundation from day one.',
    tags: ['Rust', 'Concurrency', 'Smart Pointers', 'Memory Models', 'Testing'],
    details: [
      'Complete language coverage',
      'Smart pointers and lifetimes',
      'Concurrency with threads and channels',
      'Memory models and safety guarantees',
      'Unit testing and benchmarks',
    ],
    programPdfLink: '/pdfs/rust-fundamentals-extended.pdf',
  },
  {
    emoji: '🔌',
    key: 'embeddedRust',
    title: 'Embedded Development in Rust',
    duration: '6 days',
    level: 'Intermediate',
    category: 'embedded',
    description:
      'Bare-metal and async firmware development for teams building safety-critical embedded systems. Covers the full embedded Rust stack — from hardware abstraction layers to real-time networking and OS-level memory protection.',
    tags: ['Embedded', 'Embassy', 'HAL', 'Bare-metal', 'Tock OS'],
    details: [
      'Bare-metal programming fundamentals',
      'Hardware abstraction layers (HAL)',
      'Embassy async runtime for embedded',
      'Real-time networking protocols',
      'Tock OS and memory protection',
    ],
    programPdfLink: '/pdfs/embedded-rust.pdf',
  },
  {
    emoji: '⚡',
    key: 'asyncRust',
    title: 'Asynchronous Rust',
    duration: '5 days',
    level: 'Intermediate',
    category: 'rust',
    description:
      'Master async Rust with Tokio and learn to build your own runtime. For system-level developers and backend engineers who need to understand not just how async works in Rust, but why it works the way it does.',
    tags: ['Async/Await', 'Tokio', 'Futures', 'Streams', 'Performance'],
    details: [
      'Async/await fundamentals',
      'Tokio runtime deep dive',
      'Building custom futures and executors',
      'Streams and channels',
      'Performance profiling for async code',
    ],
    programPdfLink: '/pdfs/async-rust.pdf',
  },
  {
    emoji: '🌐',
    key: 'webRust',
    title: 'Web Development in Rust',
    duration: '4 days',
    level: 'Intermediate',
    category: 'rust',
    description:
      'Build and deploy full-stack Rust applications using Rocket for the backend and WebAssembly for the frontend. Covers API design, authentication, middleware, and production deployment with Docker and NGINX.',
    tags: ['Rocket', 'REST API', 'WebAssembly', 'Auth', 'Docker'],
    details: [
      'Rocket framework and routing',
      'REST API design and authentication',
      'WebAssembly frontend integration',
      'Middleware and request handling',
      'Docker and NGINX deployment',
    ],
    programPdfLink: '/pdfs/web-rust.pdf',
  },
  {
    emoji: '🖥️',
    key: 'tauriDesktop',
    title: 'Desktop Applications with Tauri',
    duration: '3 days',
    level: 'Intermediate',
    category: 'rust',
    description:
      'Build lightweight, cross-platform desktop applications using Rust and Tauri. Covers multi-window interfaces, async backend communication, database integration, and application distribution — for teams moving away from Electron.',
    tags: ['Tauri', 'Rust', 'Cross-platform', 'Async', 'Desktop'],
    details: [
      'Tauri project setup and architecture',
      'Multi-window interface design',
      'Async Rust backend communication',
      'SQLite database integration',
      'Cross-platform distribution and packaging',
    ],
    programPdfLink: '/pdfs/tauri-desktop.pdf',
  },
  {
    emoji: '🔧',
    key: 'rustInteropC',
    title: 'Rust Interoperability with C/C++',
    duration: '4–5 days',
    level: 'Intermediate',
    category: 'interop',
    description:
      'Integrate Rust modules safely into existing C and C++ codebases. For teams doing incremental migration — new modules in Rust, legacy code preserved at the boundary — without stopping production or introducing unsafe behavior.',
    tags: ['FFI', 'bindgen', 'CXX', 'Memory Safety', 'Legacy Migration'],
    details: [
      'Foreign Function Interface (FFI) fundamentals',
      'bindgen for C header bindings',
      'CXX for safe C++ integration',
      'Memory ownership at language boundaries',
      'Incremental migration strategies',
    ],
    programPdfLink: '/pdfs/rust-interop-c.pdf',
  },
  {
    emoji: '🐍',
    key: 'rustInteropPython',
    title: 'Rust Interoperability with Python',
    duration: 'Custom',
    level: 'Intermediate',
    category: 'interop',
    description:
      'Call Rust from Python using PyO3 and FFI, and package extensions with maturin. For Python developers who need performance-critical components without rewriting their entire stack — Rust where it matters, Python where it works.',
    tags: ['PyO3', 'FFI', 'maturin', 'Python Extensions', 'Performance'],
    details: [
      'PyO3 for Rust-Python bindings',
      'FFI patterns and memory safety',
      'maturin build toolchain',
      'Performance-critical extension modules',
      'Python packaging and distribution',
    ],
    programPdfLink: '/pdfs/rust-interop-python.pdf',
  },
  {
    emoji: '✅',
    key: 'tddRust',
    title: 'Test-Driven Development in Rust',
    duration: '3–4 days',
    level: 'Intermediate',
    category: 'rust',
    description:
      'Apply TDD principles in Rust with integrated tooling and CI pipelines. For teams that want robust software processes — not just working code — with automated testing, coverage reporting, and documentation workflows built in from the start.',
    tags: ['TDD', 'cargo test', 'clippy', 'Mocking', 'CI/CD'],
    details: [
      'TDD workflow with cargo test',
      'Unit and integration testing patterns',
      'Mocking and test isolation',
      'clippy and code quality automation',
      'CI/CD pipeline integration',
    ],
    programPdfLink: '/pdfs/tdd-rust.pdf',
  },
  {
    emoji: '🐛',
    key: 'debuggingRust',
    title: 'Debugging in Rust',
    duration: '2–3 days',
    level: 'Advanced',
    category: 'rust',
    description:
      'Confident debugging across the full Rust stack — from logging and stack traces to async deadlocks and embedded hardware. For developers who are writing Rust in production and need to diagnose complex issues fast.',
    tags: ['GDB', 'miri', 'tokio-console', 'tracing', 'probe-rs'],
    details: [
      'GDB and LLDB for Rust debugging',
      'miri for undefined behavior detection',
      'tokio-console for async diagnostics',
      'tracing and structured logging',
      'probe-rs for embedded debugging',
    ],
    programPdfLink: '/pdfs/debugging-rust.pdf',
  },
  {
    emoji: '🧩',
    key: 'wasmRust',
    title: 'WebAssembly with Rust',
    duration: '4–5 days',
    level: 'Intermediate',
    category: 'wasm',
    description:
      'Compile Rust to WebAssembly, integrate with JavaScript, and deploy system-level applications using Wasmtime. For developers building portable, high-performance applications that run at the edge, in the browser, or on any platform.',
    tags: ['WebAssembly', 'WASI', 'Wasmtime', 'JavaScript', 'binaryen'],
    details: [
      'Compiling Rust to WebAssembly',
      'wasm-bindgen for JS integration',
      'WASI and system interface',
      'Wasmtime runtime deployment',
      'Performance optimization techniques',
    ],
    programPdfLink: '/pdfs/wasm-rust.pdf',
  },
  {
    emoji: '📊',
    key: 'performanceRust',
    title: 'Performance Evaluation in Rust',
    duration: '4–5 days',
    level: 'Advanced',
    category: 'rust',
    description:
      'Analyze and systematically improve memory, CPU, and async runtime performance in Rust applications. For high-performance software developers who need to move beyond working code to production-grade efficiency.',
    tags: ['flamegraph', 'criterion', 'tracing', 'Benchmarking', 'Heap Profiling'],
    details: [
      'Profiling with flamegraph and perf',
      'Benchmarking with criterion',
      'Memory profiling and heap analysis',
      'CPU cache optimization strategies',
      'Async runtime performance tuning',
    ],
    programPdfLink: '/pdfs/performance-rust.pdf',
  },
]

const localizedTrainings = computed(() => {
  if (locale.value === 'en') return trainings
  return trainings.map((tr) => {
    const key = tr.key
    if (!key) return tr
    const rawDetails = tm(`trainings.catalog.${key}.details`)
    return {
      ...tr,
      title: t(`trainings.catalog.${key}.title`, tr.title),
      subtitle: tr.subtitle ? t(`trainings.catalog.${key}.subtitle`, tr.subtitle) : undefined,
      description: t(`trainings.catalog.${key}.description`, tr.description),
      details: Array.isArray(rawDetails) ? (rawDetails as string[]) : tr.details,
    }
  })
})

const filteredTrainings = computed(() => {
  return localizedTrainings.value.filter((t) => {
    const matchesCategory = activeCategory.value === 'all' || t.category === activeCategory.value
    const matchesLevel = activeLevel.value === 'All' || t.level === activeLevel.value
    return matchesCategory && matchesLevel
  })
})

const displayedTrainings = computed(() =>
  showAll.value ? filteredTrainings.value : filteredTrainings.value.slice(0, 3),
)
</script>

<template>
  <section id="trainings" ref="sectionRef" class="py-12 md:py-20 bg-white">
    <div class="max-w-[1240px] mx-auto px-6">
      <div
        class="transition-all duration-700 ease-out"
        :class="sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'"
      >
        <UiSectionHeading
          :title="t('trainings.heading')"
          :subtitle="t('trainings.subtitle')"
          align="center"
        />
      </div>

      <!-- Filters -->
      <div
        class="mb-12 transition-all duration-700 ease-out"
        :class="sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'"
        style="transition-delay: 200ms"
      >
        <!-- Category filter -->
        <div class="mb-6">
          <div class="flex items-center gap-2 mb-3">
            <Icon name="lucide:funnel" class="w-5 h-5 text-[#666]" />
            <span class="text-sm font-medium text-[#666]">{{ t('trainings.filters.category') }}</span>
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
            <span class="text-sm font-medium text-[#666]">{{ t('trainings.filters.level') }}</span>
          </div>
          <div class="flex flex-wrap gap-3">
            <UiFilterChip
              v-for="lvl in levels"
              :key="lvl.id"
              :active="activeLevel === lvl.id"
              active-color="orange"
              @click="activeLevel = lvl.id"
            >
              {{ lvl.label }}
            </UiFilterChip>
          </div>
        </div>
      </div>

      <!-- Count -->
      <div class="mb-6">
        <p class="text-sm text-[#666]">{{ t('trainings.showing', { count: filteredTrainings.length }) }}</p>
      </div>

      <!-- Cards grid -->
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <TrainingCard
          v-for="(training, i) in displayedTrainings"
          :key="`${training.title}-${training.subtitle ?? ''}`"
          :training="training"
          :index="i"
          @view-details="openDialog(training)"
        />
      </div>

      <!-- View All -->
      <div v-if="filteredTrainings.length > 3 && !showAll" class="text-center mt-8">
        <button
          class="text-[#999] hover:text-[#666] underline text-sm font-medium transition-colors"
          @click="showAll = true"
        >
          {{ t('trainings.viewAll') }}
        </button>
      </div>
    </div>

    <TrainingDialog
      :training="selectedTraining"
      :open="dialogOpen"
      @close="dialogOpen = false"
    />
  </section>
</template>
