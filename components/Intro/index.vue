<template>
    <div class="intro">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-12 col-md-8 col-lg-6 text-center">
                    <slot></slot>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            content: String
        }
    }
</script>

<style lang="scss" scoped>
    .intro {
        padding: 80px 0 65px 0;

        p {
            font-size:20px;
            line-height: 24px;
        }
    }
</style>