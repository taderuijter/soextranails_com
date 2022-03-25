<template>
  <div class="cta cta__hide" ref="ctaBtn">
    <div class="cta__item">
      <div class="row g-0 align-items-center">
        <div class="col-12 col-md-4 d-none d-md-block">
          <div class="timer">
            <div class="row g-0">
              <div class="col-3">
                <img data-not-lazy src="~/assets/img/clock.svg" width="20px" height="20px" alt="" title=""/>
              </div>
              <div class="col-9 text-start">
                <span>Duration approx: <br><strong>{{ time }}</strong></span>
              </div>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-8">
          <Button type="href" :label="text" :url="url" styling="btn__primary btn__full" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      text: String,
      url: String,
      time: String,
    },

    mounted(){
      const btn = this.$refs['ctaBtn']
      let showButton = function () {
        var y = window.scrollY;
        if (y >= 800) {
          btn.className = "cta cta__show"
        } else {
          btn.className = "cta cta__hide"
        }
      };

      window.addEventListener("scroll", showButton);
    }
  }
</script>

<style lang="scss" scoped>
  .cta {
    position: fixed;
    left: 0;
    width: 100%;
    z-index: 999;
    @include transition;

    &__hide {
      bottom: -100px;
    }

    &__show {
      bottom: 20px;
    }

    &__item {
      background-color: $white;
      padding: 15px;
      width: 300px;
      text-align: center;
      box-shadow: 0px 18px 88px -4px #18274B24;
      box-shadow: 0px 8px 28px -6px #18274B1F;
      margin: 0 auto;
      @include border-radius(100px);

      @include md-screen {
        padding: 20px;
        width: 500px;
      }

      .timer {
        font-size: 12px;
        text-transform: uppercase;
        
        img {
          margin: 8px 0 0 0;
        }
      }
    }
  }
</style>