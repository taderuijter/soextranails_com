<template>
    <div class="header skeleton" lazy-background="~/assets/img/soextranails-bg.jpg">
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
        position: relative;
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        height: 50vh;
        -webkit-border-top-left-radius: 50px;
        -webkit-border-top-right-radius: 50px;
        -moz-border-radius-topleft: 50px;
        -moz-border-radius-topright: 50px;
        border-top-left-radius: 50px;
        border-top-right-radius: 50px;

        .title {
            width: 380px;
            text-align: center;
            position: absolute;
            bottom: -60px;
            @include horizontal-align;
        }
    }
</style>