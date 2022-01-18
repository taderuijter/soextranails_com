export default {
  // Target: https://go.nuxtjs.dev/config-target
  // target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    htmlAttrs: {
      lang: 'en'
    },

    title: 'So Extra Nails 💅 Nail Art Rotterdam • BIAB™, Extensions & more',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Be bold and express yourself with bespoke nail art on natural or artificial nails. Located in the city centre of Rotterdam and still open for new bookings!' },
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

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/lazysizes', mode: 'client' },
    { src: '~/plugins/axe.js', mode: 'client' },
    '~/plugins/composition-api.js',
    '~/plugins/storyblok-rich-text-renderer.js'
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
    'nuxt-responsive-loader',
    '@nuxtjs/pwa',
    '@nuxtjs/redirect-module',
    'nuxt-webfontloader',
    '@nuxtjs/sitemap',
    '@nuxtjs/feed',
    '@nuxtjs/robots',
    '@nuxtjs/i18n',
    [
      'storyblok-nuxt',
      {
        accessToken: 'EnZJYpQOCQQXRQrZqIkHBQtt',
        cacheProvider: 'memory'
      }
    ],
  ],

  responsiveLoader: {
    name: 'images/[name]-[width].[ext]',
    sizes: [320, 425, 768, 1024, 1366, 1920],
    quality: 85,
    adapter: require('responsive-loader/sharp'),
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // i18n Documentation: https://i18n.nuxtjs.org/
  i18n: {
    /* module options */
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  // pwa: {
  //   meta: {
  //     name: "So Extra Nails",
  //     author: "Kim Kers",
  //     description: "Be bold and express yourself with bespoke nail art on natural or artificial nails.",
  //     theme_color: "#58EEEF",
  //     lang: "en",
  //     ogType: "website",
  //     ogHost: "https://www.soextranails.com",
  //   }
  // },

  // Sitemap Docmentation: https://sitemap.nuxtjs.org/
  sitemap: {
    path: "/sitemap.xml",
    hostname: "https://www.soextranails.com",
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
    id: 'UA-213790316-1'
  },

  // Adds a redirect with trailing slash
  // redirect: [
  //   {
  //       from: '^.*(?<!\/)$',
  //       to: (from, req) => req.url + '/'
  //   }
  // ],

  // Robot documentation: https://github.com/nuxt-community/robots-module
  robots: {
    UserAgent: "*",
    Allow: "/"
  },

  router: {
    // trailingSlash: true,
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extend (config, { isDev, isClient, loaders: { vue } }) {
      if (isClient) {
        vue.transformAssetUrls.img = ['src', 'srcset', 'data-src', 'data-srcset']
        vue.transformAssetUrls.source = ['src', 'srcset', 'data-src', 'data-srcset']
      }
    }
  },
}
