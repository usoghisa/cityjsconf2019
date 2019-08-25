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
                                    <p class="title is-4 no-padding">Smoosh x CityJSConf After Party Show</p>
                                    <div class="banner-heading">
                                        <span > </span>
                                    </div>
                                </div>
                            </div>
                            <div class="content">
                                <p>In collaboration with the infamous JavaScript comedy night #SMOOSH, 
                                    CityJS Conf is proud to bring together 
                                   some of London's funniest developers to make you 
                                   laugh and cry (tears of joy, hopefully)
                                </p>
                                <h3>Comedians</h3>
                                <strong> Jani Eväkallio </strong><br/>
                                <strong>Joe Hart </strong><br/>
                                <strong>TC Thirty-NaN </strong><br/>
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
                return `background-image: url('http://api.spiralthread.com/storage/thumbs/22adc844fe66b44ea29e5750ddd8ec08_800x534_85_1553084990_bestFit_adb115059e28d960fa8badfac5516667.jpg')`;
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