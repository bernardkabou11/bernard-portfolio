<script setup lang="ts">
import { onMounted } from 'vue'
import * as THREE from 'three'

const skills = {
  frontend: ['Vue.js', 'Nuxt', 'React', 'Angular', 'TailwindCSS', 'Three.js'],
  backend: ['Node.js', 'Express.js', 'NestJS', 'API REST', 'Swagger / OpenAPI'],
  data: ['MySQL', 'MongoDB', 'PostgreSQL', 'SQL'],
  devops: ['Docker', 'Kubernetes', 'Terraform', 'Portainer', 'GitHub Actions', 'Linux'],
  languages: ['JavaScript / TypeScript', 'Java', 'Python', 'PHP', 'C++'],
}

const projectList = [
  {
    title: 'Refonte Guide Michelin',
    description: 'Projet hackathon : refonte du site Guide Michelin avec une approche moderne orientée Gen Z, une meilleure UX et un univers visuel plus engageant.',
    stack: ['Nuxt', 'TailwindCSS', 'UX/UI'],
    featured: true,
    link: '/projects',
  },
  {
    title: 'E-commerce parfumerie',
    description: 'Application complète de boutique en ligne avec gestion des produits, du panier, des commandes et de l’authentification utilisateur.',
    stack: ['Vue.js', 'Node.js', 'API REST'],
    link: '/projects',
  },
  {
    title: 'Plateforme coaching sportif',
    description: 'Dashboard de suivi de programmes et de performances, pensé pour le suivi personnalisé et la motivation des utilisateurs.',
    stack: ['Nuxt', 'PostgreSQL', 'Dashboard'],
    link: '/projects',
  },
]

const stats = [
  { value: '5+', label: 'années d’apprentissage / projets' },
  { value: '10+', label: 'technologies maîtrisées' },
  { value: '3', label: 'domaines : web, data, infra' },
]

const heroCanvas = ref<HTMLDivElement | null>(null)

onMounted(() => {
  if (!heroCanvas.value) return

  const scene = new THREE.Scene()
  const camera = new THREE.PerspectiveCamera(55, heroCanvas.value.clientWidth / heroCanvas.value.clientHeight, 0.1, 1000)
  camera.position.z = 8

  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
  renderer.setSize(heroCanvas.value.clientWidth, heroCanvas.value.clientHeight)
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
  heroCanvas.value.appendChild(renderer.domElement)

  const particlesGeometry = new THREE.BufferGeometry()
  const count = 1200
  const positions = new Float32Array(count * 3)

  for (let i = 0; i < count * 3; i += 3) {
    positions[i] = (Math.random() - 0.5) * 12
    positions[i + 1] = (Math.random() - 0.5) * 12
    positions[i + 2] = (Math.random() - 0.5) * 12
  }

  particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))

  const particlesMaterial = new THREE.PointsMaterial({
    color: '#7dd3fc',
    size: 0.04,
    transparent: true,
    opacity: 0.9,
  })

  const particles = new THREE.Points(particlesGeometry, particlesMaterial)
  scene.add(particles)

  const ambientLight = new THREE.AmbientLight('#93c5fd', 1.2)
  scene.add(ambientLight)

  const animate = () => {
    requestAnimationFrame(animate)
    particles.rotation.x += 0.0007
    particles.rotation.y += 0.0009
    renderer.render(scene, camera)
  }

  animate()

  const handleResize = () => {
    if (!heroCanvas.value) return
    camera.aspect = heroCanvas.value.clientWidth / heroCanvas.value.clientHeight
    camera.updateProjectionMatrix()
    renderer.setSize(heroCanvas.value.clientWidth, heroCanvas.value.clientHeight)
  }

  window.addEventListener('resize', handleResize)

  onBeforeUnmount(() => {
    window.removeEventListener('resize', handleResize)
    renderer.dispose()
    particlesGeometry.dispose()
    particlesMaterial.dispose()
  })
})
</script>

