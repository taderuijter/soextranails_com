<template>
  <div class="container mt-5">
    <div class="row">
      <div class="col-12">
        <Heading :title="title" />
        <Button />
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        title: 'Nuxt Starter Kit'
      }
    },
    head() {
      return {
        title: this.title,
        meta: [
          {
            hid: 'description',
            name: 'description',
            content: 'This is the Nuxt Starter Kit from Nomad Ventures'
          }
        ]
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>