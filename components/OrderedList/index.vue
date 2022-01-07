<template>
<div class="list" v-editable="blok" :class="[blok.margin_bottom, blok.margin_top]">
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-12 col-md-8">
        <ol>
          <li v-for="li in blok.items" :key="li._uidd">
            {{ li.item }}
          </li>
        </ol>
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
.list {
  ol {
    counter-reset: item;
    margin: 0;
    padding: 0;

    li {
      display: block;
      margin: 0 0 25px 45px;
      
      &::before {
          font-family: 'HyperwaveOne';
          display: inline-block;
          content: counter(item);
          counter-increment: item;
          text-align: center;
          width: 25px;
          height: 25px;
          line-height: 25px;
          font-size: 25px;
          color: $white;
          background-color: $black;
          margin: 0 20px 0 -1.9em;
          @include border-radius(50px);
          @include distortion;
      }
    }
  }
}
</style>