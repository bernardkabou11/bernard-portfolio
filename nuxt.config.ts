import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  runtimeConfig: {
    resendApiKey: process.env.RESEND_API_KEY || '',
  },
  app: {
    head: {
      htmlAttrs: {
        lang: 'fr',
      },
      bodyAttrs: {
        class: 'bg-slate-950',
      },
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },
})
