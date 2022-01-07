<template>
<div class="content" v-editable="blok" :class="[blok.margin_bottom, blok.margin_top]">
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-12 col-md-10 col-lg-8" :class="blok.styling">
        <rich-text-renderer :document="blok.text" />
      </div>
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

<style lang="scss">
.content {
  h2,h3,h4,h5,h6 {
    font-size: 22px;
    text-transform: uppercase;
    font-weight: 700;
    margin: 15px 0 25px 0;
  }

  p {
    margin: 0 0 25px 0;
  }

  span {
    font-weight: 700;
  }
}
</style>