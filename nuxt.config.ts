// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: {
    enabled: false,
    timeline: {
      enabled: true,
    },
  },
  modules: [
    '@vueuse/nuxt',
    '@unocss/nuxt',
    '@pinia/nuxt',
    'nuxt-icons',
    '@nuxt/image',
  ],
  css: [
    '~/assets/css/main.css',
  ],
  devServer: {
    port: 8000,
  },
})
