<template>
    <div>
        <!-- <app-h2
            :title="title"
            :subtitle="subtitle"
        >
        </app-h2> -->
        <section class="section backimgVenue is-mobile" :style="style">
        <div class="container">
            <div class="columns level-right">
                <div class="column is-4 is-offset-4">
                    <div class="card ">
                        <div class="card-content">
                            <div class="media">
                                <div class="media-content copy">
                                    <p class="title is-4 no-padding">Our venue</p>
                                      <p class="subtitle"> Curzon Soho will be our venue for 2019 </p>
                                    <div class="banner-heading">
                                        <span > </span>
                                    </div>
                                </div>
                            </div>
                            <div class="content">
                                <p>Our event is taking place at one of the most iconic places right at the city
                                centre of London, in the heart of Soho next to China Town and by minutes away from
                                Picadilly Circus.
                                </p>
                                <p>
                                Your chance to be at the centre of JavaScript at the heart of London.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </section>
    </div>
</template>

<script>
    import h2 from '@/components/h2';

    export default {
        data: function() {
            return {
                isActive: false
            }
        },
        components: {
            'app-h2': h2,
        },
         computed: {
            style () {
                return `background-image: url('//api.spiralthread.com/images/curozn.png')`;
            }
        },
        props: {
            title: String,
            subtitle: String,
            image: String,
        }
    };
</script>

<style lang="sass" scoped>
    @import '~/assets/css/mq.sass';

    .backimgVenue
        background-position: center center;
        background-repeat: no-repeat;
        background-size: cover;
        padding: 150px 0;
        height: 650px;
        background-position-y: -155px;
        +mobile
            background-position: 1px -264px;
            background-repeat: no-repeat;
            background-size: cover;
            padding: 150px 0;
            height: 194vw;
    .media-content
        .subtitle
            padding-top: 5px;
            font-weight: bold;
 

    .fa-cog
        font-size: 40px

    #learn
        +desktop
        margin-bottom: 2rem

    .pd
        +tablet
        padding: 2em 0

    img.test
        width: 100%
        max-height: 100%;
        height: auto;

    .about
       width: 100%;
       min-height: 444px;

    .about-content
        padding: 10.3rem

    .card-content
        +mobile
            margin-top: 60%;
        .copy
            position: relative;
            display: block;
    
    
    .banner-heading:after
        content: "";
        border-bottom: 13px solid $red;
        background-color: $red;
        border-left: 55px solid $red;
        border-right: 55px solid $red;
        position: absolute;
        left: 0px;
        margin-left: 0px !important;
        bottom: 0px;
        padding: 0px;
</style>