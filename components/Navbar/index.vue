<template>
<div class="navbar">
  <div class="navbar__list">
    <ul>
      <li><nuxt-link to="/">Home</nuxt-link></li>
      <li><nuxt-link to="/booking-policy/">Booking Policy</nuxt-link></li>
    </ul>
  </div>
  <div class="navbar__brand">
    <img src="~/assets/img/soextranails.svg" width="106px" height="127px" alt="" title=""/>
  </div>
  <div class="navbar__cta">
    <Timer />
    <Button label="Book Now" url="https://so-extra-nails.salonized.com/widget_bookings/new" styling="btn__primary" />
  </div>
</div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
.navbar {
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  position: relative;
  padding: 0;
  width: 100%;
  height: 80px;

  @include xl-screen {
    padding: 0 60px;
  }

  &__list {
    display: none;
    line-height: 80px;

    @include lg-screen {
      align-self: flex-start;
      display: inline-block;
    }
    
    ul {
      list-style: none;
      margin: 0;
      padding: 0;
      
      li {
        display: inline;

        a {
          margin: 0 15px;
          position: relative;
          font-weight: 700;
          text-decoration: none;
          font-size: 14px;
          letter-spacing: 0.5px;
          text-transform: uppercase;

          &:hover {
            color: $black;
            &::after {
              z-index: -1;
              content: '';
              position: absolute;
              width: 100%;
              height: 7px;
              background-color: $primary;
              left: 0;
              bottom: 0;
            }
          }
        }
      }
    }

    .nuxt-link-exact-active::after {
      z-index: -1;
      content: '';
      position: absolute;
      width: 100%;
      height: 7px;
      background-color: lighten($primary, 20%);
      left: 0;
      bottom: 0;
    }
  }

  &__cta {
    align-self: center;
    display: inline-block;
    display: flex;
    flex-wrap: wrap;
    justify-content: left;
    align-items: center;
    height: 80px;

    .timer {
      display: none;
    }

    @include lg-screen {
      align-self: flex-end;

      .timer {
        display: inline-flex;
      }
    }
  }

  &__brand {
    z-index: 2;
    margin: 10px 0 0 0;
    position: absolute;
    left: 0;
    top: 0;

    img {
      width: auto;
      height: 60px;
    }

    @include lg-screen {
      @include horizontal-align;

      img {
        width: 106px;
        height: 127px;
      }
    }
  }
}
</style>