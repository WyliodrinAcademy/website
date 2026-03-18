<template>
  <section class="flex items-center bg-gradient-to-br from-[#f9f9f6] via-white to-[#f9f9f6] pt-20">
    <div class="max-w-[1240px] mx-auto px-6 py-12 md:py-20 w-full">
      <div class="grid md:grid-cols-2 gap-12 items-center">
        <!-- Left: text content -->
        <div class="space-y-6">
          <!-- Qualiopi badge -->
          <div class="inline-block px-4 py-2 bg-[#560d08] rounded-full">
            <span class="text-white text-sm font-medium">🎯 Qualiopi Certified</span>
          </div>

          <!-- Heading -->
          <h1
            class="text-4xl md:text-5xl lg:text-6xl font-bold text-[#560d08] leading-tight"
            style="font-family: 'Space Grotesk', sans-serif"
          >
            Master Rust, WebAssembly &amp; Embedded Systems
          </h1>

          <!-- Subtitle -->
          <p class="text-lg md:text-xl text-[#666] leading-relaxed max-w-xl">
            B2B training excellence with Qualiopi certification. Build safer, faster systems with industry-leading experts.
          </p>

          <!-- CTA buttons -->
          <div class="flex flex-wrap gap-4 pt-4">
            <UiButton variant="primary">
              Explore Trainings
              <Icon name="lucide:arrow-right" class="w-5 h-5" />
            </UiButton>
            <UiButton variant="outline">
              Talk to Us
              <Icon name="lucide:message-circle" class="w-5 h-5" />
            </UiButton>
          </div>

          <!-- Tech pills -->
          <div class="flex flex-wrap gap-2 pt-8">
            <span
              v-for="tech in ['Rust', 'WebAssembly', 'Embedded', 'IoT', 'Real-Time']"
              :key="tech"
              class="px-3 py-1 bg-white border border-[#d7d7d7] rounded-full text-sm text-[#666] font-mono"
            >
              {{ tech }}
            </span>
          </div>
        </div>

        <!-- Right: placeholder (Figma image not available) -->
        <div class="relative h-[400px] md:h-[600px] hidden md:block" />
      </div>
    </div>
  </section>
</template>
