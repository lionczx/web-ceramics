<script setup>
import { ref } from 'vue'

defineProps({
  question: { type: String, required: true },
  answer: { type: String, required: true },
})

const open = ref(false)
</script>

<template>
  <div class="border-b border-[var(--color-border)]">
    <button @click="open = !open" class="w-full flex items-center justify-between py-6 text-left group">
      <span class="text-base font-medium text-[var(--color-text-primary)] group-hover:text-[var(--color-accent)] transition-colors pr-8">{{ question }}</span>
      <span class="shrink-0 w-6 h-6 flex items-center justify-center text-[var(--color-accent)] transition-transform duration-300" :class="open ? 'rotate-45' : ''">
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
          <path d="M12 5v14M5 12h14" />
        </svg>
      </span>
    </button>
    <div class="grid transition-all duration-300 ease-in-out" :style="{ gridTemplateRows: open ? '1fr' : '0fr' }">
      <div class="overflow-hidden">
        <p class="pb-6 text-[var(--color-text-secondary)] leading-relaxed text-sm">{{ answer }}</p>
      </div>
    </div>
  </div>
</template>
