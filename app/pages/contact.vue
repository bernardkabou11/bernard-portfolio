<script setup lang="ts">
const contactInfo = [
  { label: 'Email', value: 'bernard.kabou@gmail.com', href: 'mailto:bernard.kabou@gmail.com' },
  { label: 'Téléphone', value: '+33 6 95 94 04 51', href: 'tel:+33695940451' },
  { label: 'GitHub', value: 'github.com/bernardkabou11', href: 'https://github.com/bernardkabou11' },
  { label: 'Localisation', value: 'Rennes, France', href: '#' },
]

const form = reactive({
  name: '',
  email: '',
  message: '',
})

const isSubmitting = ref(false)
const formStatus = ref<{ type: 'success' | 'error'; message: string } | null>(null)

const submitForm = async () => {
  if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
    formStatus.value = {
      type: 'error',
      message: 'Veuillez remplir votre nom, votre email et votre message.',
    }
    return
  }

  isSubmitting.value = true
  formStatus.value = null

  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    })

    const data = await response.json()

    if (!response.ok) {
      throw new Error(data?.message || 'L’envoi du message a échoué.')
    }

    formStatus.value = {
      type: 'success',
      message: 'Votre message a bien été envoyé. Je vous répondrai rapidement.',
    }
    form.name = ''
    form.email = ''
    form.message = ''
  } catch (error) {
    formStatus.value = {
      type: 'error',
      message: error instanceof Error ? error.message : 'Une erreur est survenue. Réessayez plus tard.',
    }
  } finally {
    isSubmitting.value = false
  }
}
</script>

<template>
  <div class="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
    <SectionTitle
      eyebrow="Contact"
      title="Travaillons ensemble sur votre prochain projet"
      description="Je suis ouvert aux missions, à l’alternance et aux projets web innovants. N’hésitez pas à me contacter."
    />

    <div class="mt-12 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
      <div class="rounded-[2rem] border border-slate-800 bg-slate-900/70 p-5 sm:p-7">
        <h3 class="text-xl font-semibold text-white">Informations</h3>
        <div class="mt-6 space-y-5">
          <a
            v-for="item in contactInfo"
            :key="item.label"
            :href="item.href"
            target="_blank"
            rel="noreferrer"
            class="flex flex-col gap-2 rounded-xl border border-slate-800 bg-slate-950/70 px-4 py-3 text-sm text-slate-300 transition hover:border-sky-500/40 hover:text-white sm:flex-row sm:items-center sm:justify-between"
          >
            <span class="font-medium text-slate-400">{{ item.label }}</span>
            <span>{{ item.value }}</span>
          </a>
        </div>
      </div>

      <form class="rounded-[2rem] border border-slate-800 bg-slate-900/70 p-5 sm:p-7" @submit.prevent="submitForm">
        <div class="grid gap-5 sm:grid-cols-2">
          <div>
            <label for="name" class="mb-2 block text-sm font-medium text-slate-300">Nom</label>
            <input id="name" v-model="form.name" type="text" class="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-white outline-none transition focus:border-sky-500" placeholder="Votre nom" />
          </div>
          <div>
            <label for="email" class="mb-2 block text-sm font-medium text-slate-300">Email</label>
            <input id="email" v-model="form.email" type="email" class="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-white outline-none transition focus:border-sky-500" placeholder="Votre email" />
          </div>
        </div>

        <div class="mt-5">
          <label for="message" class="mb-2 block text-sm font-medium text-slate-300">Message</label>
          <textarea id="message" v-model="form.message" rows="6" class="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-white outline-none transition focus:border-sky-500" placeholder="Décrivez votre projet..." />
        </div>

        <div v-if="formStatus" :class="['mt-5 rounded-xl border px-4 py-3 text-sm', formStatus.type === 'success' ? 'border-emerald-500/30 bg-emerald-500/10 text-emerald-200' : 'border-red-500/30 bg-red-500/10 text-red-200']">
          {{ formStatus.message }}
        </div>

        <button type="submit" :disabled="isSubmitting" class="mt-6 rounded-full bg-sky-500 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-sky-500/30 transition hover:bg-sky-400 disabled:cursor-not-allowed disabled:opacity-70">
          {{ isSubmitting ? 'Envoi en cours...' : 'Envoyer le message' }}
        </button>
      </form>
    </div>
  </div>
</template>
