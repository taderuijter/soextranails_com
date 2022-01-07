<template>
<div :class="[blok.margin_bottom, blok.margin_top]">
  <div class="container mb-3">
    <div class="row justify-content-center">
      <div class="col-12 col-md-10 col-lg-8 content text-center">
        <slot></slot>
      </div>
    </div>
  </div>
  <div class="container" itemscope itemtype="https://schema.org/FAQPage">
    <div class="row justify-content-center">
      <div class="col-12 col-md-10 col-lg-8">
      <div v-for="(faq, index) in blok.items" :key="index" >
        <div v-if="index === 0">
          <div class="faq faq__open" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" :data-character-id="index">
            <div class="faq__heading" @click="selectedFAQ(index)">
              <div class="row g-0 align-items-center">
                <div class="col-11">
                  <h3>{{ faq.question }}</h3>
                </div>
                <div class="col-1">
                  <div class="faq__icon mr-auto">
                    <img src="~/assets/img/chevron-down.svg" width="15" height="15" alt="" title="" />
                  </div>
                </div>
              </div>
            </div>
            <div class="faq__body" itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
              <div itemprop="text">
                {{ faq.awnser }}
              </div>
            </div>
          </div>
        </div>
        <div v-else>
          <div class="faq faq__closed" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" :data-character-id="index">
            <div class="faq__heading" @click="selectedFAQ(index)">
              <div class="row g-0 align-items-center">
                <div class="col-11">
                  <h3>{{ faq.question }}</h3>
                </div>
                <div class="col-1">
                  <div class="faq__icon ml-auto">
                    <img src="~/assets/img/chevron-down.svg" width="15" height="15" alt="" title="" />
                  </div>
                </div>
              </div>
            </div>
            <div class="faq__body" itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
              <div itemprop="text">
                {{ faq.awnser }}
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>

    <div v-if="blok.enable" class="row justify-content-center mt-2">
      <div class="col-12 col-md-10 col-lg-8 col-xl-8 text-center">
        <Button type="href" :label="blok.text" :url="blok.url" styling="btn__primary" />
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
  
  methods: {
    selectedFAQ (faqIndex) {
      const faqMessage = document.querySelectorAll('[data-character-id="' + faqIndex + '"]')[0]
      if (faqMessage.classList.contains('faq__closed')) {
        faqMessage.classList.remove('faq__closed')
        faqMessage.classList.add('faq__open')
      } else {
        faqMessage.classList.remove('faq__open')
        faqMessage.classList.add('faq__closed')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.content {
    h2,h3,h4,h5,h6 {
    font-size: 22px;
    text-transform: uppercase;
    font-weight: 700;
    margin: 15px 0 15px 0;
  }

  p {
    margin: 0 0 25px 0;
  }
}

.faq{
    padding: 0;
    margin: 0 0 15px 0;

  .faq__heading {
    cursor: pointer;
    padding: 20px 25px;
    border: 2px solid $black;
    @include border-radius(50px);

    h3 {
      font-size: 16px;
      display: inline-block;
      margin: 0;
      font-weight: 400;
      width: 90%;
      line-height: 28px;
    }

    img {
      display: inline-block;
      @include transition;
    }
  }

  .faq__body {
    overflow: hidden;
    line-height: 28px;
    padding: 15px 25px;
    margin: 10px 0 0 0;
    @include border-radius(20px);
  }

  &__icon {
    width: 25px;
    height: 25px;
    text-align: center;
    line-height: 25px;
    background-color: $black;
    margin: 0 0 0 auto;
    @include border-radius(100px);

    img {
      @include white-filter;
    }
  }

}

.faq__closed {
  .faq__heading {
    img {
      transform: rotate(0deg);
    }
  }

  .faq__body {
    display: none;
    max-height: 0;
  }
}

.faq__open {
  margin-bottom: 20px;

  .faq__heading {
    background-color: lighten($primary, 15%);
    border-color: lighten($primary, 15%);

    img {
      margin: -3px 0 0 0;
      transform: rotate(180deg);
    }
  }

  .faq__body {
    display: block;
    background-color: lighten($primary, 15%);
    max-height: 900px;
  }
}
</style>