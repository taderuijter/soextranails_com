<template>
  <div class="socials">
    <ul>
      <li v-if="facebook"><a :href="facebook" rel="nofollow" target="_blank"><img src="~/assets/img/instagram.svg" width="20px" height="20px" alt="" title=""></a></li>
      <li v-if="linkedin"><a :href="linkedin" rel="nofollow" target="_blank"><img src="~/assets/img/instagram.svg" width="20px" height="20px" alt="" title=""></a></li>
      <li v-if="instagram"><a :href="instagram" rel="nofollow" target="_blank"><img src="~/assets/img/instagram.svg" width="20px" height="20px" alt="" title=""></a></li>
      <li v-if="pinterest"><a :href="pinterest" rel="nofollow" target="_blank"><img src="~/assets/img/pinterest.svg" width="20px" height="20px" alt="" title=""></a></li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    facebook: String,
    linkedin: String,
    instagram: String,
    pinterest: String,
  }
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