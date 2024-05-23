// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    ['@nuxtjs/google-fonts', {
      families: {
        Inter: '300..900'
      }
  }]
  ],
  routeRules: {
    '/': { redirect: { to: '/', statusCode: 301 } },
  },
})