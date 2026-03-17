import { ref, onMounted, onUnmounted } from 'vue'

export function useActiveSection(sectionIds) {
  const activeSection = ref(sectionIds[0] || 'home')

  const handleScroll = () => {
    const sections = sectionIds.map((id) => document.getElementById(id))
    for (let i = sections.length - 1; i >= 0; i--) {
      if (sections[i] && sections[i].getBoundingClientRect().top <= 150) {
        activeSection.value = sectionIds[i]
        break
      }
    }
  }

  onMounted(() => window.addEventListener('scroll', handleScroll, { passive: true }))
  onUnmounted(() => window.removeEventListener('scroll', handleScroll))

  return { activeSection }
}
