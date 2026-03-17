<script setup>
import { ref } from 'vue'
import { videos } from '../../data/videos.js'
import SectionHeader from '../ui/SectionHeader.vue'
import RevealOnScroll from '../ui/RevealOnScroll.vue'

const lightboxVideo = ref(null)
</script>

<template>
  <section id="videos" class="py-24 lg:py-32 bg-[var(--color-bg-secondary)] ink-wash">
    <div class="max-w-7xl mx-auto px-6 lg:px-10">
      <RevealOnScroll>
        <SectionHeader en="VIDEOS" cn="视频展示" desc="用影像记录泥与火的故事" />
      </RevealOnScroll>

      <!-- Bento grid -->
      <RevealOnScroll>
        <div class="grid grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[200px] lg:auto-rows-[220px]">
          <div
            v-for="video in videos"
            :key="video.id"
            @click="lightboxVideo = video"
            class="relative overflow-hidden cursor-pointer group"
            :class="video.featured ? 'col-span-2 row-span-2' : ''">
            <!-- Gold corner decorations -->
            <div class="absolute top-2 left-2 w-4 h-4 border-t border-l border-[var(--color-gold)]/40 z-10"></div>
            <div class="absolute bottom-2 right-2 w-4 h-4 border-b border-r border-[var(--color-gold)]/40 z-10"></div>

            <img :src="video.thumbnail" :alt="video.title" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            <div class="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300"></div>
            <!-- Play button -->
            <div class="absolute inset-0 flex items-center justify-center">
              <div class="w-14 h-14 border-2 border-white/60 flex items-center justify-center group-hover:scale-110 group-hover:border-[var(--color-accent)] transition-all duration-300 rounded-sm bg-black/20">
                <svg class="w-5 h-5 text-white ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
            <div class="absolute bottom-0 left-0 right-0 p-4">
              <h3 class="text-white font-medium text-sm">{{ video.title }}</h3>
              <p class="text-white/50 text-xs mt-1">{{ video.desc }}</p>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </div>

    <!-- Lightbox -->
    <teleport to="body">
      <transition
        enter-active-class="transition-all duration-300"
        enter-from-class="opacity-0"
        enter-to-class="opacity-100"
        leave-active-class="transition-all duration-200"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0">
        <div v-if="lightboxVideo" class="fixed inset-0 z-[100] flex items-center justify-center p-4" @click.self="lightboxVideo = null">
          <div class="absolute inset-0 bg-black/85" @click="lightboxVideo = null"></div>
          <div class="relative max-w-4xl w-full aspect-video bg-[var(--color-bg-dark)] flex items-center justify-center border border-white/10">
            <button @click="lightboxVideo = null" class="absolute -top-12 right-0 text-white/60 hover:text-white transition-colors">
              <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div class="text-center space-y-4">
              <div class="stamp text-white border-white/30 text-2xl px-4 py-3 mx-auto">播</div>
              <h3 class="font-brush text-2xl text-white">{{ lightboxVideo.title }}</h3>
              <p class="text-white/40 text-sm">视频即将上线，敬请期待</p>
            </div>
          </div>
        </div>
      </transition>
    </teleport>
  </section>
</template>
