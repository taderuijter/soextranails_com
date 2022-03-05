<template>
<div class="sitemap">
  <Header title="Sitemap" />
  <div class="sitemap__margin mb-5">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-12 col-md-10 col-lg-8">
          <ul>
            <li v-for="(page, index) in stories" :key="index">
              <nuxt-link v-if="page.content.parent_slug" :to="{name: 'pages-child', params: { pages: page.content.parent_slug, child: page.slug } }">{{ page.name }}</nuxt-link>
              <nuxt-link v-else :to="{name: 'pages', params: { pages: page.slug } }">{{ page.name }}</nuxt-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</div>
</template>
 
<script>
export default {
  data () {
    return {
      stories: [],
      faq: this.$store.state.faq
    }
  },

  asyncData (context) {
    return context.app.$storyapi.get('cdn/stories', {
      excluding_slugs: 'globals/*,home,faq/*,coupons/*,service/*',
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
  },

  head() {
    return {
      title: '',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: ''
        }
      ],
      link: [
        { rel: 'canonical', href: 'https://www.soextranails.com/' },
        { rel: 'alternate', hreflang: 'en', href: 'https://www.soextranails.com/' },
        { rel: 'alternate', hreflang: 'nl', href: 'https://www.soextranails.nl/' },
        { rel: 'alternate', hreflang: 'x-default', href: 'https://www.soextranails.nl/' }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.sitemap {
  &__margin {
    margin: 100px 0 0 0;
  }
}
</style>