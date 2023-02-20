// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    // https://github.com/danielroe/nuxt-vitest
    'nuxt-vitest',
    // https://v8.i18n.nuxtjs.org
    '@nuxtjs/i18n',
    // https://github.com/nuxt-modules/icon
    'nuxt-icon',
  ],

  i18n: {
    // https://i18n.nuxtjs.org/options-reference#baseurl
    baseUrl: '',
    // https://i18n.nuxtjs.org/options-reference#strategy
    strategy: 'prefix',
    defaultLocale: 'en',
    lazy: true,
    langDir: './locales/',
    locales: [
      {
        code: 'en',
        name: 'English',
        file: 'en.json',
      },
      {
        code: 'fr',
        name: 'Français',
        file: 'fr.json',
      },
    ],
  },
})
