<template>
  <div class="container" v-editable="blok" :class="[blok.margin_bottom, blok.margin_top]">
    <div class="row justify-content-center">
      <div class="col-12 col-md-10 col-lg-8">
        <div class="message" :class="blok.styling">
          <div class="row g-0 align-items-center">
            <div class="col-12 col-md-2 text-center text-md-start">
              <img v-if="blok.image.filename" :src="blok.image.filename" width="70px" height="70px" alt="" title="">
              <img v-else src="~assets/img/bell.svg" width="70px" height="70px" alt="" title="">
            </div>
            <div class="col-12 col-md-10">
              <rich-text-renderer :document="blok.text" />
            </div>
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
  .message {
    font-size: 14px;
    padding: 30px;
    @include border-radius(20px);

    @include md-screen {
      font-size: 16px;
    }

    p:last-child {
      margin: 0;
    }

    img {
      height: 45px;
      width: 45px;

      @include md-screen {
        height: 70px;
        width: 70px;
      }
    }

    &__warning {
      background-color: #FFF3C7;
      color:#DCB837;

      img {
        filter: invert(94%) sepia(39%) saturate(6848%) hue-rotate(327deg) brightness(91%) contrast(87%);
      }

      a {
        color: #DCB837;

        &:hover {
          color: #DCB837;
          text-decoration: none;
        }
      }
    }

    &__error {
      background-color: #DF5B5B;
      color:#811919;

      a {
        color: #811919;

        &:hover {
          color: #811919;
          text-decoration: none;
        }
      }

      img {
        filter: invert(10%) sepia(74%) saturate(3734%) hue-rotate(352deg) brightness(99%) contrast(88%);
      }
    }

    &__succes {
      background-color: #CEF5D9;
      color:#0D7C2D;

      a {
        color: #0D7C2D;

        &:hover {
          color: #0D7C2D;
          text-decoration: none;
        }
      }

      img {
        filter: invert(32%) sepia(57%) saturate(698%) hue-rotate(85deg) brightness(101%) contrast(94%);
      }
    }

  }
</style>