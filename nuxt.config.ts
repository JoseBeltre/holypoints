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
  }
})