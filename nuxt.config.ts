// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', ['@nuxtjs/google-fonts', {
    families: {
      Inter: '300..900'
    }
}], "@nuxtjs/seo", "nuxt-gtag"],
  site: {
    url: 'https://pooltabledoctor.com',
    name: 'The Pool Table Doctor',
    description: 'The Pool Table Doctor has been happily serving Central Florida since 1994. We offer industry-leading pool table repairs, refelting, and more. Contact us today for a free quote, and find out why clients big and small trust The Pool Table Doctor.',
    defaultLocale: 'en', // not needed if you have @nuxtjs/i18n installed
  },
  gtag: {
    id: 'G-SD187W76SS'
  },
  app: {
    head: {  
      htmlAttrs: {
        lang: 'en',
      },
    }
  }
})