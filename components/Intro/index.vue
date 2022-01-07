<template>
<div class="intro mb-5" v-editable="blok">
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-12 col-md-10 col-lg-8 text-center">
        <rich-text-renderer :document="blok.text" />
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
.intro {
  padding: 90px 0 0 0;

  @include sm-screen {
    padding: 90px 0 0 0;
  }

  p {
    font-size:20px;
    line-height: 24px;
  }
}
</style>