<template>
<div class="gallery">
  <div class="container">
    <div class="row">
      <div v-for="image in images" :key="image.id" :class="image.id === 1 ? 'col-12 col-md-12' : 'col-12 col-md-6' ">
        <div class="gallery__image">
          <img :data-src="image.url" styling="lazyload" :alt="image.alt" class="lazyload" width="640px" height="360px" />
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
  export default {
    data(){
      return {
        images: [
          {
            id: 1,
            url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1wNZB3owQeKWWD3spXTPi8u9p4Yi6D8LxuQ&usqp=CAU',
            alt: 'Frenchie 1'
          },
          {
            id: 2,
            url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_jZlAO8GUmIR2kfjEu7MhVLGv-e6mjCUx5g&usqp=CAU',
            alt: 'Frenchie 2'
          },
          {
            id: 3,
            url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_jZlAO8GUmIR2kfjEu7MhVLGv-e6mjCUx5g&usqp=CAU',
            alt: 'Frenchie 3'
          }
        ]
      }
    },
  }
</script>

<style lang="scss" scoped>
.gallery {
  margin: 35px 0;

  &__image {
    overflow: hidden;
    margin: 0 0 20px 0;
    @include border-radius(20px);

    img {
      width: 100%;
      height: auto;
    }
  }

}
</style>