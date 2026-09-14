<script setup lang="ts">
const qualities = ['Travail en équipe', 'Rigueur', 'Organisation', 'Productivité', 'Gestion du stress', 'Précision']
</script>

<template>
  <div class="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
    <SectionTitle
      eyebrow="À propos"
      title="Développeur web motivé par les produits utiles et bien pensés"
      description="Je suis Bernard Daniel Kabou, développeur web full-stack et DevOps en Master 1 Ingénierie du Web à ESGI Rennes."
    />

    <div class="mt-12 grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
      <div class="rounded-[2rem] border border-slate-800 bg-gradient-to-br from-slate-900 via-slate-900 to-sky-950/50 p-8 shadow-2xl shadow-sky-500/10">
        <div class="mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-500 to-blue-700 text-2xl font-black text-white">
          BK
        </div>
        <p class="text-sm uppercase tracking-[0.24em] text-sky-300">Profil</p>
        <div class="mt-6 space-y-5 text-base leading-7 text-slate-300">
          <p>
            Passionné par les technologies web, j’aime concevoir des applications qui allient performance, élégance visuelle et expérience utilisateur de qualité.
          </p>
          <p>
            Mon objectif est de construire des solutions fiables, lisibles et prêtes à évoluer, avec une vraie sensibilité au besoin utilisateur et à l’architecture logicielle.
          </p>
          <p>
            Actuellement en alternance recherché, je m’intéresse particulièrement au développement web, à l’intégration de systèmes modernes et à l’optimisation des workflows de livraison.
          </p>
        </div>
      </div>

      <div class="space-y-6">
        <div class="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <h3 class="text-xl font-semibold text-white">Formation</h3>
          <ul class="mt-4 space-y-4 text-sm text-slate-300">
            <li><span class="font-semibold text-sky-300">2025 – Aujourd’hui</span> : Master 1 Ingénierie du Web — ESGI Rennes</li>
            <li><span class="font-semibold text-sky-300">2024 – 2025</span> : Licence 3 Architecture des Logiciels — ESGI Rennes</li>
            <li><span class="font-semibold text-sky-300">2023 – 2024</span> : Licence 3 — JUNIA-ISEN Lille</li>
            <li><span class="font-semibold text-sky-300">2021 – 2023</span> : Classe Préparatoire d’ingénieur — BEMTECH Dakar</li>
            <li><span class="font-semibold text-sky-300">2020 – 2021</span> : Baccalauréat Scientifique — Ziguinchor</li>
          </ul>
        </div>

        <div class="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <h3 class="text-xl font-semibold text-white">Qualités</h3>
          <div class="mt-4 flex flex-wrap gap-2">
            <SkillBadge v-for="quality in qualities" :key="quality" :label="quality" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
