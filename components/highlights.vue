<template>
    <section class="section bg-red">
    <div class="" id="videos">
        <app-h2
            :title="`Our ${this.year} Highlights`"
            :subtitle="`View from our amazing ${this.year} speakers (sponsored by Pusher)`"
            :is-h2="true"
            :white="true"
        >
        </app-h2>
        <div class="columns">
            <div class="column">  
                <div class='carousel carousel-animated carousel-animate-slide' :data-size="isMobile ? '1' : '3'" data-autoplay="true">
                    <div class='carousel-container'>
                        <div class='carousel-item has-background is-active'
                            v-for="item in speakers"
                            v-bind:key="item._id"
                        >
                            <a class="speaker" :href="`${item.videoUrl}`">
                                <figure class="bimage">
                                    <img v-if="typeof item.image!== 'undefined'" :alt="item.name"  :src="`//api.spiralthread.com/${item.image.path}`">
                                </figure>
                                <div class="media-content">
                                    <img src="/images/play-btn.svg" class="play" alt="play" width="40" />
                                    <p class="is-4-mobile no-padding">{{item.name}}</p>
                                     <p class="subtitle is-6-mobile">{{item.company}}</p>
                                    <p><span class=" is-6-mobile">{{item.title}}</span></p>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div class="carousel-navigation is-centered">
                        <div class="carousel-nav-left">
                            <i class="fa fa-chevron-left" aria-hidden="true"></i>
                        </div>
                        <div class="carousel-nav-right">
                            <i class="fa fa-chevron-right" aria-hidden="true"></i>
                        </div>
                    </div>
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
      type: Array,
    },
     year: String
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
         return this.items.filter(item => {
             return (item.year === parseInt(this.year)) 
             && (item.event === "talk" || item.event === "both")
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

    .play
        position: absolute;
        top: -35px
        left: 0px;
        padding: 5px;
        background: $white;

    .bg-red
        background: $red;
        color: $white;

    .carousel
        height: 550px;
        +mobile
            height: 450px;

    .carousel-navigation
        position: absolute
        bottom: 10px

    .carousel-item
        a
            color: $black;
            font-size: 20px;

    .card-image
       overflow: hidden

    .bimage
        img
            width: 100%;
            +mobile
              width: inherit
        +mobile
            width: 100%;

    .bg-gray
        background-color: $lightgray
    
    .media-content
        margin-top: -100px;
        position: absolute;
        background-color: $white;
        width: 95%;
        padding: 10px;
        height: 150px;
        .title 
            font-size: 24px;
            position: inherit
            text-transform: uppercase;
        +mobile
            margin-top: -20px;
            width: 92%;

    .heading
        .subtitle
            text-transform: uppercase;
            font-weight: bold;
            padding: 10px;

    .carousel-item
        .content
            .title  
                position: initial !important;
                font-size: 1.4rem  !important;
            a
                color: $black !important;


</style>