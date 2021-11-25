<template>
    <div class="footer skeleton" lazy-background="~/assets/img/soextranails-bg.jpg">
        <div class="container-fluid">
            <div class="row">
                <div class="col-12 col-md-2">
                    <div class="footer__copyright">
                        © Copyright 2021 • So EXTRA NAILS 
                    </div>
                </div>
                <div class="col-12 col-md-8 text-center">
                    <ul class="footer__menu">
                        <li><a href="/">tREATMENTS & PRICES</a></li>
                        <li><a href="/">About the salon</a></li>
                        <li><a href="/">Tips & tricks</a></li>
                        <li><a href="/">Business inquiries</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
    .footer {
        line-height: 40px;
        padding: 25px 60px;
        margin: 25px 0;
        @include border-radius(100px);

        &__copyright {
            font-size: 12px;
            font-weight: 700;
            text-transform: uppercase;
        }

        &__menu {
            list-style: none;
            margin: 0;
            padding: 0;

            li {
                display: inline;
                margin: 0 15px;

                a {
                    font-size: 12px;
                    font-weight: 900;
                    text-decoration: none;
                    text-transform: uppercase;

                    &:hover {
                        text-decoration: underline;
                        color: $black;
                    }
                }

            }
        }
    }
</style>