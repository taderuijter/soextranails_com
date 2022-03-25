<template>
<div v-editable="blok" :class="[blok.margin_bottom, blok.margin_top]">
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-12">
        <div v-if="blok.type === 'iframe'" class="iframe">
          <iframe class="responsive-iframe lazyload" :data-src="blok.url"></iframe>
        </div>
        <div v-if="blok.type === 'booking'"  class="salonized-booking" data-company="BqqgaGB5Mkg5jU47eL2C1u5t" data-color="#090909" data-language="en" data-height="700" data-inline=true data-outline="shadow"></div><script src="https://static-widget.salonized.com/loader.js"></script>
        <div v-if="blok.type === 'coupons'"  class="salonized-voucher" data-company="BqqgaGB5Mkg5jU47eL2C1u5t" data-color="#090909" data-language="en" data-height="400" data-inline=true></div><script src="https://static-widget.salonized.com/loader.js"></script>
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

<style lang="scss">
.iframe {
  position: relative;
  overflow: hidden;
  width: 100%;
  padding: 56.25% 0 0 0; /* 16:9 Aspect Ratio (divide 9 by 16 = 0.5625) */
  @include border-radius(10px);

  .responsive-iframe {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;
    border: 0;
  }
}
</style>