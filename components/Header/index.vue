<template>
  <div class="header" v-editable="blok">
    <div class="header__background skeleton">
      <img v-if="blok.image.filename" :src="blok.image.filename" alt="" title="" width="640px" height="480px" />
      <Picture v-else :src="require('~/assets/img/soextranails-bg.jpg')" :webp="require('~/assets/img/soextranails-bg.jpg?format=webp')" styling="header__image lazyload" alt="" width="640px" height="360px" />
    </div>
    <Heading class="title">
      <h1 v-if="blok.title" class="heading__black heading__distortion">{{ blok.title }}</h1>
      <h1 v-else class="heading__black heading__distortion">{{ title }}</h1>
    </Heading>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: 'Add a title'
    },
    blok: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss">
.header {
  position: relative;

  &__background {
    position: relative;
    overflow: hidden;
    height: 20vh;
    @include border-radius-top(50px);

    @include sm-screen {
      height: 30vh;
    }

    @include lg-screen {
      height: 50vh;
    }
  }

  .title {
    z-index: 5;
    width: 200px;
    text-align: center;
    position: absolute;
    bottom: -60px;
    @include horizontal-align;

    @include sm-screen {
      width: 300px;
    }

    @include lg-screen {
      width: 500px;
    }
  }

  &__image {
    width: auto;
    height: 100%;
    @include center-align;

    @include custom-screen(1690px) {
      width: 100%;
      height: 100%;
    }
  }
}
</style>