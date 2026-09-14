<script setup lang="ts">
useHead({
  title: 'Bernard Daniel Kabou | Portfolio',
  meta: [
    { name: 'description', content: 'Portfolio de Bernard Daniel Kabou, développeur web full-stack et DevOps.' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
  ],
})
</script>

<template>
  <div class="min-h-screen bg-slate-950 text-slate-100">
    <Navbar />
    <main>
      <NuxtPage />
    </main>
    <Footer />
  </div>
</template>
