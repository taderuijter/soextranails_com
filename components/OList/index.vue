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
  ol {
    counter-reset: item;
    margin: 0;
    padding: 0;

    li {
      display: block;
      margin: 0 0 25px 5px;
      
      &::before {
        font-family: 'HyperwaveOne';
        display: inline-block;
        content: counter(item);
        counter-increment: item;
        background-color: $black;
        color: $white;
        height: 30px;
        width: 30px;
        text-align: center;
        line-height: 30px;
        margin: 0 2em 0 0;
        @include border-radius(50px);
        @include distortion;
      }
    }
  }
}
</style>