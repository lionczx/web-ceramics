<script setup>
import { faq } from '../../data/faq.js'
import SectionHeader from '../ui/SectionHeader.vue'
import AccordionItem from '../ui/AccordionItem.vue'
import RevealOnScroll from '../ui/RevealOnScroll.vue'
</script>

<template>
  <section id="faq" class="py-24 lg:py-32 bg-[var(--color-bg-secondary)] ink-wash">
    <div class="max-w-7xl mx-auto px-6 lg:px-10">
      <div class="grid lg:grid-cols-[1fr_1.5fr] gap-16 lg:gap-24">
        <!-- Left: header -->
        <RevealOnScroll>
          <div class="lg:sticky lg:top-32">
            <div class="flex items-center gap-3 mb-4">
              <span class="w-8 h-[1px] bg-[var(--color-gold)]"></span>
              <span class="text-[var(--color-gold)] text-xs">◆</span>
            </div>
            <h2 class="font-brush text-[clamp(2rem,5vw,3.5rem)] text-[var(--color-text-primary)] leading-tight">常见问题</h2>
            <p class="font-serif-cn text-xs tracking-[0.4em] text-[var(--color-gold-dark)] mt-3 uppercase">FAQ</p>
            <p class="mt-4 text-[var(--color-text-secondary)] text-sm leading-relaxed">第一次来不知道怎么准备？这里有你想知道的答案。</p>
            <!-- Stamp decoration -->
            <div class="mt-8 stamp text-lg px-3 py-2">问</div>
          </div>
        </RevealOnScroll>

        <!-- Right: accordion -->
        <RevealOnScroll>
          <div class="border-t border-[var(--color-border)]">
            <AccordionItem
              v-for="item in faq"
              :key="item.question"
              :question="item.question"
              :answer="item.answer" />
          </div>
        </RevealOnScroll>
      </div>
    </div>
  </section>
</template>
