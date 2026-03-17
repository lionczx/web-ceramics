<script setup>
import { ref } from 'vue'
import { navLinks } from '../../data/navigation.js'
import { useActiveSection } from '../../composables/useActiveSection.js'
import { useSmoothScroll } from '../../composables/useSmoothScroll.js'

const emit = defineEmits(['openBooking'])
const { activeSection } = useActiveSection(navLinks.map((l) => l.id))
const { scrollTo } = useSmoothScroll()

const scrolled = ref(false)
const mobileMenuOpen = ref(false)

if (typeof window !== 'undefined') {
  window.addEventListener('scroll', () => {
    scrolled.value = window.scrollY > 50
  }, { passive: true })
}

function navigate(id) {
  mobileMenuOpen.value = false
  scrollTo(`#${id}`)
}
</script>

<template>
  <nav :class="['fixed top-0 inset-x-0 z-50 transition-all duration-500', scrolled ? 'bg-[var(--color-bg-primary)]/95 backdrop-blur-md shadow-sm border-b border-[var(--color-border)]' : 'bg-transparent']">
    <div class="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between h-20">
      <!-- Logo: stamp style -->
      <a href="#" @click.prevent="navigate('home')" class="flex items-center gap-3 group">
        <span class="stamp text-base px-2 py-1 group-hover:scale-105 transition-transform">陶</span>
        <span class="font-serif-cn text-lg font-bold text-[var(--color-text-primary)]">多言陶舍</span>
      </a>

      <!-- Desktop Nav -->
      <div class="hidden lg:flex items-center gap-1">
        <button
          v-for="link in navLinks"
          :key="link.id"
          @click="navigate(link.id)"
          class="relative px-4 py-2 text-sm transition-colors duration-300"
          :class="activeSection === link.id ? 'text-[var(--color-accent)] font-medium' : 'text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]'">
          {{ link.label }}
          <!-- Red dot indicator -->
          <span v-if="activeSection === link.id" class="absolute -bottom-0.5 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[var(--color-accent)]"></span>
        </button>
      </div>

      <!-- CTA -->
      <button @click="emit('openBooking', '')" class="hidden lg:block px-6 py-2.5 bg-[var(--color-accent)] text-white text-sm font-medium rounded-sm hover:bg-[var(--color-accent-dark)] transition-all duration-300 active:scale-95">
        预约体验
      </button>

      <!-- Mobile hamburger -->
      <button @click="mobileMenuOpen = !mobileMenuOpen" class="lg:hidden p-2 text-[var(--color-text-primary)]">
        <svg v-if="!mobileMenuOpen" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
        <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>

    <!-- Mobile fullscreen menu -->
    <transition
      enter-active-class="transition-all duration-500 ease-out"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition-all duration-300 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0">
      <div v-if="mobileMenuOpen" class="lg:hidden fixed inset-0 top-20 bg-[var(--color-bg-primary)]/98 backdrop-blur-2xl flex flex-col items-center justify-center gap-2">
        <!-- Decorative top pattern -->
        <div class="absolute top-8 left-1/2 -translate-x-1/2 flex items-center gap-2">
          <span class="w-8 h-[1px] bg-[var(--color-gold)]"></span>
          <span class="text-[var(--color-gold)] text-xs">◆</span>
          <span class="w-8 h-[1px] bg-[var(--color-gold)]"></span>
        </div>
        <button
          v-for="(link, i) in navLinks"
          :key="link.id"
          @click="navigate(link.id)"
          class="text-2xl font-brush text-[var(--color-text-primary)] hover:text-[var(--color-accent)] transition-colors py-2">
          {{ link.label }}
        </button>
        <button @click="emit('openBooking', ''); mobileMenuOpen = false" class="mt-6 px-8 py-3 bg-[var(--color-accent)] text-white font-medium rounded-sm hover:bg-[var(--color-accent-dark)] transition-all">
          预约体验
        </button>
      </div>
    </transition>
  </nav>
</template>
