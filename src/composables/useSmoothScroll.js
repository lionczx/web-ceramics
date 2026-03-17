import { ref, onMounted, onUnmounted } from 'vue'
import Lenis from 'lenis'

let lenisInstance = null

export function useSmoothScroll() {
  const lenis = ref(null)

  function raf(time) {
    lenisInstance?.raf(time)
    requestAnimationFrame(raf)
  }

  function init() {
    if (lenisInstance) {
      lenis.value = lenisInstance
      return
    }
    lenisInstance = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      touchMultiplier: 2,
      infinite: false,
    })
    lenis.value = lenisInstance
    requestAnimationFrame(raf)
  }

  function scrollTo(target, options = {}) {
    lenisInstance?.scrollTo(target, { offset: -80, ...options })
  }

  function destroy() {
    lenisInstance?.destroy()
    lenisInstance = null
  }

  return { lenis, init, scrollTo, destroy }
}
