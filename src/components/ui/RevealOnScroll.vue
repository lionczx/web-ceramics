<script setup>
import { ref, onMounted } from 'vue'

const el = ref(null)
const revealed = ref(false)

onMounted(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        revealed.value = true
        observer.disconnect()
      }
    },
    { threshold: 0.15, rootMargin: '0px 0px -50px 0px' }
  )
  if (el.value) observer.observe(el.value)
})
</script>

<template>
  <div ref="el" :class="['transition-all duration-800', revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10']" style="transition-timing-function: cubic-bezier(0.16, 1, 0.3, 1)">
    <slot />
  </div>
</template>
