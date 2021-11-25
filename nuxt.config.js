export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {

    htmlAttrs: {
      lang: 'nl-NL',
    },

    title: 'NUXT Starter Kit',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nomad Ventures Nuxt Starter Kit' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global SCSS: https://github.com/nuxt-community/style-resources-module
  styleResources: {
    scss: [
      "assets/scss/abstracts/_variables.scss",
      "assets/scss/abstracts/_mixins.scss",
      "assets/scss/abstracts/_functions.scss"
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["@/assets/scss/style.scss"],

  // Storybook Documentation: https://storybook.nuxtjs.org/
  storybook: {
    // Options
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/style-resources',
    '@nuxtjs/google-analytics',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  // https://go.nuxtjs.dev/axios
  // https://go.nuxtjs.dev/pwa
  // https://github.com/nuxt-community/community-modules/tree/master/packages/localtunnel
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/redirect-module',
    'nuxt-webfontloader',
    '@nuxtjs/sitemap',
    '@nuxtjs/feed',
    'nuxt-lazy-load',
    '@nuxtjs/robots',
    '@nuxtjs/localtunnel',
    "nuxt-imagemin",
    '@nuxtjs/i18n',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // i18n Documentation: https://i18n.nuxtjs.org/
  i18n: {
    /* module options */
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    meta: {
      name: "Nuxt Starter Kit",
      author: "Nomad Ventures",
      description: "Put a description of your PWA app here",
      theme_color: "#0080ff",
      lang: "nl",
      ogType: "website",
      ogHost: "https://nuxt.nomadventrs.com",
    }
  },

  // Sitemap Docmentation: https://sitemap.nuxtjs.org/
  sitemap: {
    path: "/sitemap.xml",
    hostname: "https://nuxt.nomadventrs.com",
    cacheTime: 1000 * 60 * 15,
    gzip: true
  },

  // Feed Documentation: https://github.com/nuxt-community/feed-module
  feed: [
    {
      path: "/feed.xml", // The route to your feed.
      async create(feed) {}, // The create function (see below)
      cacheTime: 1000 * 60 * 15, // How long should the feed be cached
      type: "rss2", // Can be: rss2, atom1, json1
      data: ["Some additional data"] // Will be passed as 2nd argument to `create` function
    }
  ],

  // Webfontloader (async custom font loader): https://github.com/Developmint/nuxt-webfontloader
  webfontloader: {
    google: {
      families: ['Roboto+Condensed:wght@400,700&display=swap']
    }
  },

  // Google Analytics Documentation: https://google-analytics.nuxtjs.org/
  googleAnalytics: {
    //id: 'UA-XXX-X'
  },

  // Adds a redirect with trailing slash
  redirect: [
    {
        from: '^.*(?<!\/)$',
        to: (from, req) => req.url + '/'
    }
  ],

  // Robot documentation: https://github.com/nuxt-community/robots-module
  robots: {
    UserAgent: "*",
    Disallow: "/"
  },

  router: {
    trailingSlash: true,
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
