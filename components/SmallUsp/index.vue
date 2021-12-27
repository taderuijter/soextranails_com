<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-12 col-md-10 col-lg-8 col-xl-6">
        <ul class="usp__small mb-5 text-center">
          <li>usp small</li>
          <li>usp small</li>
          <li>usp small</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style lang="scss" scoped>
  .usp__small {
    list-style: none;
    margin: 0;
    padding: 0;

    li {
      display: inline;
      position: relative;
      margin: 0 0 25px 0;
      padding: 0 4em;
      font-weight: 600;
      text-transform: uppercase;

      &::before {
        content: '';
        background-image: url('~/assets/img/hearth.svg');
        background-size: contain;
        background-position: center;
        background-repeat: no-repeat;
        display: block;
        height: 65px;
        width: 65px;
        text-align: center;
        line-height: 65px;
        left: 0;
        @include vertical-align;
      }
    }
  }
</style>