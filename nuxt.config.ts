// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: [
    '~/assets/css/fonts.css',
    '~/assets/css/main.css',
  ],
  modules: ['@nuxt/eslint', 'nuxt-lucide-icons', '@nuxt/eslint'],
  vite: {
    plugins: [
      tailwindcss()
    ]
  },
  lucide: {
    namePrefix: 'Icon'
  },
  app: {
    head: {
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon/favicon.ico' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon/favicon-32x32.png' },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon/favicon-16x16.png' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/favicon/apple-touch-icon.png' },
        { rel: 'manifest', href: '/favicon/site.webmanifest' }
      ],
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Sistema para gestión de Holypoints de los jóvenes de Mansedumbre 2' },
        { name: 'author', content: 'José L. Beltre' },
        { name: 'keywords', content: 'Jóvenes, Administra, Holypoints, Mansedumbre 2' },
        { property: 'og:type', content: 'website' },
        { property: 'og:site_name', content: 'HolyPoints' },
        { property: 'og:image', content: '/og/default.png' },
        { property: 'og:image:width', content: '1200' },
        { property: 'og:image:height', content: '630' },
        { property: 'twitter:card', content: 'summary_large_image' },
        { property: 'twitter:title', content: 'HolyPoints' },
        { property: 'twitter:description', content: 'Sistema para gestión de Holypoints de los jóvenes de Mansedumbre 2' },
        { property: 'twitter:image', content: '/og/default.png' }
      ]
    }
  }
})