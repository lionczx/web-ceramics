<script setup>
import { ref } from 'vue'
import { articles } from '../../data/articles.js'
import SectionHeader from '../ui/SectionHeader.vue'
import RevealOnScroll from '../ui/RevealOnScroll.vue'

const readingArticle = ref(null)

function openArticle(article) {
  readingArticle.value = article
  document.body.style.overflow = 'hidden'
}
function closeArticle() {
  readingArticle.value = null
  document.body.style.overflow = ''
}

function formatDate(dateStr) {
  const d = new Date(dateStr)
  return `${d.getFullYear()}.${String(d.getMonth() + 1).padStart(2, '0')}.${String(d.getDate()).padStart(2, '0')}`
}
</script>

<template>
  <section id="blog" class="py-24 lg:py-32 bg-[var(--color-bg-primary)]">
    <div class="max-w-7xl mx-auto px-6 lg:px-10">
      <RevealOnScroll>
        <SectionHeader en="JOURNAL" cn="陶舍日志" desc="记录工作室的日常与思考" />
      </RevealOnScroll>

      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <RevealOnScroll v-for="article in articles" :key="article.id">
          <article class="group cursor-pointer border border-[var(--color-border)] hover:border-[var(--color-accent)]/30 transition-colors duration-300" @click="openArticle(article)">
            <div class="overflow-hidden">
              <img :src="article.image" :alt="article.title"
                class="w-full h-[220px] object-cover group-hover:scale-105 transition-transform duration-700" />
            </div>
            <div class="p-6 space-y-3">
              <div class="flex items-center gap-3">
                <span class="px-2 py-0.5 bg-[var(--color-accent)]/10 text-[var(--color-accent)] text-xs font-medium">{{ article.tag }}</span>
                <span class="text-xs text-[var(--color-text-light)]">{{ formatDate(article.date) }}</span>
              </div>
              <h3 class="font-serif-cn text-lg font-bold text-[var(--color-text-primary)] group-hover:text-[var(--color-accent)] transition-colors leading-snug">{{ article.title }}</h3>
              <p class="text-sm text-[var(--color-text-secondary)] leading-relaxed line-clamp-2">{{ article.excerpt }}</p>
              <span class="inline-flex items-center gap-1 text-xs text-[var(--color-accent)] group-hover:gap-2 transition-all">
                阅读更多 <span>→</span>
              </span>
            </div>
          </article>
        </RevealOnScroll>
      </div>
    </div>

    <!-- Reading modal -->
    <teleport to="body">
      <transition
        enter-active-class="transition-all duration-300"
        enter-from-class="opacity-0"
        enter-to-class="opacity-100"
        leave-active-class="transition-all duration-200"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0">
        <div v-if="readingArticle" class="fixed inset-0 z-[100] bg-[var(--color-bg-primary)] overflow-y-auto">
          <div class="max-w-3xl mx-auto px-6 py-20">
            <button @click="closeArticle" class="flex items-center gap-2 text-[var(--color-text-light)] hover:text-[var(--color-accent)] transition-colors mb-12">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
              </svg>
              <span class="text-sm">返回</span>
            </button>

            <div class="space-y-3 mb-8">
              <div class="flex items-center gap-3">
                <span class="px-2 py-0.5 bg-[var(--color-accent)]/10 text-[var(--color-accent)] text-xs font-medium">{{ readingArticle.tag }}</span>
                <span class="text-xs text-[var(--color-text-light)]">{{ formatDate(readingArticle.date) }}</span>
              </div>
              <h1 class="font-brush text-3xl lg:text-5xl text-[var(--color-text-primary)] leading-snug">{{ readingArticle.title }}</h1>
            </div>

            <div class="relative mb-10">
              <div class="absolute -top-3 -left-3 w-8 h-8 border-t-2 border-l-2 border-[var(--color-gold)]"></div>
              <div class="absolute -bottom-3 -right-3 w-8 h-8 border-b-2 border-r-2 border-[var(--color-gold)]"></div>
              <img :src="readingArticle.image" :alt="readingArticle.title" class="w-full h-[300px] lg:h-[400px] object-cover" />
            </div>

            <div class="text-[var(--color-text-secondary)] leading-[2] text-base whitespace-pre-line font-serif-cn">{{ readingArticle.content }}</div>
          </div>
        </div>
      </transition>
    </teleport>
  </section>
</template>
