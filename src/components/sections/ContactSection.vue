<script setup>
import { ref } from 'vue'
import { courses } from '../../data/courses.js'
import SectionHeader from '../ui/SectionHeader.vue'
import RevealOnScroll from '../ui/RevealOnScroll.vue'

const form = ref({ name: '', phone: '', course: '', message: '' })

function submit() {
  alert(`感谢您的留言！我们会在24小时内回复您。`)
  form.value = { name: '', phone: '', course: '', message: '' }
}
</script>

<template>
  <section id="contact" class="py-24 lg:py-32 bg-[var(--color-bg-primary)]">
    <div class="max-w-7xl mx-auto px-6 lg:px-10">
      <div class="grid lg:grid-cols-2 gap-16 lg:gap-24">
        <!-- Left: info -->
        <RevealOnScroll>
          <div class="space-y-8">
            <div>
              <div class="flex items-center gap-3 mb-4">
                <span class="w-8 h-[1px] bg-[var(--color-gold)]"></span>
                <span class="text-[var(--color-gold)] text-xs">◆</span>
              </div>
              <h2 class="font-brush text-[clamp(2rem,5vw,3.5rem)] text-[var(--color-text-primary)] leading-tight">来找我们玩</h2>
              <p class="font-serif-cn text-xs tracking-[0.4em] text-[var(--color-gold-dark)] mt-3 uppercase">CONTACT US</p>
              <p class="mt-4 text-[var(--color-text-secondary)] leading-relaxed text-sm">欢迎来工作室坐坐，喝杯茶，聊聊陶。也可以先线上咨询，我们会在 24 小时内回复你。</p>
            </div>

            <div class="space-y-6">
              <div v-for="info in [
                { label: '工作室地址', value: '广东省广州市黄埔区宏康和园', icon: 'M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z' },
                { label: '营业时间', value: '周二至周日 10:00 - 18:00', icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z' },
                { label: '联系方式', value: '0571-8888-6666 / hello@niyutaoshe.com', icon: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' },
              ]" :key="info.label" class="flex items-start gap-4">
                <div class="w-10 h-10 border border-[var(--color-accent)]/20 flex items-center justify-center shrink-0 rounded-sm">
                  <svg class="w-4 h-4 text-[var(--color-accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :d="info.icon" />
                  </svg>
                </div>
                <div>
                  <h4 class="text-sm font-medium text-[var(--color-text-primary)]">{{ info.label }}</h4>
                  <p class="text-sm text-[var(--color-text-secondary)] mt-1">{{ info.value }}</p>
                </div>
              </div>
            </div>

            <!-- Decorative stamp -->
            <div class="stamp text-lg px-3 py-2 mt-6">访</div>
          </div>
        </RevealOnScroll>

        <!-- Right: form -->
        <RevealOnScroll>
          <div class="bg-[var(--color-bg-card)] border border-[var(--color-border)] p-8 lg:p-10 relative">
            <!-- Red top accent -->
            <div class="absolute top-0 left-8 right-8 h-[2px] bg-[var(--color-accent)]"></div>

            <h3 class="font-brush text-2xl text-[var(--color-text-primary)] mb-6">在线留言</h3>
            <form @submit.prevent="submit" class="space-y-5">
              <div>
                <label class="block text-xs text-[var(--color-text-light)] mb-2">姓名</label>
                <input v-model="form.name" type="text" placeholder="请输入您的姓名" required
                  class="w-full px-4 py-3 bg-[var(--color-bg-secondary)] border border-[var(--color-border)] text-[var(--color-text-primary)] placeholder:text-[var(--color-text-light)]/40 focus:border-[var(--color-accent)] focus:outline-none transition-colors rounded-sm" />
              </div>
              <div>
                <label class="block text-xs text-[var(--color-text-light)] mb-2">电话</label>
                <input v-model="form.phone" type="tel" placeholder="请输入联系电话" required
                  class="w-full px-4 py-3 bg-[var(--color-bg-secondary)] border border-[var(--color-border)] text-[var(--color-text-primary)] placeholder:text-[var(--color-text-light)]/40 focus:border-[var(--color-accent)] focus:outline-none transition-colors rounded-sm" />
              </div>
              <div>
                <label class="block text-xs text-[var(--color-text-light)] mb-2">感兴趣的课程</label>
                <select v-model="form.course"
                  class="w-full px-4 py-3 bg-[var(--color-bg-secondary)] border border-[var(--color-border)] text-[var(--color-text-primary)] focus:border-[var(--color-accent)] focus:outline-none transition-colors rounded-sm">
                  <option value="">请选择课程</option>
                  <option v-for="c in courses" :key="c.title" :value="c.title">{{ c.title }}</option>
                </select>
              </div>
              <div>
                <label class="block text-xs text-[var(--color-text-light)] mb-2">留言</label>
                <textarea v-model="form.message" rows="4" placeholder="想对我们说的话..."
                  class="w-full px-4 py-3 bg-[var(--color-bg-secondary)] border border-[var(--color-border)] text-[var(--color-text-primary)] placeholder:text-[var(--color-text-light)]/40 focus:border-[var(--color-accent)] focus:outline-none transition-colors rounded-sm resize-none"></textarea>
              </div>
              <button type="submit"
                class="w-full py-4 bg-[var(--color-accent)] text-white font-medium rounded-sm hover:bg-[var(--color-accent-dark)] transition-all duration-300 active:scale-[0.98]">
                提交留言
              </button>
            </form>
          </div>
        </RevealOnScroll>
      </div>
    </div>
  </section>
</template>
