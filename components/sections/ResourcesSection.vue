<script setup lang="ts">
const { t, locale } = useI18n()
const asset = usePublicUrl()

const tabs = computed(() => [
  { id: 'public', label: t('resources.tabs.public'), icon: 'lucide:file-text' },
  { id: 'compliance', label: t('resources.tabs.compliance'), icon: 'lucide:circle-check-big' },
])

const activeTab = ref('public')
const search = ref('')
const animKey = ref(0)

function switchTab(id: string) {
  activeTab.value = id
  animKey.value++
}

// Watch locale changes to re-trigger entry animation
watch(locale, () => { animKey.value++ })

type ResourceCard = { category: string; title: string; description: string; href: string }

const cardData: Record<string, Record<string, ResourceCard[]>> = {
  public: {
    en: [
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
    ],
    fr: [
      {
        category: 'Documentation',
        title: 'Le Livre du Langage Rust',
        description: 'Guide officiel complet pour apprendre le langage de programmation Rust.',
        href: 'https://doc.rust-lang.org/book/',
      },
      {
        category: 'Documentation',
        title: 'WebAssembly sur MDN',
        description: 'Documentation et tutoriels WebAssembly complets de Mozilla.',
        href: 'https://developer.mozilla.org/en-US/docs/WebAssembly',
      },
      {
        category: 'Documentation',
        title: 'Livre Rust Embarqué',
        description: 'Apprenez à utiliser Rust pour le développement de systèmes embarqués.',
        href: 'https://docs.rust-embedded.org/book/',
      },
      {
        category: 'Labs & Code',
        title: 'Dépôts GitHub Wyliodrin',
        description: "Accédez à nos projets open-source, labs et matériels d'apprentissage.",
        href: 'https://github.com/wyliodrin',
      },
    ],
  },
  compliance: {
    en: [
      {
        category: 'Compliance',
        title: 'Qualiopi Certification',
        description: 'Our Qualiopi certification documents and quality standards.',
        href: asset('/quality/qualiopi-certification.pdf'),
      },
      {
        category: 'Compliance',
        title: 'Training Regulations',
        description: 'Internal regulations for training participants.',
        href: asset('/quality/regulations.pdf'),
      },
      {
        category: 'Compliance',
        title: 'Quality Assurance Process',
        description: 'Our quality assurance methodology and continuous improvement process.',
        href: asset('/quality/qa-process.pdf'),
      },
    ],
    fr: [
      {
        category: 'Conformité',
        title: 'Certification Qualiopi',
        description: 'Nos documents de certification Qualiopi et normes de qualité.',
        href: '/quality/qualiopi-certification.pdf',
      },
      {
        category: 'Conformité',
        title: 'Règlement Intérieur',
        description: 'Règlement intérieur pour les participants aux formations.',
        href: '/quality/regulations.pdf',
      },
      {
        category: 'Conformité',
        title: "Processus d'Assurance Qualité",
        description: "Notre méthodologie d'assurance qualité et processus d'amélioration continue.",
        href: '/quality/qa-process.pdf',
      },
    ],
  },
}

// Per-element IntersectionObservers
const headingRef = ref<HTMLElement>()
const headingVisible = ref(false)

const tabsRef = ref<HTMLElement>()
const tabsVisible = ref(false)

const searchRef = ref<HTMLElement>()
const searchVisible = ref(false)

function makeIO(el: HTMLElement | undefined, setter: () => void, threshold = 0.5) {
  if (!el) return
  const io = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) { setter(); io.disconnect() }
    },
    { threshold },
  )
  io.observe(el)
}

onMounted(() => {
  makeIO(headingRef.value, () => { headingVisible.value = true })
  makeIO(tabsRef.value,    () => { tabsVisible.value    = true })
  makeIO(searchRef.value,  () => { searchVisible.value  = true })
})

const activeResources = computed(() => {
  const lang = locale.value === 'fr' ? 'fr' : 'en'
  return cardData[activeTab.value]?.[lang] ?? []
})

const filteredResources = computed(() => {
  const q = search.value.trim().toLowerCase()
  if (!q) return activeResources.value
  return activeResources.value.filter(
    r => r.title.toLowerCase().includes(q) || r.description.toLowerCase().includes(q),
  )
})
</script>

<template>
  <section id="resources" class="py-20 bg-white">
    <div class="max-w-[1240px] mx-auto px-6">
      <!-- Heading -->
      <div
        ref="headingRef"
        class="transition-all duration-500 ease-out"
        :class="headingVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'"
      >
        <UiSectionHeading
          :title="t('resources.title')"
          :subtitle="t('resources.subtitle')"
          align="center"
        />
      </div>

      <!-- Tab filters -->
      <div
        ref="tabsRef"
        class="mb-8 transition-all duration-500 ease-out"
        :class="tabsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'"
      >
        <div class="flex flex-wrap gap-3 justify-center">
          <button
            v-for="tab in tabs"
            :key="tab.id"
            :class="[
              'px-6 py-3 rounded-xl font-semibold transition-all flex items-center gap-2',
              activeTab === tab.id
                ? 'bg-[#560d08] text-white shadow-lg'
                : 'bg-[#f9f9f6] text-[#666] hover:bg-[#f5f5f5] border border-[#d7d7d7]',
            ]"
            @click="switchTab(tab.id)"
          >
            <Icon :name="tab.icon" class="w-5 h-5" />
            {{ tab.label }}
          </button>
        </div>
      </div>

      <!-- Search -->
      <div
        ref="searchRef"
        class="mb-8 max-w-2xl mx-auto transition-all duration-500 ease-out"
        :class="searchVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'"
      >
        <div class="relative">
          <Icon name="lucide:search" class="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#666]" />
          <input
            v-model="search"
            type="text"
            :placeholder="t('resources.search')"
            class="w-full pl-12 pr-4 py-4 bg-[#f9f9f6] border border-[#d7d7d7] rounded-xl
                   text-[#1a1a1a] focus:outline-none focus:ring-2 focus:ring-[#f0441a] transition-all"
          />
        </div>
      </div>

      <!-- Resource cards grid -->
      <div class="grid md:grid-cols-2 gap-6">
        <ResourceCard
          v-for="(res, i) in filteredResources"
          :key="`${animKey}-${activeTab}-${i}`"
          :category="res.category"
          :title="res.title"
          :description="res.description"
          :href="res.href"
          :delay="i * 100"
        />
      </div>

      <!-- Empty state -->
      <p v-if="filteredResources.length === 0" class="text-center text-[#666] py-12">
        {{ t('resources.noResults') }}
      </p>
    </div>
  </section>
</template>
