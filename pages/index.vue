<template>
<div>
  <Navbar />
  <Hero />
</div>
</template>

<script>
  export default {
    data() {
      return {
        title: 'Nagelstudio Rotterdam'
      }
    },
    head() {
      return {
        title: 'So Extra Nails 💅 Nail Art Rotterdam • BIAB™, Extensions & more',
        meta: [
          {
            hid: 'description',
            name: 'description',
            content: 'Be bold & express yourself with pronounced nail art on natural or artificial nails. New customers are welcome.'
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

</style>