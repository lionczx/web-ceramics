<script setup>
import { ref } from 'vue'
import { courses } from '../../data/courses.js'
import SectionHeader from '../ui/SectionHeader.vue'
import RevealOnScroll from '../ui/RevealOnScroll.vue'

const emit = defineEmits(['openBooking'])

const scrollContainer = ref(null)
let isDragging = false
let startX = 0
let scrollLeft = 0

function onPointerDown(e) {
  isDragging = true
  startX = e.pageX - scrollContainer.value.offsetLeft
  scrollLeft = scrollContainer.value.scrollLeft
  scrollContainer.value.style.cursor = 'grabbing'
}
function onPointerMove(e) {
  if (!isDragging) return
  e.preventDefault()
  const x = e.pageX - scrollContainer.value.offsetLeft
  scrollContainer.value.scrollLeft = scrollLeft - (x - startX)
}
function onPointerUp() {
  isDragging = false
  if (scrollContainer.value) scrollContainer.value.style.cursor = 'grab'
}
</script>

<template>
  <section id="courses" class="py-24 lg:py-32 bg-[var(--color-bg-secondary)] ink-wash">
    <div class="max-w-7xl mx-auto px-6 lg:px-10">
      <RevealOnScroll>
        <SectionHeader en="WORKSHOPS" cn="课程体验" desc="无论你是初次接触陶艺，还是希望深入研习，都有适合你的课程" />
      </RevealOnScroll>
    </div>

    <!-- Horizontal scroll cards -->
    <div class="relative">
      <div
        ref="scrollContainer"
        @pointerdown="onPointerDown"
        @pointermove="onPointerMove"
        @pointerup="onPointerUp"
        @pointerleave="onPointerUp"
        class="flex gap-6 overflow-x-auto px-6 lg:px-10 pb-4 cursor-grab snap-x snap-mandatory"
        style="scrollbar-width: none; -ms-overflow-style: none;">
        <div class="shrink-0 w-[calc((100vw-80px)/2-12px)] lg:w-[calc((100vw-80px)/4-18px)] max-w-[280px]"></div>
        <div
          v-for="course in courses"
          :key="course.title"
          class="shrink-0 w-[280px] snap-center group">
          <div class="bg-[var(--color-bg-card)] h-[440px] flex flex-col overflow-hidden border border-[var(--color-border)] hover:border-[var(--color-accent)]/30 hover:-translate-y-2 transition-all duration-500 relative"
            :class="course.popular ? 'border-l-3 border-l-[var(--color-accent)]' : ''">
            <!-- Popular stamp -->
            <div v-if="course.popular" class="absolute top-3 right-3 z-10 stamp text-[10px] px-1.5 py-0.5 bg-[var(--color-bg-card)]">荐</div>

            <!-- Image -->
            <div class="h-[180px] overflow-hidden">
              <img :src="course.image" :alt="course.title" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
            </div>

            <!-- Content -->
            <div class="p-5 flex flex-col flex-1">
              <span class="text-xs text-[var(--color-gold-dark)] font-medium mb-2">{{ course.level }}</span>
              <h3 class="font-serif-cn text-lg font-bold text-[var(--color-text-primary)] mb-2">{{ course.title }}</h3>
              <p class="text-sm text-[var(--color-text-secondary)] leading-relaxed flex-1 line-clamp-3">{{ course.desc }}</p>

              <div class="flex items-end justify-between mt-4 pt-4 border-t border-[var(--color-border)]">
                <div>
                  <span class="text-xl font-bold text-[var(--color-accent)] font-serif-cn">{{ course.price }}</span>
                  <span class="text-xs text-[var(--color-text-light)] ml-1">/{{ course.duration }}</span>
                </div>
                <button @click="emit('openBooking', course.title)"
                  class="px-4 py-2 bg-[var(--color-accent)] text-white text-xs rounded-sm hover:bg-[var(--color-accent-dark)] transition-all active:scale-95">
                  立即预约
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="shrink-0 w-6"></div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.scrollbar-hide::-webkit-scrollbar { display: none; }
div[ref="scrollContainer"]::-webkit-scrollbar { display: none; }
</style>
