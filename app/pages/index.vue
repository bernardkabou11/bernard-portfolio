<script setup lang="ts">
import * as THREE from 'three'
import projectMichelin from '~/assets/images/projects/refonte-guide-michelin.svg'
import projectParfum from '~/assets/images/projects/ecommerce-parfumerie.svg'
import projectCoaching from '~/assets/images/projects/plateforme-coaching.svg'

const skills = {
  frontend: ['Vue.js', 'Nuxt', 'React', 'Angular', 'TailwindCSS', 'Three.js'],
  backend: ['Node.js', 'Express.js', 'NestJS', 'API REST', 'Swagger / OpenAPI'],
  data: ['MySQL', 'MongoDB', 'PostgreSQL', 'SQL'],
  devops: ['Docker', 'Kubernetes', 'Terraform', 'Portainer', 'GitHub Actions', 'Linux', 'n8n'],
  languages: ['JavaScript / TypeScript', 'Java', 'Python', 'PHP', 'C++'],
}

const projectList = [
  {
    title: 'Refonte Guide Michelin',
    description: 'Projet hackathon : refonte du site Guide Michelin avec une approche moderne orientée Gen Z, une meilleure UX et un univers visuel plus engageant.',
    stack: ['Nuxt', 'TailwindCSS', 'UX/UI'],
    featured: true,
    link: '/projects',
    image: projectMichelin,
  },
  {
    title: 'E-commerce parfumerie',
    description: 'Application complète de boutique en ligne avec gestion des produits, du panier, des commandes et de l’authentification utilisateur.',
    stack: ['Vue.js', 'Node.js', 'API REST'],
    link: '/projects',
    image: projectParfum,
  },
  {
    title: 'Plateforme coaching sportif',
    description: 'Dashboard de suivi de programmes et de performances, pensé pour le suivi personnalisé et la motivation des utilisateurs.',
    stack: ['Nuxt', 'PostgreSQL', 'Dashboard'],
    link: '/projects',
    image: projectCoaching,
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

  const canvasContainer = heroCanvas.value
  const scene = new THREE.Scene()
  scene.fog = new THREE.FogExp2('#020817', 0.12)

  const camera = new THREE.PerspectiveCamera(55, canvasContainer.clientWidth / canvasContainer.clientHeight, 0.1, 1000)
  camera.position.z = 8

  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
  renderer.setSize(canvasContainer.clientWidth, canvasContainer.clientHeight)
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
  canvasContainer.appendChild(renderer.domElement)

  const geometry = new THREE.BufferGeometry()
  const count = 2200
  const positions = new Float32Array(count * 3)
  const colors = new Float32Array(count * 3)

  for (let i = 0; i < count; i += 1) {
    const radius = 2 + Math.random() * 5.8
    const angle = Math.random() * Math.PI * 2
    const y = (Math.random() - 0.5) * 10

    positions[i * 3] = Math.cos(angle) * radius
    positions[i * 3 + 1] = y
    positions[i * 3 + 2] = Math.sin(angle) * radius

    const color = new THREE.Color().setHSL(0.55 + Math.random() * 0.15, 0.8, 0.65)
    colors[i * 3] = color.r
    colors[i * 3 + 1] = color.g
    colors[i * 3 + 2] = color.b
  }

  geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
  geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3))

  const particlesMaterial = new THREE.PointsMaterial({
    size: 0.06,
    transparent: true,
    opacity: 0.95,
    vertexColors: true,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
  })

  const particles = new THREE.Points(geometry, particlesMaterial)
  scene.add(particles)

  const ringGeometry = new THREE.TorusKnotGeometry(1.7, 0.38, 220, 32)
  const ringMaterial = new THREE.MeshStandardMaterial({
    color: '#67e8f9',
    emissive: '#38bdf8',
    emissiveIntensity: 0.8,
    metalness: 0.9,
    roughness: 0.2,
    transparent: true,
    opacity: 0.75,
  })
  const ring = new THREE.Mesh(ringGeometry, ringMaterial)
  ring.rotation.x = Math.PI / 2.8
  scene.add(ring)

  const ambientLight = new THREE.AmbientLight('#dbeafe', 1.5)
  const pointLight = new THREE.PointLight('#7dd3fc', 1.8, 30, 2)
  pointLight.position.set(3, 4, 6)
  scene.add(ambientLight, pointLight)

  const pointer = new THREE.Vector2(0, 0)

  const handlePointerMove = (event: PointerEvent) => {
    const rect = canvasContainer.getBoundingClientRect()
    pointer.x = ((event.clientX - rect.left) / rect.width) * 2 - 1
    pointer.y = -(((event.clientY - rect.top) / rect.height) * 2 - 1)
  }

  window.addEventListener('pointermove', handlePointerMove)

  const animate = () => {
    requestAnimationFrame(animate)

    particles.rotation.x += 0.0008
    particles.rotation.y += 0.0011
    particles.position.x += (pointer.x * 1.8 - particles.position.x) * 0.03
    particles.position.y += (pointer.y * 1.2 - particles.position.y) * 0.03

    ring.rotation.x += 0.008
    ring.rotation.y += 0.01
    ring.position.z = -1

    renderer.render(scene, camera)
  }

  animate()

  const handleResize = () => {
    if (!canvasContainer) return
    camera.aspect = canvasContainer.clientWidth / canvasContainer.clientHeight
    camera.updateProjectionMatrix()
    renderer.setSize(canvasContainer.clientWidth, canvasContainer.clientHeight)
  }

  window.addEventListener('resize', handleResize)

  onBeforeUnmount(() => {
    window.removeEventListener('resize', handleResize)
    window.removeEventListener('pointermove', handlePointerMove)
    renderer.dispose()
    geometry.dispose()
    particlesMaterial.dispose()
    ringGeometry.dispose()
    ringMaterial.dispose()
  })
})
</script>

