<template>
  <div class="timer">
    <div class="timer__clock" :class="open ? 'timer__clock--open' : 'timer__clock--closed'">
      <img data-not-lazy src="~/assets/img/clock.svg" width="20px" height="20px" alt="" title=""/>
      </div>
    <div class="timer__content">
      <span v-if="open === true">Open today from: <br><strong>09:00 - 17:00</strong></span>
      <span v-else>Closed</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      open: false
    }
  },
  created() {
    this.getTime()
  },
  methods: {
    getTime() {
      // Specify opening hours
      const startTime = 9;
      const endTime = 17;

      // Get date and time
      const today = new Date();
      const time = today.getHours();
      const day = today.getDay();

      // Conditional statement changes open to true of false
      if( day > 0 && day < 6 && time > startTime && time < endTime)  {
        console.log(time)
        this.open = true
      } else {
        this.open = false
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.timer {
  display: flex;
  flex-wrap: wrap;
  justify-content: left;
  align-items: center;
  margin: 0 25px 0 0;

  &__clock {
    position: relative;
    display: inline-block;
    margin: 0 20px 0 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: left;

    &:after {
      content: '';
      height: 5px;
      width: 5px;
      position: absolute;
      top: 0;
      right: -8px;
      @include border-radius(50px);
    }

    img {
      display: inline-block;
    }

    &--closed:after {
      background-color: $closed;
    }

    &--open:after {
      background-color: $open;
    }
  }

  &__content {
    display: inline-block;
    text-transform: uppercase;
    font-size: 12px;
    letter-spacing: 0.5px;
  }
}
</style>