<script setup lang="ts">
const contactInfo = [
  { label: 'Email', value: 'bernard.kabou@gmail.com', href: 'mailto:bernard.kabou@gmail.com' },
  { label: 'Téléphone', value: '+33 6 95 94 04 51', href: 'tel:+33695940451' },
  { label: 'GitHub', value: 'github.com/bernardkabou', href: 'https://github.com/bernardkabou' },
  { label: 'Localisation', value: 'Rennes, France', href: '#' },
]
</script>

<template>
  <div class="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
    <SectionTitle
      eyebrow="Contact"
      title="Travaillons ensemble sur votre prochain projet"
      description="Je suis ouvert aux missions, à l’alternance et aux projets web innovants. N’hésitez pas à me contacter."
    />

    <div class="mt-12 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
      <div class="rounded-[2rem] border border-slate-800 bg-slate-900/70 p-7">
        <h3 class="text-xl font-semibold text-white">Informations</h3>
        <div class="mt-6 space-y-5">
          <a
            v-for="item in contactInfo"
            :key="item.label"
            :href="item.href"
            target="_blank"
            rel="noreferrer"
            class="flex items-center justify-between rounded-xl border border-slate-800 bg-slate-950/70 px-4 py-3 text-sm text-slate-300 transition hover:border-sky-500/40 hover:text-white"
          >
            <span class="font-medium text-slate-400">{{ item.label }}</span>
            <span>{{ item.value }}</span>
          </a>
        </div>
      </div>

      <form class="rounded-[2rem] border border-slate-800 bg-slate-900/70 p-7">
        <div class="grid gap-5 sm:grid-cols-2">
          <div>
            <label class="mb-2 block text-sm font-medium text-slate-300">Nom</label>
            <input type="text" class="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-white outline-none transition focus:border-sky-500" placeholder="Votre nom" />
          </div>
          <div>
            <label class="mb-2 block text-sm font-medium text-slate-300">Email</label>
            <input type="email" class="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-white outline-none transition focus:border-sky-500" placeholder="Votre email" />
          </div>
        </div>

        <div class="mt-5">
          <label class="mb-2 block text-sm font-medium text-slate-300">Objet</label>
          <input type="text" class="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-white outline-none transition focus:border-sky-500" placeholder="Objet du message" />
        </div>

        <div class="mt-5">
          <label class="mb-2 block text-sm font-medium text-slate-300">Message</label>
          <textarea rows="6" class="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-white outline-none transition focus:border-sky-500" placeholder="Décrivez votre projet..." />
        </div>

        <button type="submit" class="mt-6 rounded-full bg-sky-500 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-sky-500/30 transition hover:bg-sky-400">
          Envoyer le message
        </button>
      </form>
    </div>
  </div>
</template>
