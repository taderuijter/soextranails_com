<template>
<div class="navbar">
  <button class="nav-mobile" @click="toggleMobileMenu">
    <div :class="{ active : mobileMenu }" id="nav-toggle">
      <span></span>
    </div>
  </button>
  <div class="navbar__list" :class="{ 'navbar__list--active' : mobileMenu }">
    <ul>
      <li><nuxt-link to="/">Home</nuxt-link></li>
    </ul>
  </div>
  <div class="navbar__brand">
    <Picture :src="require('~/assets/img/soextranails.png')" :webp="require('~/assets/img/soextranails.png?format=webp')" alt="So Extra Nails Logo" width="106px" height="127px" />
  </div>
  <div class="navbar__cta">
    <Timer />
    <Button type="href" label="Book Now" url="https://so-extra-nails.salonized.com/widget_bookings/new" styling="btn__primary" />
  </div>
</div>
</template>

<script>
export default {
    data(){
      return {
        mobileMenu: false,
      }
    },
    methods: {
      toggleMobileMenu() {
        this.mobileMenu = !this.mobileMenu;
      }
    }
}
</script>

<style lang="scss" scoped>
.navbar {
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  padding: 0;
  width: 100%;
  height: 80px;

  @include lg-screen {
    position: relative;
  }

  @include xl-screen {
    padding: 0 60px;
  }

  &__list {
    opacity: 0;
    z-index: 98;
    position: absolute;
    background-color: $white;
    width: 100%;
    height: 100%;
    top: 0;
    left: -100%;
    text-align: center;
    @include transition;

    @include lg-screen {
      opacity: 1;
      position: absolute;
      background-color: transparent;
      top: 0;
      left: 0;
      line-height: 80px;
    }

    &--active {
      opacity: 1;
      top: 0;
      left: 0;
    }
    
    ul {
      list-style: none;
      margin: 0;
      padding: 0;
      width: 100%;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);

      @include lg-screen {
        width: auto;
        left: 0;
        top: 0;
        transform: translateY(0);
      }

      li {
        display: block;

        @include lg-screen {
          display: inline;
        }

        a {
          margin: 0 15px;
          position: relative;
          font-weight: 700;
          text-decoration: none;
          font-size: 24px;
          letter-spacing: 0.5px;
          text-transform: uppercase;

          @include lg-screen {
            font-size: 14px;
          }

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
    z-index: 99;
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
    z-index: 99;
    margin: 10px 0 0 0;
    position: absolute;
    left: 10px;
    top: 0;

    @include md-screen {
      left: 50px;
    }

    @include lg-screen {
      @include horizontal-align;
    }
  }

  .navbar__brand::v-deep .image {
    width: auto;
    height: 60px;

    @include lg-screen {
      width: 106px;
      height: 127px;
    }
  }

  /* Mobile navigation */
.nav-mobile {
  z-index: 99;
  display: block;
  position: absolute;
  top: 10px;
  right: 10px;
  height: 60px;
  width: 60px;
  background-color: transparent;
  border: none;

  @include md-screen {
    right: 50px;
  }

  @include lg-screen {
    display: none;
  }
}

#nav-toggle {
  z-index: 5;
  cursor: pointer;
  position: absolute;
  left: 13px;

  span:before,
  span:after {
    cursor: pointer;
    border-radius: 1px;
    height: 3px;
    width: 30px;
    background: $black;
    position: absolute;
    display: block;
    content: "";
    transition: all 300ms ease-in-out;
  }

  span:before {
    top: -6px;
  }

  span:after {
    bottom: -6px;
  }

  &.active span {
    background-color: transparent;
    &:before,
    &:after {
      top: 0;
    }
    &:before {
      transform: rotate(45deg);
    }
    &:after {
      transform: rotate(-45deg);
    }
  }
}
}
</style>