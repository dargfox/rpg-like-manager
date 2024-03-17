// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@pinia/nuxt', 
    'nuxt-icon',
  ],
  typescript: {
    strict: true
  },
  components: [
    "~/components",
    "~/components/main",
    "~/components/containers",
    "~/components/common",
    "~/components/profile",
  ],
  css: [
    "@/assets/scss/main.scss",
    // "@/assets/scss/variables.scss",
  ],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/assets/scss/variables.scss";'
        }
      }
    }
  }
})
