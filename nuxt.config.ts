// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  modules: ['@vueuse/nuxt'],
  nitro: { experimental: { websocket: true } },
  devtools: { enabled: false },
});
