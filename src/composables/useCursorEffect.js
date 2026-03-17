import { ref, onMounted, onUnmounted } from 'vue'

export function useCursorEffect() {
  const cursorX = ref(0)
  const cursorY = ref(0)
  const cursorLabel = ref('')
  const cursorVisible = ref(false)
  const isDesktop = ref(false)
  let rafId = null
  let targetX = 0
  let targetY = 0

  function onMouseMove(e) {
    targetX = e.clientX
    targetY = e.clientY
    cursorVisible.value = true
  }

  function onMouseLeave() {
    cursorVisible.value = false
  }

  function animate() {
    cursorX.value += (targetX - cursorX.value) * 0.15
    cursorY.value += (targetY - cursorY.value) * 0.15
    rafId = requestAnimationFrame(animate)
  }

  onMounted(() => {
    isDesktop.value = window.matchMedia('(pointer: fine)').matches
    if (!isDesktop.value) return
    document.addEventListener('mousemove', onMouseMove)
    document.addEventListener('mouseleave', onMouseLeave)
    rafId = requestAnimationFrame(animate)
  })

  onUnmounted(() => {
    document.removeEventListener('mousemove', onMouseMove)
    document.removeEventListener('mouseleave', onMouseLeave)
    if (rafId) cancelAnimationFrame(rafId)
  })

  return { cursorX, cursorY, cursorLabel, cursorVisible, isDesktop }
}
