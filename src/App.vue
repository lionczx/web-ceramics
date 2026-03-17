<script setup>
import { ref, onMounted } from 'vue'
import { useSmoothScroll } from './composables/useSmoothScroll.js'

import TheNavbar from './components/layout/TheNavbar.vue'
import TheFooter from './components/layout/TheFooter.vue'
import CustomCursor from './components/layout/CustomCursor.vue'

import HeroSection from './components/sections/HeroSection.vue'
import AboutSection from './components/sections/AboutSection.vue'
import WorksGallery from './components/sections/WorksGallery.vue'
import CoursesSection from './components/sections/CoursesSection.vue'
import ProcessSection from './components/sections/ProcessSection.vue'
import ReviewsSection from './components/sections/ReviewsSection.vue'
import VideoShowcase from './components/sections/VideoShowcase.vue'
import BlogSection from './components/sections/BlogSection.vue'
import FaqSection from './components/sections/FaqSection.vue'
import ContactSection from './components/sections/ContactSection.vue'

import BookingModal from './components/ui/BookingModal.vue'

const showBooking = ref(false)
const bookingCourse = ref('')

function openBooking(courseName = '') {
  bookingCourse.value = courseName
  showBooking.value = true
}

const { init } = useSmoothScroll()
onMounted(() => {
  init()
})
</script>

<template>
  <div class="min-h-screen bg-[var(--color-bg-primary)] text-[var(--color-text-primary)]">
    <CustomCursor />
    <TheNavbar @open-booking="openBooking" />

    <main>
      <HeroSection @open-booking="openBooking" />
      <AboutSection />
      <WorksGallery />
      <CoursesSection @open-booking="openBooking" />
      <ProcessSection />
      <ReviewsSection />
      <VideoShowcase />
      <BlogSection />
      <FaqSection />
      <ContactSection />
    </main>

    <TheFooter />
    <BookingModal :show="showBooking" :preselected-course="bookingCourse" @close="showBooking = false" />
  </div>
</template>
