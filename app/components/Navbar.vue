<script setup lang="ts">
import profileImage from '~/assets/images/profile.png'

const { themeOptions, currentTheme, setTheme } = useTheme()

const navItems = [
  { label: 'Accueil', to: '/' },
  { label: 'À propos', to: '/about' },
  { label: 'Projets', to: '/projects' },
  { label: 'Contact', to: '/contact' },
]

const isMenuOpen = ref(false)
const isThemeMenuOpen = ref(false)
const route = useRoute()

watch(
  () => route.fullPath,
  () => {
    isMenuOpen.value = false
    isThemeMenuOpen.value = false
  },
)

const selectTheme = (themeId: string) => {
  setTheme(themeId)
  isThemeMenuOpen.value = false
}
</script>

<template>
  <header class="sticky top-0 z-50 border-b border-[var(--border-primary)] bg-[var(--bg-header)]/75 backdrop-blur-xl">
    <nav class="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
      <NuxtLink to="/" class="flex min-w-0 items-center gap-3">
        <img :src="profileImage" alt="Bernard Daniel Kabou" class="h-10 w-10 shrink-0 rounded-xl object-cover object-center ring-1 ring-sky-400/40" />
        <div class="min-w-0">
          <p class="truncate text-sm font-semibold uppercase tracking-[0.2em] text-[var(--text-muted)]">Bernard</p>
          <p class="hidden text-xs text-[var(--text-soft)] sm:block">Full-Stack Developer</p>
        </div>
      </NuxtLink>

      <div class="hidden items-center gap-8 md:flex">
        <NuxtLink
          v-for="item in navItems"
          :key="item.to"
          :to="item.to"
          class="text-sm font-medium text-[var(--text-muted)] transition hover:text-[var(--text-primary)]"
          active-class="text-[var(--accent-primary)]"
        >
          {{ item.label }}
        </NuxtLink>
      </div>

      <div class="flex items-center gap-3">
        <div class="relative">
          <button
            type="button"
            class="inline-flex items-center gap-2 rounded-full border border-[var(--border-primary)] bg-[var(--bg-soft)] px-2.5 py-2 text-sm font-medium text-[var(--text-primary)] transition hover:border-[var(--accent-primary)] active:scale-95 sm:px-3"
            aria-haspopup="listbox"
            :aria-expanded="isThemeMenuOpen"
            @click="isThemeMenuOpen = !isThemeMenuOpen"
          >
            <span class="h-2.5 w-2.5 rounded-full bg-[var(--accent-primary)]" aria-hidden="true" />
            <span class="hidden sm:inline">Thème : {{ themeOptions.find((theme) => theme.id === currentTheme)?.label }}</span>
            <span class="sm:hidden">Thème</span>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 transition-transform" :class="{ 'rotate-180': isThemeMenuOpen }" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="m6 9 6 6 6-6" />
            </svg>
          </button>

          <div v-if="isThemeMenuOpen" class="absolute right-0 top-full z-50 mt-2 min-w-40 rounded-xl border border-[var(--border-primary)] bg-[var(--bg-header)] p-1.5 shadow-xl shadow-[var(--shadow-soft)] backdrop-blur-xl" role="listbox" aria-label="Choisir un thème">
            <button
              v-for="theme in themeOptions"
              :key="theme.id"
              type="button"
              role="option"
              :aria-selected="currentTheme === theme.id"
              :class="[
                'flex w-full items-center justify-between rounded-lg px-3 py-2 text-left text-sm transition',
                currentTheme === theme.id
                  ? 'bg-[var(--accent-primary)] font-semibold text-[var(--bg-primary)]'
                  : 'text-[var(--text-muted)] hover:bg-[var(--bg-soft)] hover:text-[var(--text-primary)]',
              ]"
              @click="selectTheme(theme.id)"
            >
              {{ theme.label }}
              <span v-if="currentTheme === theme.id" aria-hidden="true">✓</span>
            </button>
          </div>
        </div>

        <NuxtLink to="/contact" class="hidden rounded-full bg-[var(--accent-primary)] px-5 py-2.5 text-sm font-semibold text-[var(--bg-primary)] shadow-lg shadow-[var(--shadow-soft)] transition hover:brightness-110 md:inline-flex">
          Discutons votre projet
        </NuxtLink>
      </div>

      <button
        type="button"
        class="inline-flex rounded-lg border border-[var(--border-primary)] bg-[var(--bg-soft)] p-2 text-[var(--text-primary)] md:hidden"
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

    <div v-if="isMenuOpen" class="border-t border-[var(--border-primary)] bg-[var(--bg-header)] md:hidden">
      <div class="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-4 sm:px-6">
        <NuxtLink
          v-for="item in navItems"
          :key="item.to"
          :to="item.to"
          class="rounded-lg px-3 py-2 text-sm font-medium text-[var(--text-primary)] hover:bg-[var(--bg-soft)]"
          active-class="bg-[var(--bg-soft)] text-[var(--accent-primary)]"
        >
          {{ item.label }}
        </NuxtLink>

        <NuxtLink to="/contact" class="mt-2 rounded-full bg-[var(--accent-primary)] px-4 py-2.5 text-center text-sm font-semibold text-[var(--bg-primary)]">
          Contact
        </NuxtLink>
      </div>
    </div>
  </header>
</template>
