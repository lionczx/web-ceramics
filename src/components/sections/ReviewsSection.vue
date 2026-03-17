<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { reviews } from '../../data/reviews.js'
import RevealOnScroll from '../ui/RevealOnScroll.vue'

const current = ref(0)
let timer = null

function next() {
  current.value = (current.value + 1) % reviews.length
}

onMounted(() => { timer = setInterval(next, 5000) })
onUnmounted(() => clearInterval(timer))

function goTo(i) {
  current.value = i
  clearInterval(timer)
  timer = setInterval(next, 5000)
}
</script>

<template>
  <section id="reviews" class="py-24 lg:py-32 bg-[var(--color-bg-primary)] overflow-hidden">
    <div class="max-w-4xl mx-auto px-6 lg:px-10 text-center">
      <RevealOnScroll>
        <div class="relative">
          <!-- Section label -->
          <div class="flex items-center justify-center gap-3 mb-4">
            <span class="w-8 h-[1px] bg-[var(--color-gold)]"></span>
            <span class="text-[var(--color-gold)] text-xs">◆</span>
            <span class="w-8 h-[1px] bg-[var(--color-gold)]"></span>
          </div>
          <h2 class="font-brush text-[clamp(2rem,5vw,3.5rem)] text-[var(--color-text-primary)] mb-2">学员心声</h2>
          <p class="font-serif-cn text-xs tracking-[0.4em] text-[var(--color-gold-dark)] uppercase">TESTIMONIALS</p>

          <!-- Decorative large quote mark -->
          <div class="absolute -top-6 left-1/2 -translate-x-1/2 font-brush text-[10rem] leading-none text-[var(--color-accent)]/5 select-none pointer-events-none">"</div>

          <!-- Review content -->
          <div class="relative min-h-[200px] flex items-center justify-center mt-12">
            <transition
              enter-active-class="transition-all duration-500"
              enter-from-class="opacity-0 translate-y-4"
              enter-to-class="opacity-100 translate-y-0"
              leave-active-class="transition-all duration-300 absolute inset-0"
              leave-from-class="opacity-100"
              leave-to-class="opacity-0 -translate-y-4"
              mode="out-in">
              <div :key="current" class="space-y-6">
                <p class="font-serif-cn text-lg lg:text-xl text-[var(--color-text-primary)] leading-[1.9] max-w-2xl mx-auto">
                  "{{ reviews[current].text }}"
                </p>
                <div>
                  <p class="text-[var(--color-text-primary)] font-medium">{{ reviews[current].name }}</p>
                  <p class="text-xs text-[var(--color-accent)] mt-1">{{ reviews[current].course }}</p>
                </div>
              </div>
            </transition>
          </div>

          <!-- Avatar indicators -->
          <div class="flex justify-center gap-3 mt-10">
            <button v-for="(review, i) in reviews" :key="review.id" @click="goTo(i)"
              class="w-10 h-10 overflow-hidden border-2 transition-all duration-300 hover:scale-110 rounded-sm"
              :class="i === current ? 'border-[var(--color-accent)] scale-110' : 'border-[var(--color-border)] opacity-50'">
              <img :src="review.avatar" :alt="review.name" class="w-full h-full object-cover" />
            </button>
          </div>
        </div>
      </RevealOnScroll>
    </div>
  </section>
</template>
