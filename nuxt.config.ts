// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  telemetry: false,
  srcDir: 'src/',
  devtools: { enabled: true },
  css: ['@/assets/scss/default.scss'],
  app: {
    head: {
      htmlAttrs: {
        lang: 'en'
      },
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'Southern California SCCA RallyCross | CalClub RallyX',
      meta: [
        {
          name: 'description',
          content: 'The official CalClub SCCA Rallycross website for all rallyx related events in Southern California'
        }
      ]
    }
  },
  modules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/stylelint-module'
  ],
  eslint: {
    failOnWarning: true,
    failOnError: true
  },
})
