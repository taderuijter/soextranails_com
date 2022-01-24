<template>
  <div>
    <section v-for="blok in story.content.body" :key="blok._uid">
      <component v-if="blok.component" :blok="blok" :is="blok.component" />
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      story: { content: {} }
    }
  },

  mounted () {
    this.$storybridge(() => {
      const storyblokInstance = new StoryblokBridge()

      // Use the input event for instant update of content
      storyblokInstance.on('input', (event) => {
        console.log(this.story.content)
        if (event.story.id === this.story.id) {
          this.story.content = event.story.content
        }
      })

      // Use the bridge to listen the events
      storyblokInstance.on(['published', 'change'], (event) => {
        // window.location.reload()
        this.$nuxt.$router.go({
          path: this.$nuxt.$router.currentRoute,
          force: true,
        })
      })
    })
  },

  // Get the data from the api
  asyncData (context) {
    return context.app.$storyapi.get('cdn/stories/home', {
      version: 'draft'
    }).then((res) => {
      return res.data
    }).catch((res) => {
      if (!res.response) {
        console.error(res)
        context.error({ statusCode: 404, message: 'Failed to receive content form api' })
      } else {
        console.error(res.response.data)
        context.error({ statusCode: res.response.status, message: res.response.data })
      }
    })
  },

  // Fetch data and put in in store, properly refactor this code later.
  async fetch(context) {
    if(context.store.state.navbar.loaded !== '1') {
      let navbarRefRes = await context.app.$storyapi.get(`cdn/stories/globals/navbar`, { version: 'draft' })
      context.store.commit('navbar/setNavbar', navbarRefRes.data.story)
      context.store.commit('navbar/setLoaded', '1')
    }

    if(context.store.state.footer.loaded !== '1') {
      let footerRefRes = await context.app.$storyapi.get(`cdn/stories/globals/footer`, { version: 'draft' })
      context.store.commit('footer/setFooter', footerRefRes.data.story)
      context.store.commit('footer/setLoaded', '1')
    }

    if(context.store.state.faq.loaded !== '1') {
      let faqRefRes = await context.app.$storyapi.get(`cdn/stories/`, { starts_with: 'faq/', per_page: '100', version: 'draft' })
      context.store.commit('faq/setFaq', faqRefRes.data.stories)
      context.store.commit('faq/setLoaded', '1')
    }

    if(context.store.state.service.loaded !== '1') {
      let serviceRefRes = await context.app.$storyapi.get(`cdn/stories/`, { starts_with: 'service/', version: 'draft' })
      context.store.commit('service/setService', serviceRefRes.data.stories)
      context.store.commit('service/setLoaded', '1')
    }

    if(context.store.state.coupons.loaded !== '1') {
      let couponsRefRes = await context.app.$storyapi.get(`cdn/stories/`, { starts_with: 'coupons/', version: 'draft' })
      context.store.commit('coupons/setCoupons', couponsRefRes.data.stories)
      context.store.commit('coupons/setLoaded', '1')
    }
  },

  head() {
    return {
      htmlAttrs: { lang: 'en' },
      title: this.story.content.seo_title,
      meta: [
        { hid: 'description', name: 'description', content: this.story.content.seo_description },
        { hid:  'robots', name: 'robots', content: 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1' },
        { hid: 'content-language', name: 'content-language', content: 'en',  },

        // Twitter Meta
        { hid:  'twitter:title', name: 'twitter:title', content: this.story.content.sm_title },
        { hid:  'twitter:description', name: 'twitter:description', content: this.story.content.sm_description },
        { hid:  'twitter:image', name: 'twitter:image', content: this.story.content.sm_image},
        { hid:  'twitter:image:alt', name: 'twitter:image:alt', content: this.story.content.sm_title },

        // Social Meta
        { hid: 'og:title', property: 'og:title', content: this.story.content.sm_title },
        { hid: 'og:description', property: 'og:description', content: this.story.content.sm_description },
        { hid: 'og:image', property: 'og:image', content: this.story.content.sm_image },
        { hid: 'og:image:secure_url', property: 'og:image:secure_url', content: this.story.content.sm_image },
        { hid: 'og:image:alt', property: 'og:image:alt', content: this.story.content.sm_title },
        { hid: 'og:locale', name: 'og:locale', content: 'en' },
        { hid: 'og:url', name: 'og:url', content: this.story.content.seo_canonical },
        { hid: 'og:site_name', name: 'og:site_name', content: 'So Extra Nails' },
      ],
      link: [
        { rel: 'canonical', href: this.story.content.seo_canonical },
        { rel: 'alternate', hreflang: 'en', href: this.story.content.seo_en_url },
        { rel: 'alternate', hreflang: 'nl', href: this.story.content.seo_nl_url },
        { rel: 'alternate', hreflang: 'x-default', href: this.story.content.seo_xdefault }
      ]
    }
  }
}
</script>