<template>
  <div class="relative overflow-hidden">
    <section class="relative mx-auto max-w-6xl px-4 pb-20 pt-16 sm:px-6 lg:px-8 lg:pb-28 lg:pt-20">
      <div class="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <div class="mb-6 inline-flex max-w-full flex-wrap items-center gap-2 rounded-full border border-sky-500/30 bg-sky-500/10 px-3 py-2 text-[10px] font-medium uppercase tracking-[0.14em] text-sky-300 sm:px-4 sm:text-xs sm:tracking-[0.2em]">
            <span class="h-2 w-2 rounded-full bg-sky-400" />
            <span>Disponible pour alternance</span>
          </div>

          <h1 class="max-w-xl text-[2.1rem] font-black leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl">
            Développeur web <span class="text-sky-400">Full-Stack</span> & DevOps
          </h1>

          <p class="mt-6 max-w-xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
            Je conçois des applications web modernes, bien structurées et orientées performance, en combinant design, développement et infrastructure.
          </p>

          <div class="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <NuxtLink to="/projects" class="w-full rounded-full bg-sky-500 px-6 py-3 text-center text-sm font-semibold text-slate-950 shadow-lg shadow-sky-500/30 transition hover:bg-sky-400 sm:w-auto">
              Voir mes projets
            </NuxtLink>
            <NuxtLink to="/contact" class="w-full rounded-full border border-slate-700 bg-slate-900/60 px-6 py-3 text-center text-sm font-semibold text-slate-200 transition hover:border-slate-500 hover:text-white sm:w-auto">
              Me contacter
            </NuxtLink>
          </div>

          <div class="mt-10 grid gap-4 text-sm text-slate-300 sm:grid-cols-3 sm:gap-6">
            <div>
              <p class="text-2xl font-bold text-white">Master 2</p>
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

      <div class="mt-12 grid gap-8 sm:grid-cols-2 xl:grid-cols-5">
        <div v-for="(group, key) in skills" :key="key" class="rounded-2xl border border-slate-800 bg-slate-900/70 p-5">
          <h3 class="mb-4 text-xs font-semibold uppercase tracking-[0.16em] text-sky-300 sm:text-sm sm:tracking-[0.2em]">
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
