<template>
  <section class="flex items-center bg-linear-to-br from-[#f9f9f6] via-white to-[#f9f9f6] pt-20">
    <div class="max-w-310 mx-auto px-6 py-12 md:py-20 w-full">
      <div class="grid md:grid-cols-2 gap-12 items-center">
        <!-- Left: text content -->
        <div class="hero-slide-left space-y-6">
          <!-- Qualiopi badge -->
          <div class="hero-fade-up hero-delay-100 inline-block px-4 py-2 bg-[#560d08] rounded-full">
            <span class="text-white text-sm font-medium">🎯 Qualiopi Certified</span>
          </div>

          <!-- Heading -->
          <h1
            class="hero-fade-up hero-delay-200 text-4xl md:text-5xl lg:text-6xl font-bold text-[#560d08] leading-tight"
            style="font-family: 'Space Grotesk', sans-serif"
          >
            Master Rust, WebAssembly &amp; Embedded Systems
          </h1>

          <!-- Subtitle -->
          <p class="hero-fade-up hero-delay-350 text-lg md:text-xl text-[#666] leading-relaxed max-w-xl">
            B2B training excellence with Qualiopi certification. Build safer, faster systems with
            industry-leading experts.
          </p>

          <!-- CTA buttons -->
          <div class="hero-fade-up hero-delay-500 flex flex-wrap gap-4 pt-4">
            <UiButton as="a" href="#trainings" variant="primary">
              Explore Trainings
              <Icon name="lucide:arrow-right" class="w-5 h-5" />
            </UiButton>
            <UiButton as="a" href="#contact" variant="outline">
              Talk to Us
              <Icon name="lucide:message-circle" class="w-5 h-5" />
            </UiButton>
          </div>

          <!-- Tech pills -->
          <div class="hero-fade-in hero-delay-600 flex flex-wrap gap-2 pt-8">
            <span
              v-for="(tech, index) in ['Rust', 'WebAssembly', 'Embedded', 'IoT', 'Real-Time']"
              :key="tech"
              class="hero-pop-in px-3 py-1 bg-white border border-[#d7d7d7] rounded-full text-sm text-[#666] font-mono"
              :style="{ animationDelay: (650 + index * 100) + 'ms' }"
            >
              {{ tech }}
            </span>
          </div>
        </div>

        <!-- Right: placeholder (Figma image not available) -->
        <div class="hero-slide-right relative h-100 md:h-150 hidden md:block" />
      </div>
    </div>
  </section>
</template>

<style scoped>
@keyframes heroSlideInLeft {
  from { opacity: 0; transform: translateX(-45px); }
  to   { opacity: 1; transform: translateX(0); }
}
@keyframes heroFadeUp {
  from { opacity: 0; transform: translateY(20px); }
  to   { opacity: 1; transform: translateY(0); }
}
@keyframes heroFadeIn {
  from { opacity: 0; }
  to   { opacity: 1; }
}
@keyframes heroPopIn {
  from { opacity: 0; transform: scale(0.8); }
  to   { opacity: 1; transform: scale(1); }
}
@keyframes heroSlideInRight {
  from { opacity: 0; transform: translateX(50px); }
  to   { opacity: 1; transform: translateX(0); }
}

.hero-slide-left {
  animation: heroSlideInLeft 700ms cubic-bezier(0.4, 0, 0.2, 1) both;
}
.hero-fade-up {
  animation: heroFadeUp 600ms cubic-bezier(0.4, 0, 0.2, 1) both;
}
.hero-fade-in {
  animation: heroFadeIn 400ms cubic-bezier(0.4, 0, 0.2, 1) both;
}
.hero-pop-in {
  animation: heroPopIn 400ms cubic-bezier(0.4, 0, 0.2, 1) both;
}
.hero-slide-right {
  animation: heroSlideInRight 700ms cubic-bezier(0.4, 0, 0.2, 1) 150ms both;
}

.hero-delay-100 { animation-delay: 100ms; }
.hero-delay-200 { animation-delay: 200ms; }
.hero-delay-350 { animation-delay: 350ms; }
.hero-delay-500 { animation-delay: 500ms; }
.hero-delay-600 { animation-delay: 600ms; }
</style>
