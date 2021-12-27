<template>
<div class="content">
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-12 col-md-10 col-lg-8 col-xl-6" :class="position">
        <slot></slot>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  props: {
    position: {
      type: String,
      default: 'text-center'
    }
  }
}
</script>

<style lang="scss" scoped>
.content {
  h2,h3,h4,h5,h6 {
    font-size: 22px;
    text-transform: uppercase;
    font-weight: 700;
    margin: 15px 0 25px 0;
  }

  p {
    margin: 0 0 25px 0;
  }

  span {
    font-weight: 700;
  }

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