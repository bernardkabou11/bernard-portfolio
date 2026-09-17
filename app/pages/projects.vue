<script setup lang="ts">
import projectMichelin from '~/assets/images/projects/refonte-guide-michelin.svg'
import projectParfum from '~/assets/images/projects/ecommerce-parfumerie.svg'
import projectCoaching from '~/assets/images/projects/plateforme-coaching.svg'

const projects = [
  {
    title: 'Refonte du site Guide Michelin pour la Gen Z',
    description: 'Modernisation UX/UI, identité visuelle et refonte de l’expérience utilisateur pour un site plus contemporain et engageant.',
    stack: ['Nuxt', 'TailwindCSS', 'UX/UI', 'Design system'],
    featured: true,
    image: projectMichelin,
  },
  {
    title: 'E-commerce parfumerie',
    description: 'Application web complète intégrant catalogue, panier, commandes, gestion des comptes et authentification.',
    stack: ['Vue.js', 'Node.js', 'Express.js', 'MongoDB'],
    image: projectParfum,
  },
  {
    title: 'Coaching sportif',
    description: 'Plateforme de programmes, dashboard et suivi personnalisé pour accompagner les utilisateurs dans leur progression.',
    stack: ['Nuxt', 'PostgreSQL', 'Dashboard', 'REST API'],
    image: projectCoaching,
  },
  {
    title: 'Vente alimentaire — JUNIA-ISEN',
    description: 'Application web de vente de produits alimentaires, pensée pour une expérience simple et efficace.',
    stack: ['JavaScript', 'PHP', 'MySQL'],
    image: projectMichelin,
  },
  {
    title: 'Africa Mobile — BEMTECH Dakar',
    description: 'Développement d’un site vitrine professionnel pour accompagner la présence digitale de l’entreprise.',
    stack: ['HTML', 'CSS', 'JavaScript', 'Web design'],
    image: projectParfum,
  },
  {
    title: 'Jeu Pokémon en Java',
    description: 'Projet de logique de jeu centrée sur les combats, l’inventaire et la gestion de l’état du personnage.',
    stack: ['Java', 'Programmation objet', 'Game logic'],
    image: projectCoaching,
  },
  {
    title: 'Base de données pour librairie',
    description: 'Conception complète avec schémas, relations, contraintes et modélisation UML pour une librairie.',
    stack: ['SQL', 'UML', 'Modélisation', 'MySQL'],
    image: projectMichelin,
  },
  {
    title: 'Serveur Linux',
    description: 'Configuration d’un serveur de partage de fichiers avec gestion des utilisateurs, permissions et accès réseau.',
    stack: ['Linux', 'Administration système', 'Permissions'],
    image: projectParfum,
  },
]
</script>

<template>
  <div class="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
    <SectionTitle
      eyebrow="Projets"
      title="Des projets variés, du web à l’infrastructure"
      description="J’ai travaillé sur plusieurs projets couvrant le développement logiciel, l’UX/UI, les bases de données et l’administration système."
    />

    <div class="mt-12 grid gap-8 lg:grid-cols-2 xl:grid-cols-3">
      <ProjectCard v-for="project in projects" :key="project.title" v-bind="project" />
    </div>
  </div>
</template>
