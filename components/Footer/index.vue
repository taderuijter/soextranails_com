<template>
<div class="footer skeleton" lazy-background="~/assets/img/soextranails-bg.jpg">
  <div class="container-fluid">
    <div class="row">
      <div class="col-12 col-md-5 text-center text-md-start">
        <div class="footer__copyright">
          © Copyright {{ new Date().getFullYear() }} • SO EXTRA NAILS
        </div>
      </div>
      <div class="col-12 col-md-4">

      </div>
      <div class="col-12 col-md-3 text-center text-md-end">
        <Socials />
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
.footer {
  padding: 25px 15px;
  margin: 25px 0;
  @include background-center('~/assets/img/soextranails-bg.jpg');
  @include border-radius(100px);

  @include md-screen {
    padding: 25px 50px;
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