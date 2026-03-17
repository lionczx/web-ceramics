<script setup>
import SectionHeader from '../ui/SectionHeader.vue'
import RevealOnScroll from '../ui/RevealOnScroll.vue'
</script>

<template>
  <section id="about" class="py-24 lg:py-32 bg-[var(--color-bg-secondary)] ink-wash">
    <div class="max-w-7xl mx-auto px-6 lg:px-10">
      <div class="grid lg:grid-cols-[1fr_1.2fr] gap-16 lg:gap-24 items-center">
        <!-- Left: image with Chinese frame -->
        <RevealOnScroll>
          <div class="relative">
            <!-- Gold corner frame -->
            <div class="absolute -top-4 -left-4 w-10 h-10 border-t-2 border-l-2 border-[var(--color-gold)]"></div>
            <div class="absolute -bottom-4 -right-4 w-10 h-10 border-b-2 border-r-2 border-[var(--color-gold)]"></div>

            <img
              src="https://images.unsplash.com/photo-1604580864964-0462f5d5b1a8?w=800&h=1000&fit=crop"
              alt="工作室环境"
              class="w-full h-[450px] lg:h-[550px] object-cover" />

            <!-- Quote card -->
            <div class="absolute -bottom-8 right-4 lg:right-8 bg-[var(--color-bg-primary)] border-l-3 border-[var(--color-accent)] p-5 max-w-[240px] shadow-lg">
              <p class="text-sm text-[var(--color-text-secondary)] italic leading-relaxed font-serif-cn">"每一道手纹，都是时间写给泥土的情书。"</p>
              <p class="text-xs text-[var(--color-accent)] mt-3 font-medium">— 主理人 林微</p>
            </div>
          </div>
        </RevealOnScroll>

        <!-- Right: text content -->
        <RevealOnScroll>
          <div class="space-y-8">
            <div>
              <div class="flex items-center gap-3 mb-4">
                <span class="w-8 h-[1px] bg-[var(--color-gold)]"></span>
                <span class="text-[var(--color-gold)] text-xs">◆</span>
              </div>
              <h2 class="font-brush text-[clamp(2rem,5vw,3.5rem)] text-[var(--color-text-primary)] leading-tight">源于热爱<br>忠于手作</h2>
              <p class="font-serif-cn text-xs tracking-[0.4em] text-[var(--color-gold-dark)] mt-3 uppercase">ABOUT US</p>
            </div>

            <p class="text-[var(--color-text-secondary)] leading-[1.9]">
              多言陶舍成立于 2018 年，坐落在城市一隅的老厂房里。我们保留了斑驳的红砖墙和高挑的天窗，让自然光洒满每一个工位。工作室由陶艺家林微主理，她曾在景德镇学艺五年，师从传统柴烧匠人。
            </p>

            <p class="text-[var(--color-text-secondary)] leading-[1.9] text-sm">
              我们坚持手工制作每一件器物——从揉泥、拉坯、修坯、上釉到烧制，每个环节都倾注心血。这里不仅是一间工作室，更是一个让都市人放下手机、回归双手的空间。
            </p>

            <!-- Feature tags with traditional style -->
            <div class="grid grid-cols-2 gap-x-8 gap-y-5 pt-4 border-t border-[var(--color-border)]">
              <div v-for="tag in [
                { label: '天然原矿釉', desc: '矿物质与草木灰调配' },
                { label: '纯手工制作', desc: '每件作品独一无二' },
                { label: '柴烧窑炉', desc: '还原传统烧制工艺' },
                { label: '茶空间', desc: '品茶体验器物之美' },
              ]" :key="tag.label" class="group">
                <div class="flex items-start gap-2">
                  <span class="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)] mt-2 shrink-0"></span>
                  <div>
                    <h4 class="text-sm font-medium text-[var(--color-text-primary)] group-hover:text-[var(--color-accent)] transition-colors">{{ tag.label }}</h4>
                    <p class="text-xs text-[var(--color-text-light)] mt-0.5">{{ tag.desc }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </div>
  </section>
</template>
