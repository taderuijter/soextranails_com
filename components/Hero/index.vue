<template>
<div v-editable="blok" class="hero skeleton">
  <div class="circle">
    <div class="content text-center">
      <Heading>
        <h1 class="heading__black heading__distortion">{{ blok.title }}</h1>
      </Heading>
      <p>{{ blok.text }}</p>
      <Button v-if="blok.btn_enable === true" type="href" :label="blok.btn_text" :url="blok.btn_url" styling="btn__primary" />
    </div>
  </div>
  <div class="image image--left">
    <img :src="blok.image_left.filename" class="lazyload" width="360px" height="360px" :alt="blok.image_left.alt" :title="blok.image_left.alt" />
  </div>
  <div class="image image--right">
    <img :src="blok.image_right.filename" class="lazyload" width="360px" height="360px" :alt="blok.image_right.alt" :title="blok.image_right.alt" />
  </div>
  <div class="bg-image">
    <img :src="blok.image_big.filename" class="lazyload" width="360px" height="360px" :alt="blok.image_big.alt" :title="blok.image_big.alt" />
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
.hero { 
  position: relative;
  overflow: hidden;
  height: 50vh;
  @include border-radius(50px);

  @include sm-screen {
    height: 70vh;
  }

  @include lg-screen {
    height: 100vh;
  }

  @include xl-screen {
    height: 110vh;
  }

  .circle {
    z-index: 2;
    width: 280px;
    height: 280px;
    background-color: $white;
    @include center-align;
    @include border-radius(500px);

    @include sm-screen {
      width: 380px;
      height: 380px;
    }

    @include md-screen {
      width: 450px;
      height: 450px;
    }

    @include lg-screen {
      height: 500px;
      width: 500px;
    }

    @include xl-screen {
      height: 550px;
      width: 550px;
    }
  }

  .content {
    z-index: 3;
    width: 250px;
    @include center-align;

    @include sm-screen {
      width: 300px;
    }

    @include md-screen {
      width: 420px;
    }

    p {
      margin: 25px 0;
    }
  }

  .image {
    position: absolute;
    overflow: hidden;
    height: 50%;
    width: 50%;

    img {
      width: auto;
      height: 100%;
      @include center-align;

      @include md-screen {
        width: 100%;
        height: auto;
      }
    }

    &--left {
      top: 0;
      left: 0;
      
    }

    &--right {
      top: 0;
      right: 0;
    }
  }

  .bg-image {
    position: absolute;
    overflow: hidden;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 50%;

    img {
      width: 100%;
      height: 100%;
    }
  }
}
</style>