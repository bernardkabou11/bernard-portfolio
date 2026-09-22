<script setup lang="ts">
import profileImage from '~/assets/images/profile.svg'
</script>

<template>
  <footer class="border-t border-slate-800 bg-slate-950/80">
    <div class="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 sm:grid-cols-2 lg:grid-cols-[1.3fr_0.7fr_0.7fr] lg:px-8">
      <div>
        <div class="flex items-center gap-3">
          <img :src="profileImage" alt="Bernard Daniel Kabou" class="h-10 w-10 rounded-xl object-cover ring-1 ring-sky-400/40" />
          <div>
            <p class="text-sm font-semibold uppercase tracking-[0.2em] text-slate-300">Bernard</p>
            <p class="text-xs text-slate-400">Développeur Full-Stack</p>
          </div>
        </div>
        <p class="mt-4 max-w-md text-sm leading-6 text-slate-400">
          Je conçois des produits web modernes, performants et orientés utilisateur, avec une vraie sensibilité architecture et qualité.
        </p>
      </div>

      <div>
        <h3 class="text-sm font-semibold uppercase tracking-[0.2em] text-slate-300">Navigation</h3>
        <ul class="mt-4 space-y-3 text-sm text-slate-400">
          <li><NuxtLink to="/" class="hover:text-white">Accueil</NuxtLink></li>
          <li><NuxtLink to="/about" class="hover:text-white">À propos</NuxtLink></li>
          <li><NuxtLink to="/projects" class="hover:text-white">Projets</NuxtLink></li>
          <li><NuxtLink to="/contact" class="hover:text-white">Contact</NuxtLink></li>
        </ul>
      </div>

      <div>
        <h3 class="text-sm font-semibold uppercase tracking-[0.2em] text-slate-300">Contact</h3>
        <ul class="mt-4 space-y-3 text-sm text-slate-400">
          <li><a href="mailto:bernard.kabou@gmail.com" class="hover:text-white">bernard.kabou@gmail.com</a></li>
          <li><a href="tel:+33695940451" class="hover:text-white">+33 6 95 94 04 51</a></li>
          <li><a href="https://github.com/bernardkabou11" target="_blank" rel="noreferrer" class="hover:text-white">GitHub</a></li>
        </ul>
      </div>
    </div>

    <div class="border-t border-slate-800">
      <div class="mx-auto flex max-w-6xl items-center justify-between px-4 py-5 text-xs text-slate-500 sm:px-6 lg:px-8">
        <p>© 2026 Bernard Daniel Kabou</p>
        <p>Fait avec Nuxt 4 + TailwindCSS</p>
      </div>
    </div>
  </footer>
</template>
