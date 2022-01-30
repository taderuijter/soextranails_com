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
    font-size: 70px;
    font-weight: 400 !important;
    line-height: 32px;

    @include sm-screen {
      font-size: 82px;
      line-height: 48px;
    }

    @include md-screen {
      font-size: 140px;
      line-height: 72px;
    }

    @include xl-screen {
      font-size: 160px;
      line-height: 80px;
    }
  }

  &__black {
    color: $black !important;
  }

  &__white {
    color: $white !important;
  }

  &__distortion {
    text-shadow: 3px 3px 0px #FF9BF3, -3px -3px 0px #58EEEF;

    @include md-screen {
      text-shadow: 4px 4px 0px #FF9BF3, -4px -4px 0px #58EEEF;
    }
  }

  &__shadow {
    text-shadow: 4px 4px 0px #000000;
  }
}
</style>