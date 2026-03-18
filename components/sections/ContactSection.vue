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

function handleSubmit() {
  submitted.value = true
}
</script>

<template>
  <section id="contact" class="py-20 bg-[#f9f9f6]">
    <div class="max-w-[1240px] mx-auto px-6">
      <div class="grid md:grid-cols-2 gap-12 items-start">
        <!-- Left: info -->
        <div class="space-y-6">
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
                  :index="i"
                />
              </div>
            </div>
          </div>
        </div>

        <!-- Right: contact form / success -->
        <div class="bg-white rounded-2xl p-8 shadow-xl border border-[#d7d7d7]">
          <Transition name="form-fade" mode="out-in">
            <form v-if="!submitted" key="form" class="space-y-6" @submit.prevent="handleSubmit">
              <div>
                <label class="block text-sm font-medium text-[#1a1a1a] mb-2">{{ t('contact.form.name') }}</label>
                <input
                  v-model="form.name"
                  type="text"
                  required
                  class="w-full px-4 py-3 bg-[#f9f9f6] border border-[#d7d7d7] rounded-lg text-[#1a1a1a] focus:outline-none focus:ring-2 focus:ring-[#f0441a] transition-all"
                />
              </div>
              <div>
                <label class="block text-sm font-medium text-[#1a1a1a] mb-2">{{ t('contact.form.email') }}</label>
                <input
                  v-model="form.email"
                  type="email"
                  required
                  class="w-full px-4 py-3 bg-[#f9f9f6] border border-[#d7d7d7] rounded-lg text-[#1a1a1a] focus:outline-none focus:ring-2 focus:ring-[#f0441a] transition-all"
                />
              </div>
              <div>
                <label class="block text-sm font-medium text-[#1a1a1a] mb-2">{{ t('contact.form.company') }}</label>
                <input
                  v-model="form.company"
                  type="text"
                  required
                  class="w-full px-4 py-3 bg-[#f9f9f6] border border-[#d7d7d7] rounded-lg text-[#1a1a1a] focus:outline-none focus:ring-2 focus:ring-[#f0441a] transition-all"
                />
              </div>
              <div>
                <label class="block text-sm font-medium text-[#1a1a1a] mb-2">{{ t('contact.form.message') }}</label>
                <textarea
                  v-model="form.message"
                  required
                  rows="5"
                  class="w-full px-4 py-3 bg-[#f9f9f6] border border-[#d7d7d7] rounded-lg text-[#1a1a1a] focus:outline-none focus:ring-2 focus:ring-[#f0441a] transition-all resize-none"
                />
              </div>
              <button
                type="submit"
                class="w-full px-6 py-4 bg-[#f0441a] text-white rounded-lg font-medium flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-all"
              >
                {{ t('contact.form.submit') }}
                <Icon name="lucide:send" class="w-5 h-5" />
              </button>
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
