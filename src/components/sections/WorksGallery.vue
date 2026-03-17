<script setup>
import { ref, computed } from 'vue'
import { works, categories } from '../../data/works.js'
import SectionHeader from '../ui/SectionHeader.vue'
import RevealOnScroll from '../ui/RevealOnScroll.vue'

const selectedCategory = ref('全部')

const filteredWorks = computed(() => {
  if (selectedCategory.value === '全部') return works
  return works.filter((w) => w.category === selectedCategory.value)
})
</script>

<template>
  <section id="works" class="py-24 lg:py-32 bg-[var(--color-bg-primary)]">
    <div class="max-w-7xl mx-auto px-6 lg:px-10">
      <RevealOnScroll>
        <SectionHeader en="OUR WORKS" cn="作品展示" desc="每一件作品都经过多次试验与调整，在火与土的对话中诞生" />
      </RevealOnScroll>

      <!-- Filter tabs - traditional style -->
      <RevealOnScroll>
        <div class="flex justify-center gap-2 mb-14 flex-wrap">
          <button
            v-for="cat in categories"
            :key="cat"
            @click="selectedCategory = cat"
            class="px-5 py-2 text-sm transition-all duration-300 border rounded-sm"
            :class="selectedCategory === cat
              ? 'bg-[var(--color-accent)] text-white border-[var(--color-accent)]'
              : 'border-[var(--color-border)] text-[var(--color-text-secondary)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]'">
            {{ cat }}
          </button>
        </div>
      </RevealOnScroll>

      <!-- Masonry grid -->
      <div class="columns-1 sm:columns-2 lg:columns-3 gap-5 space-y-5">
        <transition-group
          enter-active-class="transition-all duration-500"
          enter-from-class="opacity-0 scale-95"
          enter-to-class="opacity-100 scale-100">
          <div v-for="work in filteredWorks" :key="work.id" class="break-inside-avoid group cursor-pointer">
            <div class="relative overflow-hidden bg-[var(--color-bg-card)]">
              <!-- Gold corner accents -->
              <div class="absolute top-2 left-2 w-4 h-4 border-t border-l border-[var(--color-gold)]/50 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div class="absolute bottom-2 right-2 w-4 h-4 border-b border-r border-[var(--color-gold)]/50 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <img :src="work.image" :alt="work.title"
                class="w-full object-cover group-hover:scale-105 transition-transform duration-700"
                :class="work.id % 3 === 0 ? 'aspect-[3/4]' : work.id % 3 === 1 ? 'aspect-square' : 'aspect-[4/5]'" />
              <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div class="absolute bottom-0 left-0 right-0 p-5 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                <span class="inline-block px-2 py-0.5 bg-[var(--color-accent)] text-white text-xs mb-2">{{ work.category }}</span>
                <h3 class="text-white font-brush text-2xl">{{ work.title }}</h3>
                <p class="text-white/60 text-sm mt-1">{{ work.desc }}</p>
              </div>
            </div>
          </div>
        </transition-group>
      </div>
    </div>
  </section>
</template>
