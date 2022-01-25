<template>
  <picture>
    <source :srcset="webp.srcSet" type="image/webp">
    <source :data-srcset="src.srcSet" />
    <img :data-src="src" :class="styling" :height="height" :width="width" :alt="alt" class="image" />
  </picture>
</template>

<script>
  export default {
    props: {
      src: '',
      webp: '',
      styling: '',
      alt: '',
      height: '',
      width: '',
    }
  }
</script>