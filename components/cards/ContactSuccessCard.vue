<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
  <div class="flex flex-col items-center justify-center py-16 text-center gap-5">
    <div class="success-icon w-20 h-20 rounded-full bg-[#22c55e] flex items-center justify-center">
      <Icon name="lucide:check" class="w-10 h-10 text-white" style="stroke-width: 3" />
    </div>
    <div>
      <h3 class="text-2xl font-bold text-[#1a1a1a] mb-2" style="font-family: 'Space Grotesk', sans-serif">
        {{ t('contact.success.title') }}
      </h3>
      <p class="text-[#666]">{{ t('contact.success.body') }}</p>
    </div>
  </div>
</template>

<style scoped>
@keyframes pop-in {
  from { transform: scale(0.4); opacity: 0; }
  to   { transform: scale(1);   opacity: 1; }
}

.success-icon {
  animation: pop-in 0.45s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
}
</style>
