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
      // Get element by id in vue
      const btn = this.$refs['ctaBtn']

      // Get max height of window
      let body = document.body,
      html = document.documentElement;
      let maxHeight = Math.max( body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight );

      // Get vindow width based on device
      let intViewportWidth = window.innerWidth;
      console.log(intViewportWidth)

      // Set height to hide CTA on scroll
      let height

      if( intViewportWidth >= 480 ){
        height = maxHeight - 1150;
      } else {
        height = maxHeight - 1300;
      }

      // Function to shpw the CTA button on scroll
      let showButton = function () {
        var y = window.scrollY;
        if (y >= 300 && y <= height ) {
          btn.className = "cta cta__show"
        } else {
          btn.className = "cta cta__hide"
        }
      };

      // Execute the function on scroll
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
      -webkit-box-shadow: 0px 10px 15px 0px rgba(0,0,0,0.15); 
      box-shadow: 0px 10px 15px 0px rgba(0,0,0,0.15);
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