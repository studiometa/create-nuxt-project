export default {
  mode: 'spa',
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || '',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#000' },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: ['~/plugins/vue-icon'],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    // Doc: https://github.com/nuxt-community/stylelint-module
    '@nuxtjs/stylelint-module',
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss',
    // Doc: https://github.com/Developmint/nuxt-svg-loader
    'nuxt-svg-loader',
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    // Doc: https://pwa.nuxtjs.org/setup.html
    '@nuxtjs/pwa',
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv',
    <%_ if (i18n) { _%>
    // Doc: https://nuxt-community.github.io/nuxt-i18n/
    'nuxt-i18n',
    <%_ } _%>
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /**
   * Nuxt Tailwind CSS configuration
   * @see https://github.com/nuxt-community/tailwindcss-module
   */
  tailwindcss: {
    configPath: '~/tailwind.config.js',
    cssPath: '~/assets/scss/app.scss',
    purgeCSSInDev: false,
  },
  /**
   * Purge CSS configuration
   * Note: the Purge CSS module is injected by the Tailwind CSS module.
   * @see https://github.com/Developmint/nuxt-purgecss#options
   */
  purgeCSS: {},
  <%_ if (i18n) { _%>
  /**
   * i18n module configuration
   * @see https://nuxt-community.github.io/nuxt-i18n/options-reference.html
   */
  i18n: {},
  <%_ } _%>
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    // extend(config, ctx) {},
    extractCSS: true,
  },
};
