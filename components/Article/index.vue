<template>
  <div v-editable="blok" class="container mt-5 mb-5">
    <div class="row justify-content-center">
      <div class="col-12 col-md-10 col-lg-8">
        <h1>{{ blok.name }}</h1>
        <p>{{ blok.intro }}</p>
        <rich-text-renderer :document="blok.body" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    blok: {
      type: Object,
      required: true
    }
  }
}
</script>