<template>
<div class="gallery" v-editable="blok" :class="[blok.margin_bottom, blok.margin_top]">
  <div class="container">
    <div class="row">
      <div v-for="image in blok.items" :key="image._uid" :class="image.component === 'big_image' ? 'col-12' : 'col-12 col-md-6' ">
        <div class="gallery__image">
          <img :src="image.image.filename" styling="lazyload" :alt="image.image.alt" class="lazyload" width="640px" height="360px" />
        </div>
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
.gallery {
  margin: 35px 0;

  &__image {
    overflow: hidden;
    margin: 0 0 20px 0;
    @include border-radius(20px);

    img {
      width: 100%;
      height: auto;
    }
  }

}
</style>