<template>
    <section class="section shallow">
    <div class="testimonials has-text-centered">
        <app-h2
            title="2019 Speakers"
            subtitle="We are excited  to announce our selected Speakers <br/> for more information check our <a href='/speakers'>speakers</a> section"
            :is-h2="true"
        >
        </app-h2>
       <div class="row columns is-mobile is-multiline"> 
            <div 
                class="column is-one-third-widescreen is-one-quarter-fullhd is-full-mobile"  
                v-for="item in speakers"
                v-bind:key="item._id"
            >
                <div class="card">
                    <div class="card-image position-relative flip-container">
                        <div class="flipper">
                            <div class="front">
                                <figure class="image is-40x40">
                                    <img 
                                        v-if="typeof 
                                            item.image!== 'undefined'"  
                                            width="150" :alt="item.name" 
                                            :src="`//api.spiralthread.com/${item.thumbnail.path}`"
                                            class="speaker"
                                    />
                                </figure>
                                <figcaption class="label label-small bg-blue top-100 m-3 position-absolute right-0 text-uppercase text-white">
                                    {{item.name}}
                                </figcaption>
                            </div>
                            <div class="back">
                                 <figure class="back-logo">
                                    <img 
                                        v-if="typeof 
                                            item.image!== 'undefined'"  
                                            :alt="item.name" 
                                            :src="`//api.spiralthread.com/${item.thumbnail.path}`"
                                            class="speaker"
                                    />
                                </figure>
                                <div class="back-card content">
                                    <div class="media-content back-content">
                                        <p class="title is-4">{{item.name}}</p>
                                        <p><span class="title is-6"><a :href="`//twitter.com/${item.twitter}`">@{{item.twitter}}</a></span></p>
                                        <p class="subtitle is-6">{{item.company}}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!--  -->
                </div>
            </div>
        </div>
    </div>
    </section>
</template>

<script>
import bulmaCarousel from "bulma-extensions/bulma-carousel/dist/js/bulma-carousel.min.js";
import "bulma-extensions/bulma-carousel/dist/css/bulma-carousel.min.css";
import h2 from '@/components/h2';
export default {
  props: {
    items: {
      type: Array
    }
  },
  components: {
    'app-h2': h2,
  },
  mounted: function() {
    this.carousel = bulmaCarousel.attach();
  },
  computed: {
    isMobile () {
        return (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) ? true : false;
    }, 
    speakers () {
        if (typeof this.items!== 'undefined') {
            let speakers = [];
            speakers = this.items.filter(item => {
                return (item.year === 2019 || item.year === 2020) && (item.event === 'both' || item.event === 'talk')
            }); 

           return speakers.sort(function(a, b) {
                return a.order-b.order
            });

        } else {
            return [];
        }
    }
  }
  
};
</script>

<style lang="sass" scoped>
    @import '~/assets/css/mq.sass';

    .card-image
       overflow: hidden

    .position-absolute
        position: absolute;

    .position-relative
        position: relative;
        display: block;
        z-index: 1000;
    
    .top-100
        top: 20px;
    
    .right-0
        right: 10px;

    .bg-blue
        background: $red;
        color: white;

    .label
        width: 50%;
        padding: 20px;

    .flip-container
        @include per(1000);
        &:hover
            .flipper
                transform: rotateY(180deg)
        .flipper 
            transition: 0.6s;
            transform-style: preserve-3d;
            position: relative;
    
    .front, .back
        backface-visibility: hidden;
        position: absolute;
        top: 0;
        left: 0;
    

    .flip-container, .front, .back
        width: 100%;
        height: 21vw;
        +mobile
            height: 80vw;

    /* front pane, placed above back */
    .front
        z-index: 2;
        /* for firefox 31 */
        transform: rotateY(0deg);

    /* back, initially hidden pane */
    .back
        transform: rotateY(180deg);
    
    .back-logo
        width: 30%;
        height: 30%;
        img
            position: absolute;
            top: 15px;
            text-align: center;
            left: 30%;
            border-radius: 50%;
            width: 30%;
            +mobile
                margin: 0 auto;
                top: 0px;

    .back-content
        padding-top: 40px;
        font-weight: bold;
        color: #00304a;
        position: absolute;
        top: 6vw;
        left: 0;
        right: 0;
        text-align: center;
        font-family: Courier;
        font-size: 1.1rem;
        +mobile
           top: 30vw;
        


</style>