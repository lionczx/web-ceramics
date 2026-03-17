import { onMounted, onUnmounted } from 'vue'

export function useScrollAnimation(options = {}) {
  const { threshold = 0.15, rootMargin = '0px 0px -50px 0px' } = options
  let observer = null

  onMounted(() => {
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold, rootMargin }
    )

    document.querySelectorAll('.reveal-on-scroll').forEach((el) => {
      observer.observe(el)
    })
  })

  onUnmounted(() => {
    observer?.disconnect()
  })

  return { observer }
}
