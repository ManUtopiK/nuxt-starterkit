// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    // https://github.com/danielroe/nuxt-vitest
    'nuxt-vitest',
    // https://v8.i18n.nuxtjs.org
    '@nuxtjs/i18n',
    // https://github.com/nuxt-modules/icon
    'nuxt-icon',
    //
    '@anu-vue/nuxt', '@unocss/nuxt',
  ],

  css: ['@anu-vue/preset-theme-default/dist/style.css'],
  // https://github.com/unocss/unocss/issues/2113
  sourcemap: {
    server: true,
    client: false,
  },

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
