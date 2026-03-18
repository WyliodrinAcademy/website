<script setup lang="ts">
const stats = [
  { icon: 'lucide:book-open', value: '150+', label: 'Trainings Delivered' },
  { icon: 'lucide:award', value: '98%', label: 'Satisfaction Rate' },
  { icon: 'lucide:users', value: '2,500+', label: 'Students Trained' },
  { icon: 'lucide:building-2', value: '75+', label: 'Companies Served' },
]

// Triplicate for seamless infinite marquee
const ticker = [...stats, ...stats, ...stats]
</script>

<template>
  <section class="py-16 bg-gradient-to-br from-[#560d08] to-[#ba321f] text-white relative overflow-hidden">
    <!-- Background blobs -->
    <div class="absolute inset-0 opacity-10">
      <div class="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl" />
      <div class="absolute bottom-0 right-0 w-96 h-96 bg-[#66f2e3] rounded-full blur-3xl" />
    </div>

    <div class="relative z-10">
      <!-- Heading -->
      <div class="text-center mb-12 px-6">
        <h2 class="text-4xl font-bold mb-4" style="font-family: 'Space Grotesk', sans-serif">Our Impact</h2>
        <p class="text-xl text-white/90 max-w-3xl mx-auto">Measurable results from our training programs</p>
      </div>

      <!-- Marquee ticker -->
      <div class="relative overflow-hidden">
        <div class="marquee-track flex gap-8 whitespace-nowrap">
          <StatCard
            v-for="(stat, i) in ticker"
            :key="i"
            :icon="stat.icon"
            :value="stat.value"
            :label="stat.label"
          />
        </div>
      </div>

      <!-- CTA -->
      <div class="text-center mt-12 px-6">
        <p class="text-lg text-white/90 mb-6">Join hundreds of developers who have transformed their careers</p>
        <UiButton variant="ghost">Start Your Journey</UiButton>
      </div>
    </div>
  </section>
</template>

<style scoped>
.marquee-track {
  animation: marquee 30s linear infinite;
}

@keyframes marquee {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-33.333%);
  }
}
</style>
