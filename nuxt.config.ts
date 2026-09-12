// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  css: [
    "bootstrap/dist/css/bootstrap.min.css"
  ],

  app: {
    head: {
      title: "My Nuxt Project",
      meta:[
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },

        //Default SEO description
        { key: 'description', name: 'description', content: 'A creative project showcasing Boba & Moji adventures through stories, images, maps, and interactive pages.' }
      ]
    }
  }
})
