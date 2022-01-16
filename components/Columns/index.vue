<template>
<div class="columns" v-editable="blok" :class="[blok.margin_bottom, blok.margin_top]">
  <div class="container">
    <div class="row align-items-center">
      <div class="col-12 col-md-6" :class="blok.layout === 'default' ? 'order-md-1' : 'order-md-2'">
        <img v-if="blok.image.filename" class="lazyload img" :src="blok.image.filename" width="360px" height="360px" :alt="blok.image.alt" :title="blok.image.alt" />
      </div>
      <div class="col-12 col-md-6" :class="blok.layout === 'default' ? 'order-md-2' : 'order-md-1'">
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

<style lang="scss" scoped>
.columns {

  h2,h3,h4,h5,h6 {
    font-size: 22px;
    text-transform: uppercase;
    font-weight: 700;
    margin: 0 0 15px 0;
  }

  p {
    margin: 0 0 25px 0;

    &:last-child {
      margin: 0;
    }
  }

  .img {
    width: 100%;
    height: auto;
    margin: 0 0 25px 0;

    @include md-screen {
      margin: 0;
    }
  }

}
</style>