<template>
  <div class="relative overflow-hidden">
    <div class="absolute inset-0 bg-grid-slate opacity-40" />

    <section class="relative mx-auto max-w-6xl px-4 pb-20 pt-16 sm:px-6 lg:px-8 lg:pb-28 lg:pt-20">
      <div class="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <div class="mb-6 inline-flex items-center gap-2 rounded-full border border-sky-500/30 bg-sky-500/10 px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] text-sky-300">
            <span class="h-2 w-2 rounded-full bg-sky-400" />
            Disponible pour alternance
          </div>

          <h1 class="max-w-xl text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
            Développeur web <span class="text-sky-400">Full-Stack</span> & DevOps
          </h1>

          <p class="mt-6 max-w-xl text-lg leading-8 text-slate-300">
            Je conçois des applications web modernes, bien structurées et orientées performance, en combinant design, développement et infrastructure.
          </p>

          <div class="mt-8 flex flex-wrap gap-4">
            <NuxtLink to="/projects" class="rounded-full bg-sky-500 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-sky-500/30 transition hover:bg-sky-400">
              Voir mes projets
            </NuxtLink>
            <NuxtLink to="/contact" class="rounded-full border border-slate-700 bg-slate-900/60 px-6 py-3 text-sm font-semibold text-slate-200 transition hover:border-slate-500 hover:text-white">
              Me contacter
            </NuxtLink>
          </div>

          <div class="mt-10 flex flex-wrap gap-6 text-sm text-slate-300">
            <div>
              <p class="text-2xl font-bold text-white">Master 1</p>
              <p>Ingénierie du Web</p>
            </div>
            <div>
              <p class="text-2xl font-bold text-white">+10</p>
              <p>Technologies</p>
            </div>
            <div>
              <p class="text-2xl font-bold text-white">Rennes</p>
              <p>France</p>
            </div>
          </div>
        </div>

        <div class="relative">
          <div class="absolute inset-0 -z-10 rounded-[2rem] bg-gradient-to-br from-sky-500/20 via-blue-500/5 to-transparent blur-3xl" />
          <div class="relative overflow-hidden rounded-[2rem] border border-slate-800 bg-slate-900/60 p-4 shadow-[0_30px_100px_rgba(14,165,233,0.12)] backdrop-blur-sm">
            <div class="h-[420px] rounded-[1.5rem] border border-slate-800 bg-slate-950/70" ref="heroCanvas" />
            <div class="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-slate-950 to-transparent" />
          </div>
        </div>
      </div>
    </section>

    <section class="relative mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
      <SectionTitle
        eyebrow="Stats"
        title="Un profil technique polyvalent"
        description="J’aime créer des solutions complètes, du design à l’infrastructure, avec une attention particulière à la qualité, la performance et la maintenabilité."
      />

      <div class="mt-10 grid gap-6 md:grid-cols-3">
        <div v-for="stat in stats" :key="stat.label" class="rounded-2xl border border-slate-800 bg-slate-900/70 p-6 text-center">
          <p class="text-3xl font-black text-sky-400">{{ stat.value }}</p>
          <p class="mt-2 text-sm text-slate-300">{{ stat.label }}</p>
        </div>
      </div>
    </section>

    <section class="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
      <SectionTitle
        eyebrow="Compétences"
        title="Des compétences couvrant le web et l’infrastructure"
      />

      <div class="mt-12 grid gap-8 md:grid-cols-2 xl:grid-cols-5">
        <div v-for="(group, key) in skills" :key="key" class="rounded-2xl border border-slate-800 bg-slate-900/70 p-5">
          <h3 class="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-sky-300">
            {{ key === 'frontend' ? 'Front-end' : key === 'backend' ? 'Back-end' : key === 'data' ? 'Base de données' : key === 'devops' ? 'DevOps' : 'Langages' }}
          </h3>
          <div class="flex flex-wrap gap-2">
            <SkillBadge v-for="skill in group" :key="skill" :label="skill" />
          </div>
        </div>
      </div>
    </section>

    <section class="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
      <SectionTitle
        eyebrow="Projets"
        title="Des réalisations axées sur l’utilité et la qualité"
        description="Chaque projet me permet de développer des compétences techniques et de mieux comprendre les enjeux métiers et utilisateur."
      />

      <div class="mt-12 grid gap-8 lg:grid-cols-3">
        <ProjectCard v-for="project in projectList" :key="project.title" v-bind="project" />
      </div>
    </section>
  </div>
</template>
