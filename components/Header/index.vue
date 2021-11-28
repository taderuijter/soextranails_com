<template>
  <div class="header skeleton">
    <Heading class="title">
      <h1 class="heading__black heading__distortion">{{ title }}</h1>
    </Heading>
  </div>
</template>

<script>
export default {
  props: {
    title: String
  }
}
</script>

<style lang="scss" scoped>
.header {
  height: 20vh;
  position: relative;
  @include background-center('~/assets/img/soextranails-bg.jpg');
  @include border-radius-top(50px);

  @include sm-screen {
    height: 30vh;
  }

  @include lg-screen {
    height: 50vh;
  }

  .title {
    width: 200px;
    text-align: center;
    position: absolute;
    bottom: -60px;
    @include horizontal-align;

    @include sm-screen {
      width: 300px;
    }

    @include lg-screen {
      width: 500px;
    }
  }
}
</style>