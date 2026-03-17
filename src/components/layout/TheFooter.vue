<script setup>
import { useSmoothScroll } from '../../composables/useSmoothScroll.js'
const { scrollTo } = useSmoothScroll()
</script>

<template>
  <footer class="bg-[var(--color-bg-dark)] text-white/70 pt-20 pb-8">
    <div class="max-w-7xl mx-auto px-6 lg:px-10">
      <!-- Top decoration -->
      <div class="flex items-center justify-center gap-4 mb-16">
        <span class="w-16 h-[1px] bg-[var(--color-gold)]/30"></span>
        <span class="stamp text-white border-white/40 text-sm px-2 py-1">陶</span>
        <span class="w-16 h-[1px] bg-[var(--color-gold)]/30"></span>
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        <!-- Brand -->
        <div class="space-y-4">
          <h3 class="font-brush text-3xl text-white">多言陶舍</h3>
          <p class="text-white/40 text-sm leading-relaxed">泥土之上，指尖生花。<br>在这里，时间慢了下来。</p>
        </div>

        <!-- Quick links -->
        <div>
          <h4 class="text-sm font-medium text-[var(--color-gold)] mb-6 tracking-wider">快速导航</h4>
          <ul class="space-y-3">
            <li v-for="item in [{ label: '关于我们', id: 'about' }, { label: '作品展示', id: 'works' }, { label: '课程体验', id: 'courses' }, { label: '常见问题', id: 'faq' }]" :key="item.id">
              <a href="#" @click.prevent="scrollTo('#' + item.id)" class="text-sm text-white/50 hover:text-[var(--color-accent)] transition-colors">{{ item.label }}</a>
            </li>
          </ul>
        </div>

        <!-- Courses -->
        <div>
          <h4 class="text-sm font-medium text-[var(--color-gold)] mb-6 tracking-wider">课程体验</h4>
          <ul class="space-y-3">
            <li v-for="item in ['拉坯入门体验', '手捏陶艺课', '釉下彩绘课', '柴烧研修班']" :key="item">
              <a href="#" class="text-sm text-white/50 hover:text-[var(--color-accent)] transition-colors">{{ item }}</a>
            </li>
          </ul>
        </div>

        <!-- Contact -->
        <div>
          <h4 class="text-sm font-medium text-[var(--color-gold)] mb-6 tracking-wider">联系我们</h4>
          <ul class="space-y-3 text-sm text-white/50">
            <li>广东省广州市黄埔区宏康和园</li>
            <li>0571-8888-6666</li>
            <li>hello@niyutaoshe.com</li>
            <li>周二至周日 10:00 - 18:00</li>
          </ul>
        </div>
      </div>

      <!-- Bottom bar -->
      <div class="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p class="text-xs text-white/30">&copy; 2026 多言陶舍 NiYu Ceramic Studio</p>
        <div class="flex gap-4">
          <a v-for="social in ['微信', '小红书', '抖音']" :key="social" href="#"
            class="w-10 h-10 border border-white/10 hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] flex items-center justify-center transition-all text-white/40 text-xs rounded-sm">
            {{ social.charAt(0) }}
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>
