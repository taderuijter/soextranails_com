<template>
  <div class="container usp" v-editable="blok" :class="[blok.margin_bottom, blok.margin_top]">
    
    <div v-if="blok.layout === 'small'" class="row justify-content-center">
      <div class="col-12 col-md-10">
        <div class="row justify-content-center text-center">
          <div class="col-12 col-md-6 col-lg-4 mb-2 mt-2" v-for="usp in blok.items" :key="usp._uid">
            <div class="usp__item">
              <img class="img-fluid" src="~/assets/img/hearth.svg" alt="" title="" width="45px" height="45px" />
              <rich-text-renderer :document="usp.item" />
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
            <rich-text-renderer :document="usp.text" />
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
      font-weight: 600;
      text-transform: uppercase;

      div {
        display: inline-block;
      }
    }
  }
</style>