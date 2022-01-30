<template>
<div>
  <div v-if="blok" class="header" v-editable="blok">
    <div class="header__background skeleton">
      <img v-if="blok.image.filename" :data-src="blok.image.filename" alt="" title="" width="640px" height="480px" class="lazyload header__image" />
      <Picture v-else :src="require('~/assets/img/soextranails-bg.jpg')" :webp="require('~/assets/img/soextranails-bg.jpg?format=webp')" styling="header__image lazyload" alt="" width="640px" height="360px" />
    </div>
    <div class="row g-0 justify-content-center title text-center">
      <div class="col-12 col-md-10 col-lg-8 header__fade">
        <Heading>
          <h1 class="heading__black heading__distortion">{{ blok.title }}</h1>
        </Heading>
      </div>
    </div>
  </div>

  <div v-else class="header">
    <div class="header__background skeleton">
      <Picture :src="require('~/assets/img/soextranails-bg.jpg')" :webp="require('~/assets/img/soextranails-bg.jpg?format=webp')" styling="header__image lazyload" alt="" width="640px" height="360px" />
    </div>
    <div class="row g-0 justify-content-center title text-center">
      <div class="col-12 col-md-10 col-lg-8 header__fade">
        <Heading>
          <h1 class="heading__black heading__distortion">{{ title }}</h1>
        </Heading>
      </div>
    </div>
  </div>
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
      required: false
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
    height: 350px;
    @include border-radius-top(50px);

    @include md-screen {
      height: 400px;
    }

    @include lg-screen {
      height: 50vh;
    }
  }

  .title {
    position: relative;
    z-index: 3;
    top: -30px;

    @include sm-screen {
      top: -50px;
    }

    @include md-screen {
      top: -70px;
    }
  }

  &__image {
    width: auto;
    height: 100%;
    @include center-align;

    @include md-screen {
      width: auto;
      height: 100%;
    }

    @include lg-screen {
      width: auto;
      height: 100%;
    }

    @include xl-screen {
      width: 100%;
      height: auto;
    }

    @include custom-screen(1366px) {
      height: 100%;
      width: auto;
    }
  }

  &__fade {
    opacity: 1;
    animation-name: headerAnimation;
    animation-iteration-count: 1;
    animation-timing-function: ease-out;
    animation-duration: 0.5s;
  }

  @keyframes headerAnimation {
    0% {
      transform: translateY(+15px);
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
}
</style>