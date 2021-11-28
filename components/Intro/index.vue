<template>
<div class="intro">
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-12 col-md-10 col-lg-8 col-xl-6 text-center">
        <slot></slot>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  props: {
    content: String
  }
}
</script>

<style lang="scss" scoped>
.intro {
  padding: 90px 0 0 0;

  @include sm-screen {
    padding: 90px 0 25px 0;
  }

  p {
    font-size:20px;
    line-height: 24px;
  }
}
</style>