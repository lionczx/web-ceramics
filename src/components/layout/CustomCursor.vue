<script setup>
import { useCursorEffect } from '../../composables/useCursorEffect.js'
const { cursorX, cursorY, cursorVisible, isDesktop } = useCursorEffect()
</script>

<template>
  <div v-if="isDesktop" class="pointer-events-none fixed inset-0 z-[200]">
    <!-- Ink dot -->
    <div
      class="absolute w-2 h-2 rounded-full bg-[var(--color-accent)] -translate-x-1/2 -translate-y-1/2 transition-opacity duration-200 mix-blend-multiply"
      :class="cursorVisible ? 'opacity-80' : 'opacity-0'"
      :style="{ left: cursorX + 'px', top: cursorY + 'px' }">
    </div>
  </div>
</template>
