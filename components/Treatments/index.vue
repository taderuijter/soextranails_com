<template>
  <div class="treatments" v-editable="blok" :class="[blok.margin_bottom, blok.margin_top]">
    <div class="container">
      
      <div v-if="blok.layout === 'expanded'" class="row justify-content-center">
        <div v-for="treatment in sortedService" :key="treatment._uid" class="col-12 col-md-6 col-lg-4 mb-5">
          <div class="treatment__item">
            <div class="treatment__price">
              <div class="treatment__price--content">
                <span class="subline">FROM</span>
                <span class="simbol">€</span> <span class="price">{{treatment.content.srv_price}},- </span>
              </div>
            </div>
            <div class="treatment__image">
              <div v-if="treatment.content.srv_category === 'upgrade'" class="tag tag--upgrade"> Upgrade </div>
              <div v-else class="tag tag--base"> base </div>
              <img v-if="treatment.content.srv_image.filename" :src="treatment.content.srv_image.filename" class="lazyload img-fluid" alt="" title="" width="640px" height="480px" />
            </div>
            <div class="treatment__content">
              <p class="title">
                {{ treatment.content.srv_title }}
              </p>
              <div class="text">
                <rich-text-renderer :document="treatment.content.srv_text" />
              </div>
            </div>
            <div class="treatment__note text-center">
              {{ treatment.content.srv_note }}
            </div>
            <div class="treatment__usp">
              <ul>
                <li v-for="(usp, index) in treatment.content.srv_usp" :key="index">
                  <rich-text-renderer :document="usp.item" />
                </li>
              </ul>
            </div>
            <div class="treatment__buttons text-center">
              <Button v-if="treatment.content.srv_booknow_text" type="href" :label="treatment.content.srv_booknow_text" :url="treatment.content.srv_booknow_url" styling="btn__primary mb-2 btn__full" />
              <Button v-if="treatment.content.srv_readmore_text" type="href" :label="treatment.content.srv_readmore_text" :url="treatment.content.srv_readmore_url" styling="btn__transparant btn__full" />
              <div v-else style="height:51px;"></div>
            </div>
          </div>
        </div>

        <div v-if="blok.overview === 'yes'" class="col-12 col-md-6 c0l-lg-4 mb-5" style="background-color:#000;">
          <div class="treatment__overview">
            <Button v-if="blok.btn_text" type="href" :label="blok.btn_text" :url="blok.btn_url" styling="btn__white" />
          </div>
        </div>

      </div>

      <div v-else class="row justify-content-center">
        <div v-for="treatment in sortedService" :key="treatment._uid" class="col-12 col-md-6 col-lg-4 mb-5">
          <div class="treatment__item">
            <div class="treatment__price">
              <div class="treatment__price--content">
                <span class="subline">FROM</span>
                <span class="simbol">€</span> <span class="price">{{treatment.content.srv_price}},- </span>
              </div>
            </div>
            <div class="treatment__image">
              <div v-if="treatment.content.srv_category === 'upgrade'" class="tag tag--upgrade"> Upgrade </div>
              <div v-else class="tag tag--base"> base </div>
              <img v-if="treatment.content.srv_image.filename" :src="treatment.content.srv_image.filename" class="lazyload img-fluid" alt="" title="" width="640px" height="480px" />
            </div>
            <div class="treatment__content">
              <p class="title">
                {{ treatment.content.srv_title }}
              </p>
              <div class="text">
                <rich-text-renderer :document="treatment.content.srv_text" />
              </div>
            </div>
            <div class="treatment__note text-center">
              {{ treatment.content.srv_note }}
            </div>
            <div class="treatment__buttons text-center">
              <Button v-if="treatment.content.srv_booknow_text" type="href" :label="treatment.content.srv_booknow_text" :url="treatment.content.srv_booknow_url" styling="btn__primary mb-2 btn__full" />
            </div>
          </div>
        </div>

        <div v-if="blok.overview === 'yes'" class="col-12 col-md-6 col-lg-4 mb-5">
          <div class="treatment__overview">
            <Button v-if="blok.btn_text" type="href" :label="blok.btn_text" :url="blok.btn_url" styling="btn__white" />
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
  },

  computed: {
    sortedService() {
      // Load reference data/content from store
      const featuredService = this.$store.state.service.service.filter((service) => {
        return this.blok.items.includes(service.uuid)
      })

      // Enable the ordering of the article previews
      featuredService.sort((a, b) => {
        return this.blok.items.indexOf(a.uuid) - this.blok.items.indexOf(b.uuid);
      })

      return featuredService
    }
  }
}
</script>

