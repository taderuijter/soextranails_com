<template>
  <div class="treatments" v-editable="blok" :class="[blok.margin_bottom, blok.margin_top]">
    <div class="container">
      <div class="row">

        <div v-for="treatment in blok.items" :key="treatment._uid" class="col-12 col-md-6 col-lg-4">
          <div class="treatment__item">
            <div class="treatment__image">
              <img v-if="treatment.image" :src="treatment.image.filename" class="lazyload img-fluid" alt="" title="" width="640px" height="480px" />
            </div>
            <div class="treatment__content">
              <p class="title">
                {{ treatment.title }}
              </p>
              <p class="text">
                {{ treatment.text }}
              </p>
            </div>
            <div class="treatment__usp">
              <ul>
                <li v-for="(usp, index) in treatment.items" :key="index">
                  <span>{{ usp.item }}</span>
                </li>
              </ul>
            </div>
            <div class="treatment__buttons text-center">
              <Button type="href" :label="treatment.btn_text" :url="treatment.btn_url" styling="btn__primary mb-2 btn__full" />
              <Button type="href" :label="treatment.sub_text" :url="treatment.sub_url" styling="btn__transparant btn__full" />
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
  .treatments {

    .treatment__item {
      overflow: hidden;
      border: 3px solid $black;
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
        min-height: 90px;
      }
    }

    .treatment__usp {
      padding: 0 25px;
      min-height: 210px;

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