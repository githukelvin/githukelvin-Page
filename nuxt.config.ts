// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  css: ['./app/assets/css/main.css'],

  vite: {
    plugins: [tailwindcss()],
  },

  app: {
    head: {
      title: 'Kelvin Githu | Full-Stack Developer',
      htmlAttrs: {
        lang: 'en'
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: 'Full-Stack Developer specializing in SAP Business One integrations, Vue.js, and enterprise solutions. Building scalable applications with Laravel, React Native, and modern web technologies.' },
        { name: 'format-detection', content: 'telephone=no' },
        // Open Graph
        { property: 'og:title', content: 'Kelvin Githu | Full-Stack Developer' },
        { property: 'og:description', content: 'Full-Stack Developer specializing in SAP Business One integrations, Vue.js, and enterprise solutions.' },
        { property: 'og:type', content: 'website' },
        // Twitter Card
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'Kelvin Githu | Full-Stack Developer' },
        { name: 'twitter:description', content: 'Full-Stack Developer specializing in SAP Business One integrations, Vue.js, and enterprise solutions.' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        // Google Fonts
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { href: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap', rel: 'stylesheet' }
      ]
    }
  },

  modules: [
    '@vueuse/nuxt',
    '@nuxtjs/color-mode'
  ],

  colorMode: {
    classSuffix: '',
    preference: 'system',
    fallback: 'light',
  },
})
