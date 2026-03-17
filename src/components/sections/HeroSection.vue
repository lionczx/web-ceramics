<script setup>
import { ref, onMounted } from 'vue'
import { useSmoothScroll } from '../../composables/useSmoothScroll.js'

const emit = defineEmits(['openBooking'])
const { scrollTo } = useSmoothScroll()
const parallaxY = ref(0)

onMounted(() => {
  window.addEventListener('scroll', () => {
    parallaxY.value = window.scrollY * 0.3
  }, { passive: true })
})
</script>

<template>
  <section id="home" class="relative min-h-screen flex items-center overflow-hidden bg-[var(--color-bg-primary)]">
    <!-- Ink wash background -->
    <div class="absolute inset-0">
      <div class="absolute inset-0 bg-gradient-to-b from-[var(--color-bg-primary)] via-[var(--color-bg-secondary)] to-[var(--color-bg-primary)]"></div>
      <!-- Subtle ink wash texture -->
      <div class="absolute top-0 right-0 w-[60%] h-full opacity-[0.06]" :style="{ transform: `translateY(${parallaxY * 0.5}px)` }">
        <img src="https://images.unsplash.com/photo-1604580864964-0462f5d5b1a8?w=1200&h=900&fit=crop" alt="" class="w-full h-full object-cover mix-blend-multiply" />
      </div>
      <!-- Decorative ink splashes -->
      <div class="absolute top-20 right-20 w-64 h-64 bg-[var(--color-accent)]/3 rounded-full blur-[100px]"></div>
      <div class="absolute bottom-40 left-10 w-48 h-48 bg-[var(--color-gold)]/5 rounded-full blur-[80px]"></div>
    </div>

    <!-- Vertical decorative text (left side) -->
    <div class="absolute left-6 top-1/2 -translate-y-1/2 hidden xl:block">
      <div class="writing-mode-vertical text-xs tracking-[0.5em] text-[var(--color-text-light)]/40 font-serif-cn">手作陶瓷工作室</div>
    </div>

    <!-- Main content -->
    <div class="relative max-w-7xl mx-auto px-6 lg:px-10 py-32 w-full">
      <div class="grid lg:grid-cols-[1fr_0.8fr] gap-16 items-center">
        <!-- Left: text -->
        <div class="space-y-8">
          <!-- Stamp badge -->
          <div class="animate-[fadeIn_0.8s_ease-out_0.2s_both]">
            <span class="stamp text-sm">手作</span>
          </div>

          <!-- Brush calligraphy title -->
          <h1 class="space-y-2">
            <span class="block overflow-hidden">
              <span class="block font-brush text-[clamp(3rem,8vw,6rem)] leading-[1.1] text-[var(--color-text-primary)] animate-[slideUp_0.8s_ease-out_0.3s_both]">泥土之上</span>
            </span>
            <span class="block overflow-hidden">
              <span class="block font-brush text-[clamp(3rem,8vw,6rem)] leading-[1.1] text-[var(--color-accent)] animate-[slideUp_0.8s_ease-out_0.6s_both]">指尖生花</span>
            </span>
          </h1>

          <!-- Description -->
          <p class="text-base text-[var(--color-text-secondary)] max-w-md leading-[1.8] animate-[fadeIn_0.8s_ease-out_0.9s_both]">
            在多言陶舍，每一件器物都承载着制作者的温度。<br>双手触碰泥土的那一刻，时间便慢了下来。
          </p>

          <!-- Buttons -->
          <div class="flex flex-wrap gap-4 animate-[fadeIn_0.8s_ease-out_1.1s_both]">
            <button @click="emit('openBooking', '')"
              class="px-8 py-4 bg-[var(--color-accent)] text-white font-medium rounded-sm hover:bg-[var(--color-accent-dark)] transition-all duration-300 hover:-translate-y-0.5 active:scale-95">
              预约体验课程
            </button>
            <button @click="scrollTo('#works')"
              class="px-8 py-4 border border-[var(--color-border-dark)] text-[var(--color-text-primary)] font-medium rounded-sm hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] transition-all duration-300">
              浏览作品 →
            </button>
          </div>

          <!-- Stats with gold accent -->
          <div class="flex gap-10 pt-6 animate-[fadeIn_0.8s_ease-out_1.3s_both]">
            <div v-for="stat in [{ num: '8+', label: '年专注陶艺' }, { num: '3000+', label: '学员体验' }, { num: '200+', label: '原创器型' }]" :key="stat.label" class="text-center">
              <div class="text-2xl font-bold text-[var(--color-accent)] font-serif-cn">{{ stat.num }}</div>
              <div class="text-xs text-[var(--color-text-light)] mt-1">{{ stat.label }}</div>
            </div>
          </div>
        </div>

        <!-- Right: hero image with decorative frame -->
        <div class="relative hidden lg:block animate-[fadeIn_1s_ease-out_0.5s_both]">
          <div class="relative">
            <!-- Gold corner decorations -->
            <div class="absolute -top-3 -left-3 w-8 h-8 border-t-2 border-l-2 border-[var(--color-gold)]"></div>
            <div class="absolute -top-3 -right-3 w-8 h-8 border-t-2 border-r-2 border-[var(--color-gold)]"></div>
            <div class="absolute -bottom-3 -left-3 w-8 h-8 border-b-2 border-l-2 border-[var(--color-gold)]"></div>
            <div class="absolute -bottom-3 -right-3 w-8 h-8 border-b-2 border-r-2 border-[var(--color-gold)]"></div>

            <img
              src="https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=600&h=750&fit=crop"
              alt="陶瓷作品"
              class="w-full aspect-[3/4] object-cover" />
          </div>
          <!-- Floating stamp -->
          <div class="absolute -right-6 bottom-16 stamp text-xl px-3 py-2 bg-[var(--color-bg-primary)]">舍</div>
        </div>
      </div>
    </div>

    <!-- Scroll indicator -->
    <div class="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3">
      <span class="text-xs tracking-[0.3em] text-[var(--color-text-light)]">向下滑动</span>
      <div class="w-[1px] h-10 bg-gradient-to-b from-[var(--color-accent)] to-transparent animate-pulse"></div>
    </div>
  </section>
</template>

<style scoped>
@keyframes slideUp {
  from { transform: translateY(100%); }
  to { transform: translateY(0); }
}
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}
.writing-mode-vertical {
  writing-mode: vertical-rl;
}
</style>
