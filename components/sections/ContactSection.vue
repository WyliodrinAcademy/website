<script setup lang="ts">
const perks = [
  { emoji: '📧', title: 'Email Response', subtitle: '< 24 hours' },
  { emoji: '🎯', title: 'Custom Solutions', subtitle: 'For your team' },
  { emoji: '🏆', title: 'Quality Certified', subtitle: 'Qualiopi' },
]

const form = reactive({
  name: '',
  email: '',
  company: '',
  message: '',
})
</script>

<template>
  <section id="contact" class="py-20 bg-[#f9f9f6]">
    <div class="max-w-[1240px] mx-auto px-6">
      <div class="grid md:grid-cols-2 gap-12 items-start">
        <!-- Left: info -->
        <div class="space-y-6">
          <div>
            <h2 class="text-4xl font-bold text-[#f92d04] mb-4" style="font-family: 'Space Grotesk', sans-serif">
              Get in Touch
            </h2>
            <p class="text-xl text-[#666]">Let's discuss how we can help your team grow</p>
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
                  v-for="perk in perks"
                  :key="perk.title"
                  :emoji="perk.emoji"
                  :title="perk.title"
                  :subtitle="perk.subtitle"
                />
              </div>
            </div>
          </div>
        </div>

        <!-- Right: contact form -->
        <div class="bg-white rounded-2xl p-8 shadow-xl border border-[#d7d7d7]">
          <form class="space-y-6" @submit.prevent>
            <div>
              <label class="block text-sm font-medium text-[#1a1a1a] mb-2">Full Name</label>
              <input
                v-model="form.name"
                type="text"
                required
                class="w-full px-4 py-3 bg-[#f9f9f6] border border-[#d7d7d7] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f0441a] transition-all"
              />
            </div>
            <div>
              <label class="block text-sm font-medium text-[#1a1a1a] mb-2">Email Address</label>
              <input
                v-model="form.email"
                type="email"
                required
                class="w-full px-4 py-3 bg-[#f9f9f6] border border-[#d7d7d7] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f0441a] transition-all"
              />
            </div>
            <div>
              <label class="block text-sm font-medium text-[#1a1a1a] mb-2">Company Name</label>
              <input
                v-model="form.company"
                type="text"
                required
                class="w-full px-4 py-3 bg-[#f9f9f6] border border-[#d7d7d7] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f0441a] transition-all"
              />
            </div>
            <div>
              <label class="block text-sm font-medium text-[#1a1a1a] mb-2">Message</label>
              <textarea
                v-model="form.message"
                required
                rows="5"
                class="w-full px-4 py-3 bg-[#f9f9f6] border border-[#d7d7d7] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f0441a] transition-all resize-none"
              />
            </div>
            <button
              type="submit"
              class="w-full px-6 py-4 bg-[#f0441a] text-white rounded-lg font-medium flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-all"
            >
              Send Message
              <Icon name="lucide:send" class="w-5 h-5" />
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>
