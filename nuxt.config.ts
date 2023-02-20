// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    // https://github.com/danielroe/nuxt-vitest
    'nuxt-vitest',
    // https://v8.i18n.nuxtjs.org
    '@nuxtjs/i18n',
  ],

  i18n: {
    vueI18n: {
      legacy: false,
      locale: 'en',
      messages: {
        en: {
          welcome: 'Welcome',
        },
        fr: {
          welcome: 'Bienvenue',
        },
      },
    },
  },
})
