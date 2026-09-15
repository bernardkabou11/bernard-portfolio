<script setup lang="ts">
import profileImage from '~/assets/images/profile.svg'

const navItems = [
  { label: 'Accueil', to: '/' },
  { label: 'À propos', to: '/about' },
  { label: 'Projets', to: '/projects' },
  { label: 'Contact', to: '/contact' },
]

const isMenuOpen = ref(false)
const route = useRoute()

watch(
  () => route.fullPath,
  () => {
    isMenuOpen.value = false
  },
)
</script>

<template>
  <header class="sticky top-0 z-50 border-b border-slate-800/80 bg-slate-950/75 backdrop-blur-xl">
    <nav class="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
      <NuxtLink to="/" class="flex items-center gap-3">
        <img :src="profileImage" alt="Bernard Daniel Kabou" class="h-10 w-10 rounded-xl object-cover ring-1 ring-sky-400/40" />
        <div>
          <p class="text-sm font-semibold uppercase tracking-[0.2em] text-slate-300">Bernard</p>
          <p class="text-xs text-slate-400">Full-Stack Developer</p>
        </div>
      </NuxtLink>

      <div class="hidden items-center gap-8 md:flex">
        <NuxtLink
          v-for="item in navItems"
          :key="item.to"
          :to="item.to"
          class="text-sm font-medium text-slate-300 transition hover:text-white"
          active-class="text-sky-300"
        >
          {{ item.label }}
        </NuxtLink>
      </div>

      <div class="hidden md:block">
        <NuxtLink to="/contact" class="rounded-full bg-sky-500 px-5 py-2.5 text-sm font-semibold text-slate-950 shadow-lg shadow-sky-500/30 transition hover:bg-sky-400">
          Discutons votre projet
        </NuxtLink>
      </div>

      <button
        type="button"
        class="inline-flex rounded-lg border border-slate-700 p-2 text-slate-200 md:hidden"
        aria-label="Toggle menu"
        @click="isMenuOpen = !isMenuOpen"
      >
        <svg v-if="!isMenuOpen" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
        <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </nav>

    <div v-if="isMenuOpen" class="border-t border-slate-800 bg-slate-950 md:hidden">
      <div class="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-4 sm:px-6">
        <NuxtLink
          v-for="item in navItems"
          :key="item.to"
          :to="item.to"
          class="rounded-lg px-3 py-2 text-sm font-medium text-slate-200 hover:bg-slate-900"
          active-class="bg-sky-500/10 text-sky-300"
        >
          {{ item.label }}
        </NuxtLink>
        <NuxtLink to="/contact" class="mt-2 rounded-full bg-sky-500 px-4 py-2.5 text-center text-sm font-semibold text-slate-950">
          Contact
        </NuxtLink>
      </div>
    </div>
  </header>
</template>
