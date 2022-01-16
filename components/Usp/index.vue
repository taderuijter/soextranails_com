<template>
  <div class="container usp" v-editable="blok" :class="[blok.margin_bottom, blok.margin_top]">
    
    <div v-if="blok.layout === 'small'" class="row justify-content-center">
      <div class="col-12 col-lg-10 text-center">
        <div class="row g-0">
          <div class="col-12 col-md-4" v-for="usp in blok.items" :key="usp._uid">
            <div class="usp__item">
              <img src="~/assets/img/hearth.svg" alt="" title="" width="45px" height="45px" />{{ usp.item }}
            </div>
          </div>
        </div>
      </div>
    </div>

    <div v-else class="row">
      <div v-for="usp in blok.items" :key="usp._uid" class="col-12 col-md-6 mt-4 mb-4">
        <div class="row align-items-center">
          <div class="col-3">
            <img :src="usp.icon.filename" alt="" title="" class="lazyload img-fluid" height="90px" width="90px" />
          </div>
          <div class="col-9">
            <h3>{{ usp.title }}</h3>
            <p>{{ usp.text }}</p>
          </div>
        </div>
      </div>
    </div>

    <div v-if="blok.btn_enable" class="row mt-4">
      <div class="col-12 text-center">
        <Button type="href" :label="blok.btn_text" :url="blok.btn_url" styling="btn__primary" />
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
  .usp {
    h2,h3,h4,h5,h6 {
      font-size: 22px;
      text-transform: uppercase;
      font-weight: 700;
      margin: 0 0 15px 0;
    }

    p {
      margin: 0;
    }

    &__item {
      line-height: 45px;
      font-weight: 600;
      text-transform: uppercase;

      img {
        margin: 0 5px 0 0;
      }
    }
  }
</style>