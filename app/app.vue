<script setup lang="ts">
const { currentTheme } = useTheme()

useHead({
  title: 'Bernard Daniel Kabou | Portfolio',
  meta: [
    { name: 'description', content: 'Portfolio de Bernard Daniel Kabou, développeur web full-stack et DevOps.' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
  ],
})

watch(
  currentTheme,
  (theme) => {
    if (import.meta.server) return
    document.documentElement.setAttribute('data-theme', theme)
  },
  { immediate: true },
)
</script>

<template>
  <div class="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] transition-colors duration-300 ease-out">
    <Navbar />
    <main>
      <NuxtPage />
    </main>
    <Footer />
  </div>
</template>
