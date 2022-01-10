<template>
<div class="container text-center" v-editable="blok" :class="[blok.margin_bottom, blok.margin_top]">
  <div class="row">
    <div class="col-12">
      <Heading class="title">
        <h2 class="heading__black heading__distortion">{{ blok.title }}</h2>
      </Heading>
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