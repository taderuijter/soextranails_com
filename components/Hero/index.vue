<template>
<div class="hero skeleton">
  <div class="circle">
    <div class="content text-center">
      <Heading>
        <h1 class="heading__black heading__distortion">beyond nails</h1>
      </Heading>
      <p>Be bold and express yourself with bespoke nail art on natural or artificial nails. Located in the city centre of Rotterdam and still open for new bookings! </p>
    </div>
  </div>
  <div class="image image--left">
    <Picture styling="lazyload" :src="require('~/assets/img/nailart-1.jpg')" :webp="require('~/assets/img/nailart-1.jpg?format=webp')" width="360px" height="360px" />
  </div>
  <div class="image image--right">
    <Picture styling="lazyload" :src="require('~/assets/img/nailart-2.jpg')" :webp="require('~/assets/img/nailart-2.jpg?format=webp')" width="360px" height="360px"/>
  </div>
  <div class="bg-image">
    <Picture styling="lazyload" :src="require('~/assets/img/soextranails-bg.jpg')" :webp="require('~/assets/img/soextranails-bg.jpg?format=webp')" width="360px" height="360px"/>
  </div>
</div>
</template>

<script>
export default {
    
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
      width: 350px;
    }

    p {
      margin: 25px 0;
    }

    &::after {
      display: block;
      content: '';
      height: 45px;
      width: 80px;
      bottom: -44px;
      background-image: url('~/assets/img/droplets.png');
      background-size: contain;
      background-position: center;
      background-repeat: no-repeat;
      @include horizontal-align;

      @include sm-screen {
        height: 80px;
        width: 80px;
        bottom: -124px;
      }

      @include md-screen {
        height: 80px;
        width: 80px;
        bottom: -160px;
      }

      @include lg-screen {
        height: 150px;
        width: 150px;
        bottom: -242px;
      }

      @include xl-screen {
        bottom: -260px;
      }
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