<script setup lang="ts">
const { t, locale } = useI18n()

const animationKey = ref(0)
watch(locale, () => { animationKey.value++ })

const perks = computed(() => [
  { emoji: '📧', title: t('contact.perks.email.title'),     subtitle: t('contact.perks.email.subtitle') },
  { emoji: '🎯', title: t('contact.perks.solutions.title'), subtitle: t('contact.perks.solutions.subtitle') },
  { emoji: '🏆', title: t('contact.perks.quality.title'),   subtitle: t('contact.perks.quality.subtitle') },
])

const form = reactive({
  name: '',
  email: '',
  company: '',
  message: '',
})

const submitted = ref(false)
const loading = ref(false)
const error = ref('')
const honeypot = ref('')

async function handleSubmit() {
  if (loading.value) return
  if (honeypot.value !== '') return

  loading.value = true
  error.value = ''

  const controller = new AbortController()
  const timeoutId = setTimeout(() => controller.abort(), 10_000)

  try {
    const res = await fetch('https://formsubmit.co/ajax/andrei.serban@wyliodrin.com', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
      signal: controller.signal,
      body: JSON.stringify({
        name: form.name,
        email: form.email,
        company: form.company,
        message: form.message,
        _subject: 'New enquiry — Wyliodrin Academy',
      }),
    })
    const data = await res.json()
    if (data.success === 'true' || data.success === true) {
      submitted.value = true
    }
    else {
      error.value = t('contact.form.error')
    }
  }
  catch {
    error.value = t('contact.form.error')
  }
  finally {
    clearTimeout(timeoutId)
    loading.value = false
  }
}

// Scroll-triggered entrance animations
const leftRef = ref<HTMLElement>()
const leftVisible = ref(false)

const formRef = ref<HTMLElement>()
const formVisible = ref(false)

onMounted(() => {
  const observe = (el: HTMLElement | undefined, setter: () => void) => {
    if (!el) return
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) { setter(); io.disconnect() }
      },
      { threshold: 0.2 },
    )
    io.observe(el)
  }
  observe(leftRef.value,  () => { leftVisible.value  = true })
  observe(formRef.value,  () => { formVisible.value  = true })
})
</script>

<template>
  <section id="contact" class="py-20 bg-[#f9f9f6]">
    <div class="max-w-[1240px] mx-auto px-6">
      <div class="grid md:grid-cols-2 gap-12 items-start">
        <!-- Left: info -->
        <div
          ref="leftRef"
          class="space-y-6 transition-all duration-500 ease-out"
          :class="leftVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'"
        >
          <div>
            <h2 class="text-4xl font-bold text-[#f92d04] mb-4" style="font-family: 'Space Grotesk', sans-serif">
              {{ t('contact.heading') }}
            </h2>
            <p class="text-xl text-[#666]">{{ t('contact.subtitle') }}</p>
          </div>

          <!-- Gradient blob + perk cards -->
          <div class="relative">
            <div class="relative w-full aspect-square max-w-md">
              <!-- Animated blobs -->
              <div class="absolute inset-0 bg-gradient-to-br from-[#f0441a]/10 to-[#560d08]/10 rounded-full blur-2xl animate-pulse" />
              <div class="absolute inset-0 bg-gradient-to-tl from-[#66f2e3]/20 to-[#f0441a]/20 rounded-full blur-2xl animate-pulse" style="animation-delay: 1s" />
              <!-- Cards -->
              <div class="relative z-10 space-y-4 mt-8">
                <ContactInfoCard
                  v-for="(perk, i) in perks"
                  :key="`${animationKey}-${perk.emoji}`"
                  :emoji="perk.emoji"
                  :title="perk.title"
                  :subtitle="perk.subtitle"
                  :delay="i * 150"
                />
              </div>
            </div>
          </div>
        </div>

        <!-- Right: contact form / success -->
        <div
          ref="formRef"
          class="bg-white rounded-2xl p-8 shadow-xl border border-[#d7d7d7] transition-all duration-500 ease-out"
          :class="formVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'"
        >
          <Transition name="form-fade" mode="out-in">
            <form v-if="!submitted" key="form" class="space-y-6" @submit.prevent="handleSubmit">
              <div>
                <label class="block text-sm font-semibold text-[#1a1a1a] mb-2">{{ t('contact.form.name') }}</label>
                <input
                  v-model="form.name"
                  type="text"
                  required
                  class="w-full px-4 py-3 bg-[#f9f9f6] border border-[#d7d7d7] rounded-lg text-[#1a1a1a] focus:outline-none focus:ring-2 focus:ring-[#f0441a] transition-all"
                />
              </div>
              <div>
                <label class="block text-sm font-semibold text-[#1a1a1a] mb-2">{{ t('contact.form.email') }}</label>
                <input
                  v-model="form.email"
                  type="email"
                  required
                  class="w-full px-4 py-3 bg-[#f9f9f6] border border-[#d7d7d7] rounded-lg text-[#1a1a1a] focus:outline-none focus:ring-2 focus:ring-[#f0441a] transition-all"
                />
              </div>
              <div>
                <label class="block text-sm font-semibold text-[#1a1a1a] mb-2">{{ t('contact.form.company') }}</label>
                <input
                  v-model="form.company"
                  type="text"
                  required
                  class="w-full px-4 py-3 bg-[#f9f9f6] border border-[#d7d7d7] rounded-lg text-[#1a1a1a] focus:outline-none focus:ring-2 focus:ring-[#f0441a] transition-all"
                />
              </div>
              <div>
                <label class="block text-sm font-semibold text-[#1a1a1a] mb-2">{{ t('contact.form.message') }}</label>
                <textarea
                  v-model="form.message"
                  required
                  rows="5"
                  maxlength="2000"
                  class="w-full px-4 py-3 bg-[#f9f9f6] border border-[#d7d7d7] rounded-lg text-[#1a1a1a] focus:outline-none focus:ring-2 focus:ring-[#f0441a] transition-all resize-none"
                />
              </div>

              <!-- Honeypot: visually hidden, bots fill it, humans don't -->
              <input
                v-model="honeypot"
                type="text"
                name="fax"
                tabindex="-1"
                autocomplete="off"
                aria-hidden="true"
                style="position:absolute;left:-9999px;opacity:0;pointer-events:none;"
              />

              <button
                type="submit"
                :disabled="loading"
                class="w-full px-6 py-4 bg-[#f0441a] text-white rounded-lg font-semibold flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-all disabled:opacity-70 disabled:cursor-not-allowed"
              >
                <template v-if="loading">
                  <Icon name="lucide:loader-circle" class="w-5 h-5 animate-spin" />
                </template>
                <template v-else>
                  {{ t('contact.form.submit') }}
                  <Icon name="lucide:send" class="w-5 h-5" />
                </template>
              </button>

              <p v-if="error" class="text-sm text-[#f92d04] text-center -mt-2">
                {{ error }}
              </p>
            </form>

            <ContactSuccessCard v-else key="success" />
          </Transition>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.form-fade-enter-active,
.form-fade-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}
.form-fade-enter-from {
  opacity: 0;
  transform: translateY(12px);
}
.form-fade-leave-to {
  opacity: 0;
  transform: translateY(-12px);
}
</style>
