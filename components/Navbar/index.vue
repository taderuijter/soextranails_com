<template>
    <div class="navbar">
        <div class="navbar__brand"><img src="~/assets/img/soextranails-logo.svg" width="100px" height="130px" alt="So Extra Nails Brand Logo" ></div>
        <div class="navbar__cta float-end">
            <Button label="Book Now" styling="btn__primary" url="https://so-extra-nails.salonized.com/widget_bookings/new" />
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
    .navbar {
        position: relative;
        margin: 0 auto;
        width: 100%;
        height: 100px;

        @include md-screen {
            width: 90%;
        }

        &__brand {
            z-index: 2;
            top: 20px;
            @include horizontal-align;
        }

        &__cta {
            display: inline-block;
            padding: 25px 0;
        }
    }
</style>