<template>
  <div class="treatments" v-editable="blok" :class="[blok.margin_bottom, blok.margin_top]">
    <div class="container">
      <div class="row">
        <div v-for="treatment in sortedService" :key="treatment._uid" class="col-12 col-md-6 col-lg-4">
          <div class="treatment__item">
            <div class="treatment__image">
              <img v-if="treatment.content.srv_image.filename" :src="treatment.content.srv_image.filename" class="lazyload img-fluid" alt="" title="" width="640px" height="480px" />
            </div>
            <div class="treatment__content">
              <p class="title">
                {{ treatment.content.srv_title }}
              </p>
              <p class="text">
                {{ treatment.content.srv_text }}
              </p>
            </div>
            <div class="treatment__usp">
              <ul>
                <li v-for="(usp, index) in treatment.content.srv_usp" :key="index">
                  <span>{{ usp.item }}</span>
                </li>
              </ul>
            </div>
            <div class="treatment__buttons text-center">
              <Button type="href" :label="treatment.content.srv_booknow_text" :url="treatment.content.srv_booknow_url" styling="btn__primary mb-2 btn__full" />
              <Button type="href" :label="treatment.content.srv_readmore_text" :url="treatment.content.srv_readmore_url" styling="btn__transparant btn__full" />
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
      overflow: hidden;
      border: 3px solid $black;
      margin: 0 0 25px 0;
      @include border-radius(20px);
    }

    .treatment__image {
      position: relative;
      overflow: hidden;
      background-color: lighten($black, 90%);
      width: 100%;
      height: 200px;

      img {
        width: 100%;
        height: auto;
        @include center-align;
      }

    }

    .treatment__content {
      padding: 25px;
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
          min-height: 90px;
        }
      }
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

  }
</style>