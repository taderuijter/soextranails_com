<template>
<div>
  <Navbar />
  <Header :title="title" />
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
            content: 'Be bold and express yourself with bespoke nail art on natural or artificial nails. Located in the city centre of Rotterdam and still open for new bookings! '
          }
        ]
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>