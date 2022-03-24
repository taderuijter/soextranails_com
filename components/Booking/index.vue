<template>
  <div class="booking skeleton" v-editable="blok" :class="[blok.margin_bottom, blok.margin_top]">
    <div class="booking__content">
      <div class="container">
        <div class="row justify-content-center">

          <div class="col-10">
            <Heading>
              <h1 class="heading__black heading__highlight">{{ blok.title }}</h1>
            </Heading>
          </div>

          <div class="col-10 col-lg-8 mt-5 mb-3">
            <div class="booking__usp">
              <ul>
                <li v-for="usp in blok.usp" :key="usp._uid">
                  <rich-text-renderer :document="usp.item" />
                </li>
              </ul>
            </div>
          </div>

          <div v-if="blok.message" class="col-12 col-md-10 col-lg-8 mt-3 mb-5">
            <div class="message message__warning">
              <div class="row g-0 align-items-center">
                <div class="col-12 col-md-2 text-center text-md-start">
                  <img src="~assets/img/bell.svg" width="70px" height="70px" alt="" title="">
                </div>
                <div class="col-12 col-md-10">
                  <rich-text-renderer :document="blok.message" />
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>

    <img src="~/assets/img/soextranails-bg.jpg" class="booking__image lazyload" alt="" width="640px" height="360px" />
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
  .booking {
    position: relative;
    overflow: hidden;
    padding: 10% 0;
    text-align: center;
    @include border-radius(50px);

    &__content {
      position: relative;
      z-index: 2;
    }

    &__usp {
      padding: 20px 0;
      border: 3px solid black;
      background-color: $white;
      @include border-radius(100px);

      ul {
        margin: 0;
        list-style: none;
        padding: 0;

        li {
          display: inline-block;
          margin: 0 15px;
        }
      }

      p {
        margin: 0;
        padding: 0;
      }
    }

    &__image {
      width: 100%;
      height: 100%;
      z-index: 1;
      @include center-align;
    }

    .message {
      position: relative;
      font-size: 14px;
      padding: 30px;
      text-align: left;
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
    }
  }
</style>