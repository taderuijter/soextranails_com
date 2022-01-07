<template>
<div class="coupon" v-editable="blok" :class="[blok.margin_bottom, blok.margin_top]">
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-12 col-md-10">
        <div class="coupon__item">
          <div class="row g-0 align-items-center">
            <div class="col-12 col-lg-4 col-xl-3">
              <div class="coupon__sticker">
                <div class="coupon__sticker--text">
                  <p class="title">{{ blok.precentage }} <span>{{ blok.sign }}</span></p>
                  <p class="subline">{{ blok.subline }}</p>
                </div>
                <img src="~/assets/img/discount-sticker.png" alt="" title="" width="150px" height="150px"/>
              </div>
              <div class="coupon__note">
                {{ blok.note }}
              </div>
            </div>
            <div class="col-12 col-lg-8 col-xl-9 coupon__padding">
              <div class="coupon__title">
                {{ blok.title }}
              </div>
              <div class="coupon__text">
                {{ blok.text }}
              </div>
            </div>
          </div>
          <div class="coupon__bg"></div>
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
  .coupon {

    &__item {
      position: relative;
      padding: 25px 25px 45px 25px;
      background-color: lighten($secondary, 12%);
      @include border-radius(20px);

      @include lg-screen {
        padding: 45px 60px;
      }
    }

    &__bg {
      display: none;

      @include md-screen {
        display: block;
        position: absolute;
        z-index: -1;
        bottom: -10px;
        right: 50px;
        width: 80%;
        height: 200px;
        background-color: lighten($primary, 18%);
        transform: rotate(-3deg);
        @include border-radius(30px);
      }

      @include lg-screen {
        right: 60px;
        bottom: -12px;
      }

      @include lg-screen {
        right: 70px;
      }
    }

    &__padding {
      padding: 0;

      @include lg-screen {
        padding: 0 0 0 35px;
      }
    }

    &__sticker {
      margin: 0 auto;
      width: 180px;
      position: relative;
      @include responsive-div(100%);

      @include lg-screen {
        width: 100%;
      }

      &--text {
        position: absolute;
        z-index: 2;
        width: 150px;
        text-align: center;
        @include center-align;

        .title {
          font-size: 72px;
          line-height: 72px;
          font-weight: 700;
          letter-spacing: -2px;
          padding: 0;
          margin: 0;

          span {
            font-size: 24px;
            line-height: 24px;
            font-weight: 400;
            margin: 0 0 0 -12px;
          }
        }

        .subline {
          margin: 0;
          padding: 0;
          font-family: 'HyperwaveOne';
          font-size: 52px;
          line-height: 24px;
        }
      }

      img {
        position: absolute;
        width: 100%;
        height: auto;
        @include center-align;
      }

    }

    &__note {
      font-size: 11px;
      line-height: 15px;
      margin: 10px 0 15px 0;
      text-align: center;
      color: lighten($black, 50%);

      @include lg-screen {
        margin: 10px 0 0 0;
      }
    }

    &__title {
      font-size: 20px;
      text-transform: uppercase;
      font-weight: 600;
      text-align: center;
      padding: 10px 0;
      border-top: 5px solid $black;
      border-bottom: 5px solid $black;
      margin: 0 0 15px 0;

      @include lg-screen {
        font-size: 32px;
      }
    }

    &__text {
      font-size: 16px;

      @include lg-screen {
        font-size: 20px;
      }
    }

  }
</style>