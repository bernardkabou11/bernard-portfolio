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
    <div
      class="relative h-52 overflow-hidden border-b border-slate-800 bg-cover bg-center bg-no-repeat"
      :style="image ? { backgroundImage: `linear-gradient(135deg, rgba(2, 6, 23, 0.7), rgba(15, 23, 42, 0.28)), url('${image}')` } : {}"
    >
      <div class="flex h-full items-end justify-between p-6">
        <div>
          <p v-if="featured" class="mb-2 inline-flex rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-emerald-300">
            Projet phare
          </p>
          <div class="h-12 w-12 rounded-xl bg-sky-500/20 ring-1 ring-sky-400/40 backdrop-blur-sm" />
        </div>
        <span class="rounded-full border border-slate-700 bg-slate-900/70 px-2.5 py-1 text-xs text-slate-200 backdrop-blur-sm">{{ title }}</span>
      </div>
    </div>

    <div class="p-6">
      <h3 class="text-xl font-semibold text-white">{{ title }}</h3>
      <p class="mt-3 text-sm leading-6 text-slate-300">
        {{ description }}
      </p>

      <div class="mt-5 flex flex-wrap gap-2">
        <span v-for="item in stack" :key="item" class="rounded-full border border-slate-700 bg-slate-800 px-2.5 py-1 text-[11px] font-medium text-slate-200">
          {{ item }}
        </span>
      </div>
    </div>
  </article>
</template>
