<script setup>
import { ref, watch } from 'vue'
import { courses } from '../../data/courses.js'

const emit = defineEmits(['close'])
const props = defineProps({
  show: Boolean,
  preselectedCourse: { type: String, default: '' },
})

const form = ref({ name: '', phone: '', course: props.preselectedCourse, message: '' })

watch(() => props.preselectedCourse, (v) => { form.value.course = v })

function submit() {
  alert(`预约成功！我们会尽快联系您确认「${form.value.course}」的课程安排。`)
  emit('close')
  form.value = { name: '', phone: '', course: '', message: '' }
}
</script>

<template>
  <teleport to="body">
    <transition
      enter-active-class="transition-all duration-300"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition-all duration-200"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0">
      <div v-if="show" class="fixed inset-0 z-[100] flex items-center justify-center p-4">
        <div class="absolute inset-0 bg-black/40 backdrop-blur-sm" @click="emit('close')"></div>
        <div class="relative bg-[var(--color-bg-primary)] border border-[var(--color-border)] rounded-sm p-8 max-w-md w-full shadow-2xl">
          <!-- Red top border accent -->
          <div class="absolute top-0 left-6 right-6 h-[2px] bg-[var(--color-accent)]"></div>

          <button @click="emit('close')" class="absolute top-4 right-4 w-8 h-8 flex items-center justify-center text-[var(--color-text-light)] hover:text-[var(--color-accent)] transition-colors">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <div class="text-center mb-8">
            <!-- Stamp decoration -->
            <div class="stamp mx-auto text-lg w-12 h-12 mb-4">陶</div>
            <h3 class="font-brush text-3xl text-[var(--color-text-primary)]">预约体验</h3>
            <p class="text-[var(--color-text-light)] text-sm mt-2">填写信息，我们会尽快与您联系</p>
          </div>

          <form @submit.prevent="submit" class="space-y-4">
            <input v-model="form.name" type="text" placeholder="您的姓名" required
              class="w-full px-4 py-3 bg-[var(--color-bg-secondary)] border border-[var(--color-border)] text-[var(--color-text-primary)] placeholder:text-[var(--color-text-light)]/60 focus:border-[var(--color-accent)] focus:outline-none transition-colors rounded-sm" />
            <input v-model="form.phone" type="tel" placeholder="联系电话" required
              class="w-full px-4 py-3 bg-[var(--color-bg-secondary)] border border-[var(--color-border)] text-[var(--color-text-primary)] placeholder:text-[var(--color-text-light)]/60 focus:border-[var(--color-accent)] focus:outline-none transition-colors rounded-sm" />
            <select v-model="form.course"
              class="w-full px-4 py-3 bg-[var(--color-bg-secondary)] border border-[var(--color-border)] text-[var(--color-text-primary)] focus:border-[var(--color-accent)] focus:outline-none transition-colors rounded-sm">
              <option value="">选择课程（可选）</option>
              <option v-for="c in courses" :key="c.title" :value="c.title">{{ c.title }}</option>
            </select>
            <textarea v-model="form.message" rows="3" placeholder="想对我们说的话..."
              class="w-full px-4 py-3 bg-[var(--color-bg-secondary)] border border-[var(--color-border)] text-[var(--color-text-primary)] placeholder:text-[var(--color-text-light)]/60 focus:border-[var(--color-accent)] focus:outline-none transition-colors rounded-sm resize-none"></textarea>
            <button type="submit"
              class="w-full py-4 bg-[var(--color-accent)] text-white font-medium rounded-sm hover:bg-[var(--color-accent-dark)] transition-all duration-300 active:scale-[0.98]">
              确认预约
            </button>
          </form>
        </div>
      </div>
    </transition>
  </teleport>
</template>
