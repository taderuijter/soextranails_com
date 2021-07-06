export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'So Extra Nails - Go for extra',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: ["@/assets/scss/style.scss"],

  // Style Resoources
  // https://www.npmjs.com/package/@nuxtjs/style-resources
  styleResources: {
    scss: [
      "assets/scss/abstracts/_variables.scss",
      "assets/scss/abstracts/_mixins.scss",
      "assets/scss/abstracts/_functions.scss"
    ]
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/style-resources',
    'nuxt-webfontloader',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en'
    }
  },

  // Webfontloader (https://github.com/Developmint/nuxt-webfontloader)
  webfontloader: {
    google: {
      families: ['Lato:400,700'] //Loads Lato font with weights 400 and 700
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

    // Generate function: (https://nuxtjs.org/docs/2.x/configuration-glossary/configuration-generate)
    generate: {
      interval: 200,
      fallback: true,
    }
}
