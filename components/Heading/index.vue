<template>
  <div class="heading">
    <slot>
      {{title}}
    </slot>
  </div>
</template>

<script>
  export default {
    props: {
      title: String
    }
  }
</script>

<style lang="scss" scoped>
  
  .heading {
    h1,h2,h3,h4,h5,h6,p,span {
      font-family: 'HyperwaveOne';
      font-size: 160px;
      font-weight: 400 !important;
      line-height: 90px;
    }

    &__black {
      color: $black !important;
    }

    &__white {
      color: $white !important;
    }

    &__distortion {
      text-shadow: 4px 4px 0px #FF9BF3, -4px -4px 0px #58EEEF;
    }

    &__shadow {
      text-shadow: 4px 4px 0px #000000;
    }
  }
  
</style>