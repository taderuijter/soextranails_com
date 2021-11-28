<template>
  <div class="socials">
    <ul>
      <li><a href="https://www.instagram.com/so.extra.nails/" rel="nofollow" target="_blank"><img src="~/assets/img/instagram.svg" width="20px" height="20px" alt="" title=""></a></li>
      <li><a href="https://nl.pinterest.com/0isxt5ovp002e0sxiqazdbm7o7fbv8/" rel="nofollow" target="_blank"><img src="~/assets/img/pinterest.svg" width="20px" height="20px" alt="" title=""></a></li>
    </ul>
  </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
  .socials {
    ul {
      list-style: none;
      margin: 0;
      padding: 0;

      li {
        display: inline;
        margin: 0 3px;

        a {
          display: inline-block;
          background-color: $black;
          height: 40px;
          width: 40px;
          line-height: 40px;
          text-align: center;
          @include border-radius(50px);
          @include distortion;

          img {
            @include white-filter;
          }
        }
      }
    }
  }
</style>