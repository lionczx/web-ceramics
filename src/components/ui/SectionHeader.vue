<script setup>
defineProps({
  en: { type: String, default: '' },
  cn: { type: String, required: true },
  desc: { type: String, default: '' },
  align: { type: String, default: 'center' },
})
</script>

<template>
  <div :class="['mb-16 lg:mb-20', align === 'center' ? 'text-center' : 'text-left']">
    <!-- Decorative cloud / dot -->
    <div v-if="align === 'center'" class="flex items-center justify-center gap-3 mb-4">
      <span class="w-8 h-[1px] bg-[var(--color-gold)]"></span>
      <span class="text-[var(--color-gold)] text-xs">◆</span>
      <span class="w-8 h-[1px] bg-[var(--color-gold)]"></span>
    </div>

    <!-- Brush calligraphy title -->
    <h2 class="font-brush text-[clamp(2.2rem,6vw,4rem)] leading-tight text-[var(--color-text-primary)]">{{ cn }}</h2>

    <!-- Gold English subtitle -->
    <p v-if="en" class="font-serif-cn text-xs tracking-[0.4em] text-[var(--color-gold-dark)] mt-3 uppercase">{{ en }}</p>

    <!-- Description -->
    <p v-if="desc" class="mt-4 text-[var(--color-text-secondary)] max-w-lg leading-relaxed text-sm" :class="align === 'center' ? 'mx-auto' : ''">{{ desc }}</p>

    <!-- Bottom decoration -->
    <div v-if="align === 'center'" class="flex items-center justify-center gap-3 mt-5">
      <span class="w-12 h-[1px] bg-[var(--color-accent)]/30"></span>
      <span class="text-[var(--color-accent)]/40 text-[10px]">◆</span>
      <span class="w-12 h-[1px] bg-[var(--color-accent)]/30"></span>
    </div>
  </div>
</template>
