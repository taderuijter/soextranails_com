<template>
<div class="content">
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
  
}
</script>

<style lang="scss" scoped>
.content {
  h2,h3,h4,h5,h6 {
    font-size: 22px;
    text-transform: uppercase;
    font-weight: 700;
    margin: 15px 0 10px 0;
  }
  span {
    font-weight: 700;
  }
}
</style>