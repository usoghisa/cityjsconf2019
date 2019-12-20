<template>
    <div class="container">
    <section class="section shallow is-centered">
    <div class="testimonials is-text  ">
        <app-h2
            title="2019 Speakers"
            subtitle="We are excited  to announce our talks for this year"
            :is-h2="true"
        >
        </app-h2>
        <div class="columns  is-multiline "> 
                <div class="column is-half-tablet is-one-third-desktop is-one-quarter-widescreen"
                v-for="item in filteredSpeakers"
                v-bind:key="item._id"
                >
                    <div class="card large round">
                        <div class="card-image ">
                            
                                <figure class="image ">
                                    <img 
                                        v-if="typeof 
                                            item.image!== 'undefined'"  
                                            width="100%" :alt="item.name" 
                                            :src="`/siteimages/${item.thumbnail.path}`"
                                            class="speaker "
                                    />
                                </figure>
                        </div>
                        <div class="card-content ">
                            <div class="media">
                                <div class="media-left">
                                <figure class="image is-96x96">
                                    <img 
                                        v-if="typeof 
                                            item.image!== 'undefined'"  
                                            width="96" :alt="item.name" 
                                            :src="`/siteimages/${item.thumbnail.path}`"
                                            class="speaker"
                                    />
                                </figure>
                                </div>
                                <div class="media-content ">
                                    <p class="title is-6">Moderator</p>
                                    <p class="title is-6"><a href="http://twitter.com/#">@twitter-id</a></p>                               
                                </div>
                            </div>
                                <div class="soc has-text-primary">
                                    <p class="title is-6 is-marginless">{{item.name}}</p>
                                    <a href="#"><i class="fa fa-github-alt fa-2x is-6" aria-hidden="true"></i></a>
                                    <a href="#"><i class="fa fa-youtube fa-2x" aria-hidden="true"></i></a>
                                    <a href="#"><i class="fa fa-facebook fa-2x" aria-hidden="true"></i></a>
                                    <a href="#"><i class="fa fa-twitter fa-2x" aria-hidden="true"></i></a>
                                </div>
							<div class="outer-border"> 
								<div class="inner-border"> 							
									<div class="content">
                                        <p class="title is-size-6">{{item.company}}</p>
                                        <p v-html="item.bio" />                                   
									</div>
								</div>				
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
import bulmaCarousel from "bulma-extensions/bulma-carousel/dist/js/bulma-carousel.min.js";
import "bulma-extensions/bulma-carousel/dist/css/bulma-carousel.min.css";
import h2 from '@/components/h2';
import talk from '@/components/talk';
import { mapGetters } from 'vuex'

export default {
  data: function() {
    return {
        chosen: null,
        open: false,
    } 
  },
  props: {
    items: {
      type: Array,
    }
  },
  components: {
    'app-h2': h2,
    "app-talk" : talk
  },
  mounted: function() {
    this.carousel = bulmaCarousel.attach();
    this.chosen = this.speakers[0];
  },
  methods: {
    select: function (talk) {
        this.chosen = talk;
        this.open = !this.open;
    },
    close: function () {
        this.open = !this.open;
    }
  },
  computed: {
    ...mapGetters({
        speakers: 'speakers/speakers',
    }),
    isMobile () {
        return (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) ? true : false;
    }, 
     filteredSpeakers() {
         if (typeof this.speakers!== 'undefined') {
             return this.speakers.filter(speaker => {
                 return speaker.year === 2019
             })
         }
    }
  }
  
};
</script>

<style lang="sass" scoped>
    @import '~/assets/css/hide-scrol.css';
    @import '~/assets/css/color-var.scss';
    @import '~/assets/css/mq.sass';

    .card.large
        background: $bg-white;
        box-shadow: none;
    
    .card-image
        position: relative;
    
    .content p 
        margin: 0em; padding:0em;
    
    .content-main
        padding: .6em; 
    .media 
        position: relative;
        margin-top: -100px;
        margin-bottom: -100px;
        background: $bg-white;

    .media-content a
        color: $green-link;
    
    .media-content
        padding-top: .3rem;
   
    .media-content p 
        padding: 0px;
        margin: 0px;

    .media-left img 
        border-bottom-right-radius: 50%;
        margin-right: .3rem;
            
    .card .media:not(:last-child) 
        margin-bottom: -.1rem;
    
    .fa 
        color: $green-link;
        padding: .7rem 1.4rem .3rem 0rem;	
    
    .fa-twitter
        padding-right: 0rem;
    // border:1px solid red; ------------------ todo last child */  
    
    .content, .outer-border 
        padding: 0rem 0rem;
        height: 12rem;
        
    .outer-border  
        border: 0px solid red; 
        position: relative; 
        overflow: hidden;

    .card-footer
        position: absolute;
        bottom: .8rem;
        width: 85%; 
        
    // ---------------------------------
    a.titlebtn
        color: $black;
        h3 
            min-height: 80px;

    .closed
        display: none
    
    // img
    //     text-align: center;
    //     left: 30%;
    //     border-radius: 50%;
    //     margin: 0 auto;
    //     top: 0px;
    // .spekers-card-container
    //     position: fixed;
    //     top: 0%;
    //     left: 0%;
    //     z-index: 1000;
    //     width: 100%;
    //     margin: 0 auto;
    //     +mobile
    //         top: 55px;
    //         left: 0%;
    //         width: 100%;
       
    //     .speaker-card
    //         position: absolute
    //         top: 20%;
    //         left: 35%;
    //         width: 40%;
    //         height: 470px;
    //         display: block;
    //         +mobile
    //          top: 0px;
    //          left: 0px;
    //          width: 100%;
    //          min-height: 230vw;
    //         .closebtn
    //             display: block;
    //             position: absolute;
    //             top: 10px;
    //             right: 10px;   
        .small-title
            font-size: 12px;
</style>