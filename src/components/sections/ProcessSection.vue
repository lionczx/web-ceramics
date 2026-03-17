<script setup>
import { ref, onMounted } from 'vue'
import SectionHeader from '../ui/SectionHeader.vue'
import RevealOnScroll from '../ui/RevealOnScroll.vue'

const steps = [
  { title: '揉泥', desc: '排出泥中气泡，使质地均匀。这是制陶的第一步，也是最考验耐心的环节。', image: 'https://images.unsplash.com/photo-1604580864964-0462f5d5b1a8?w=400&h=300&fit=crop' },
  { title: '成型', desc: '拉坯或手捏，在旋转的辘轳上塑造器物形态。从一团泥土到初见雏形。', image: 'https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=400&h=300&fit=crop' },
  { title: '修坯', desc: '用修坯刀细修器型，打磨表面肌理，让每一个弧度都恰到好处。', image: 'https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=400&h=300&fit=crop' },
  { title: '上釉', desc: '施以天然矿物釉料，赋予色彩。浸釉、荡釉、喷釉，不同方式带来不同效果。', image: 'https://images.unsplash.com/photo-1514651029883-590fda4019e0?w=400&h=300&fit=crop' },
  { title: '烧制', desc: '1280°C 高温烧制，泥与火的最终对话。柴烧需守窑48小时，每一件都是孤品。', image: 'https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?w=400&h=300&fit=crop' },
]

const activeStep = ref(-1)

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const idx = parseInt(entry.target.dataset.step)
          if (idx > activeStep.value) activeStep.value = idx
        }
      })
    },
    { threshold: 0.5 }
  )
  document.querySelectorAll('.timeline-step').forEach((el) => observer.observe(el))
})
</script>

<template>
  <section id="process" class="py-24 lg:py-32 bg-[var(--color-bg-dark)] text-white overflow-hidden">
    <div class="max-w-7xl mx-auto px-6 lg:px-10">
      <RevealOnScroll>
        <div class="text-center mb-16 lg:mb-20">
          <div class="flex items-center justify-center gap-3 mb-4">
            <span class="w-8 h-[1px] bg-[var(--color-gold)]/40"></span>
            <span class="text-[var(--color-gold)]/60 text-xs">◆</span>
            <span class="w-8 h-[1px] bg-[var(--color-gold)]/40"></span>
          </div>
          <h2 class="font-brush text-[clamp(2.2rem,6vw,4rem)] leading-tight text-white">制陶的旅程</h2>
          <p class="font-serif-cn text-xs tracking-[0.4em] text-[var(--color-gold)]/60 mt-3 uppercase">PROCESS</p>
          <p class="mt-4 text-white/40 text-sm">一件陶器的诞生，需要经历这些步骤</p>
        </div>
      </RevealOnScroll>

      <div class="max-w-4xl mx-auto">
        <div v-for="(step, i) in steps" :key="step.title"
          :data-step="i"
          class="timeline-step relative flex gap-8 lg:gap-14 pb-16 last:pb-0">
          <!-- Timeline -->
          <div class="flex flex-col items-center shrink-0">
            <div class="w-10 h-10 flex items-center justify-center border-2 transition-all duration-500 rounded-sm"
              :class="i <= activeStep ? 'bg-[var(--color-accent)] border-[var(--color-accent)]' : 'border-white/20 bg-transparent'">
              <span class="font-brush text-lg text-white">{{ ['一','二','三','四','五'][i] }}</span>
            </div>
            <div v-if="i < steps.length - 1" class="w-[1px] flex-1 mt-2 transition-all duration-700"
              :class="i < activeStep ? 'bg-[var(--color-accent)]/60' : 'bg-white/10'"></div>
          </div>

          <!-- Content -->
          <div class="flex-1 pb-4">
            <h3 class="font-brush text-3xl text-white mb-2">{{ step.title }}</h3>
            <p class="text-white/50 leading-relaxed text-sm">{{ step.desc }}</p>
            <div class="mt-4 overflow-hidden relative">
              <div class="absolute top-2 left-2 w-4 h-4 border-t border-l border-[var(--color-gold)]/30"></div>
              <div class="absolute bottom-2 right-2 w-4 h-4 border-b border-r border-[var(--color-gold)]/30"></div>
              <img :src="step.image" :alt="step.title" class="w-full h-44 object-cover opacity-60 hover:opacity-90 transition-opacity duration-500" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
