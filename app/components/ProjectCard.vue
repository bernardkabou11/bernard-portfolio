<script setup lang="ts">
interface Props {
  title: string
  description: string
  stack: string[]
  link?: string
  featured?: boolean
  image?: string
}

withDefaults(defineProps<Props>(), {
  link: '#',
  featured: false,
  image: '',
})
</script>

<template>
  <article class="group overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/80 shadow-[0_20px_60px_rgba(15,23,42,0.3)] transition duration-300 hover:-translate-y-1 hover:border-sky-500/40 hover:shadow-[0_25px_80px_rgba(14,165,233,0.18)]">
    <div class="relative h-56 overflow-hidden border-b border-slate-800">
      <img
        v-if="image"
        :src="image"
        :alt="title"
        class="absolute inset-0 h-full w-full scale-105 object-cover transition duration-500 group-hover:scale-110"
      />
      <div class="absolute inset-0 bg-gradient-to-br from-slate-950/80 via-slate-900/35 to-slate-950/80" />
      <div class="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(56,189,248,0.18),_transparent_32%)]" />

      <div class="relative flex h-full items-end justify-between gap-2 p-4 sm:p-6">
        <div class="max-w-[55%] sm:max-w-[60%]">
          <p v-if="featured" class="inline-flex rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-emerald-300">
            Projet phare
          </p>
        </div>

        <span class="max-w-[45%] rounded-full border border-slate-700/80 bg-slate-900/70 px-2.5 py-1 text-center text-[9px] font-medium text-slate-100 shadow-lg shadow-slate-950/30 backdrop-blur-sm sm:max-w-[55%] sm:text-xs">
          {{ title }}
        </span>
      </div>
    </div>

    <div class="p-5 sm:p-6">
      <h3 class="text-lg font-semibold text-white sm:text-xl">{{ title }}</h3>
      <p class="mt-3 text-sm leading-6 text-slate-300">
        {{ description }}
      </p>

      <div class="mt-5 flex flex-wrap gap-2">
        <span v-for="item in stack" :key="item" class="rounded-full border border-slate-700 bg-slate-800/90 px-2.5 py-1 text-[11px] font-medium text-slate-200 shadow-sm shadow-slate-950/20">
          {{ item }}
        </span>
      </div>
    </div>
  </article>
</template>
