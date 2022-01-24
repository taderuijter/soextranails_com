<template>
<div class="gallery" v-editable="blok" :class="[blok.margin_bottom, blok.margin_top]">
  <div :class="blok.layout === 'default' ? 'container' : 'container-fluid g-0' ">
    <div :class="blok.layout === 'default' ? 'row' : 'row g-0' ">
      <div v-for="image in blok.items" :key="image._uid" :class="image.component === 'big_image' ? 'col-12' : 'col-12 col-md-6' ">
        <div :class="blok.layout === 'default' ? 'gallery__image gallery__image--margin' : 'gallery__image' ">
          <div v-if="image.heading" class="gallery__image--content">
            <Heading class="gallery__image--content">
              <p class="heading__white heading__shadow">{{ image.heading }}</p>
            </Heading>
          </div>
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
  overflow: hidden;
  @include border-radius(20px);

  &__image {
    position: relative;
    overflow: hidden;

    &--margin {
      margin: 0 0 20px 0;
      @include border-radius(20px);
    }

    img {
      width: 100%;
      height: auto;
    }

    &--content {
      position: absolute;
      z-index: 2;
      width: 80%;
      text-align: center;
      @include center-align;

      p {
        font-size: 52px !important;

        @include md-screen {
          font-size: 120px !important;
        }

        @include lg-screen {
          font-size: 142px !important;
          line-height: 92px !important;
        }

        @include xl-screen {
          font-size: 280px !important;
          line-height: 140px !important;
        }
      }
    }
  }
}
</style>