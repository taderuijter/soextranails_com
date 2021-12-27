<template>
  <a v-if="type === 'href'" :href="url" class="btn" :class="styling">
    {{ label }}
  </a>
  <button v-else class="btn" :class="styling" @click="onClick">
    {{ label }}
  </button>
</template>

<script>
export default {
  props: {
    label: String,
    styling: String,
    icon: String,
    url: String,
    type: String,
    onClick: {
      type: Function,
      default: () => {
        console.log('You have not added any function')
      }
    },
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
    }
  }
</style>