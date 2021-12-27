<template>
<div class="list">
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-12 col-md-8 col-lg-6">
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
.list {
  ul {
    list-style: none;
    margin: 0;
    padding: 0;

    li {
      position: relative;
      margin: 0 0 25px 0;
      padding: 0 0 0 4em;

      &::before {
        content: '';
        background-image: url('~/assets/img/hearth.svg');
        background-size: contain;
        background-position: center;
        background-repeat: no-repeat;
        display: block;
        height: 45px;
        width: 45px;
        text-align: center;
        line-height: 45px;
        left: 0;
        @include vertical-align;
      }
    }
  }
}
</style>