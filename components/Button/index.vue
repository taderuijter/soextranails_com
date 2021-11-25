<template>
  <a :href="url" class="btn" :class="styling">
    {{ label }}
  </a>
</template>

<script>
  export default {
    props: {
      label: String,
      styling: String,
      icon: String,
      url: String,
    }
  }
</script>

<style lang="scss" scoped>
  .btn {
    display: inline-block;
    text-decoration: none;
    font-weight: 700;
    font-size: 14px;
    letter-spacing: 1px;
    text-transform: uppercase;
    padding: 15px 43px;
    border: none;
    @include border-radius(30px);

    &__primary {
      background-color: $black;
      color: $white;
      @include distortion;

      img {
        float: left;
        margin: 0 8px 0 0;
        height: 20px;
        width: 20px;
        filter: brightness(0) invert(1);
      }
    }
  }
</style>