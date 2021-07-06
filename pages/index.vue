<template>
  <div class="header">
    <blocks-logo />
    <div class="circle">
      <div class="content">
        <img src="~assets/img/go-for-extra.png" width="690px" height="217px" alt="Go for Extra" title="Go For Extra" />
        <p>Lang, kort, ingetogen, uitgesproken, natuurlijke of kunstnagels. So Extra Nails is the place to be voor those who are brave!</p>
        <a class="default__button" href="https://www.instagram.com/so.extra.nails/" target="_blank"><img src="~assets/img/instagram.svg" width="15px" height="15px" /> Instagram</a>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style lang="scss" scoped>
.header {
    width: 100%;
    height: 100vh;
    background-color: lighten($black, 90%);
    background-image: url(~assets/img/bg-image.png);
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    @include border-radius(50px);

    .brand__logo {
      margin-top: -40px;
      @include horizontal-align;
    }

}

.circle {
  width: 80%;
  background-color: $white;
  @include center-align;
  @include border-radius(500px);

  &::after {
      content: "";
      display: block;
      padding-bottom: 100%;
  }

  @include sm-screen {
    width: 85%;
  }

  @include md-screen {
    width: 55%;
  }

  @include lg-screen {
    width: 45%;
  }

  @include xl-screen {
    width: 480px;
  }
}

.content {
  text-align: center;
  @include center-align;

  img {
    width: 310px;
    height: auto;

    @include sm-screen {
      width: 420px;
    }

    @include md-screen {
      width: 520px;
    }

    @include lg-screen {
      width: 620px;
    }
  }

  p {
    margin: 15px auto 20px auto;
    width: 60%;
    font-size: 14px;

    @include sm-screen {
      width: 75%;
    }

    @include md-screen {
      font-size: 16px;
      width: 60%;
    }
  }

  .default__button {
    display: inline-block;
    background-color: $black;
    color: $white;
    text-decoration: none;
    font-weight: 600;
    font-size: 14px;
    letter-spacing: 1px;
    text-transform: uppercase;
    padding: 15px 25px;
    @include distortion;
    @include border-radius(30px);

    img {
      float: left;
      margin: 0 8px 0 0;
      height: 20px;
      width: 20px;
      filter: brightness(0) invert(1);
    }
  }
}


</style>