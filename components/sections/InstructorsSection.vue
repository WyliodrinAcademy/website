<template>
  <section id="instructors" class="py-20 bg-[#f9f9f6]">
    <div class="max-w-[1240px] mx-auto px-6">
      <UiSectionHeading
        title="Meet Our Experts"
        subtitle="Learn from industry-leading professionals with real-world experience"
        align="center"
      />

      <div class="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <InstructorCard
          name="Alexandru Radovici"
          role="Lead Rust & Embedded Systems Expert"
          bio="Alexandru is a renowned expert in Rust programming and embedded systems with over 15 years of experience. He has led multiple large-scale projects in IoT and real-time systems."
        />
        <InstructorCard
          name="Ioana Culic"
          role="WebAssembly & Rust Specialist"
          bio="Ioana specializes in WebAssembly and modern web technologies. She has extensive experience in building high-performance web applications and training developers worldwide."
        />
      </div>
    </div>
  </section>
</template>