<style lang="scss" scoped>
  .treatments {

    .treatment__item {
      position: relative;
      border: 3px solid $black;
      @include border-radius(20px);
    }

    .treatment__price {
      position: absolute;
      background-color: $black;
      height: 125px;
      width: 125px;
      top: -30px;
      right: -20px;
      z-index: 2;
      text-align: center;
      @include border-radius(100px);
      @include distortion;

      &--content {
        font-weight: 600;
        width: 125px;
        text-align: center;
        color: $white;
        @include vertical-align;

        .subline {
          font-weight: 500;
          display: block;
          text-transform: uppercase;
          font-size: 12px;
        }

        .price {
          font-size: 35px;
        }
      }

    }

    .treatment__image {
      position: relative;
      overflow: hidden;
      background-color: lighten($black, 90%);
      width: 100%;
      height: 200px;
      -webkit-border-top-left-radius: 20px;
      -webkit-border-top-right-radius: 20px;
      -moz-border-radius-topleft: 20px;
      -moz-border-radius-topright: 20px;
      border-top-left-radius: 20px;
      border-top-right-radius: 20px;

      .tag {
        position: absolute;
        z-index: 2;
        left: 20px;
        top: 20px;
        text-transform: uppercase;
        font-size: 12px;
        font-weight: 600;
        color: $black;
        padding: 8px 15px;
        @include border-radius(50px);

        &--base {
          background-color: $primary;
        }

        &--upgrade {
          background-color: $secondary;
        }
      }

      img {
        z-index: 1;
        width: auto;
        height: 100%;
        @include center-align;

        @include xs-screen {
          width: 100%;
          height: auto;
        }
      }

    }

    .treatment__content {
      padding: 25px 25px 5px 25px;
      text-align: center;

      p {
        margin: 0;
      }

      .title {
        font-size: 18px;
        text-transform: uppercase;
        font-weight: 700;
        margin: 0 0 10px 0;
      }

      .text {
        line-height: 18px;
        min-height: auto;

        @include md-screen {
          min-height: 80px;
        }
      }
    }

    .treatment__note {
      font-size: 10px;
      height: 32px;
      line-height: 32px;
    }

    .treatment__usp {
      padding: 0 25px;
      min-height: auto;

      @include md-screen {
        min-height: 210px;
      }

      ul {
        margin: 0;
        padding: 0;
        list-style: none;

        li {
          font-weight: 600;
          line-height: 18px;
          font-size: 14px;
          position: relative;
          margin: 0 0 10px 0;
          padding: 12px 15px 12px 55px;
          background-color: lighten($primary, 15%);
          @include border-radius(100px);

          p:last-child {
            margin: 0;
          }

          &::before {
            content: '';
            background-image: url('~/assets/img/hearth.svg');
            background-size: contain;
            background-position: center;
            background-repeat: no-repeat;
            display: block;
            height: 45px;
            width: 45px;
            text-align: center;
            line-height: 45px;
            left: 10px;
            @include vertical-align;
          }
        }
      }
    }

    .treatment__buttons {
      padding: 10px 25px;
    }

    .treatment__overview {
      position: relative;
      background-color: $black;
      height: 100%;
      @include border-radius(20px);

      .btn {
        width: 70%;
        text-align: center;
        @include center-align;
      }

    }

  }
</style>