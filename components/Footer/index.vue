<template>
<div class="footer skeleton">
  <div class="container-fluid">
    <div class="row">
      <div class="col-12 col-md-3 text-center text-md-start footer__ontop">
        <div class="footer__copyright">
          © Copyright {{ new Date().getFullYear() }} • SO EXTRA NAILS
        </div>
      </div>
      <div class="col-12 col-md-6 footer__ontop text-center">
        <ul class="footer__menu">
          <li v-for="(link, index) in links" :key="index">
            <nuxt-link :to="link.url"> {{ link.name }} </nuxt-link>
          </li>
        </ul>
      </div>
      <div class="col-12 col-md-3 text-center text-md-end footer__ontop">
        <Socials :facebook="facebook" :linkedin="linkedin" :instagram="instagram" :pinterest="pinterest" />
      </div>
    </div>
  </div>
  <Picture :src="require('~/assets/img/footer-bg.jpg')" :webp="require('~/assets/img/footer-bg.jpg?format=webp')" styling="footer__background lazyload" alt="" width="100px" height="1360px" />
</div>
</template>

<script>
export default {
    data(){
      return {
        links: this.$store.state.footer.footer.content.links,
        facebook: this.$store.state.footer.footer.content.facebook,
        linkedin: this.$store.state.footer.footer.content.linkedin,
        instagram: this.$store.state.footer.footer.content.instagram,
        pinterest: this.$store.state.footer.footer.content.pinterest,
      }
    }
}
</script>

<style lang="scss">
.footer {
  position: relative;
  overflow: hidden;
  padding: 25px 15px;
  margin: 25px 0;
  @include border-radius(100px);

  @include md-screen {
    padding: 25px 50px;
  }

  &__background {
    z-index: 1;
    width: auto;
    height: 100%;
    @include center-align;

    @include custom-screen(1690px) {
      width: 100%;
      height: 100%;
    }
  }

  &__ontop {
    position: relative;
    z-index: 3;
  }

  &__copyright {
    font-size: 12px;
    font-weight: 700;
    text-transform: uppercase;
    margin: 0 0 15px 0;

    @include md-screen {
      line-height: 40px;
      margin: 0;
    }
  }

  &__menu {
    list-style: none;
    margin: 0;
    padding: 0;
    line-height: 40px;

    li {
      display: inline;
      margin: 0 15px;

      a {
        font-size: 12px;
        font-weight: 900;
        text-decoration: none;
        text-transform: uppercase;

        &:hover {
          text-decoration: underline;
          color: $black;
        }
      }
    }
  }
}
</style>