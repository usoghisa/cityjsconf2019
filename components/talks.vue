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
        <div class="columns  is-mobile is-multiline is-centered"> 
           <div 
                class="column is-three-quarters-mobile is-two-thirds-tablet
                 is-half-desktop is-one-third-widescreen is-one-quarter-fullhd"
                v-for="item in speakers"
                v-bind:key="item._id"
           >
                    <div class="is-one  ">
                         <div class="card-image">
                            <a 
                                v-on:click="select(item)"
                            >
                                <figure class="image is-92x92">
                                    <img 
                                        v-if="typeof 
                                        item.image!== 'undefined'"  
                                        :alt="item.name" 
                                        :src="`//api.spiralthread.com/${item.thumbnail.path}`"
                                        class="speaker"
                                    />
                                </figure>
                            </a>
                        </div>
                        <div class="card-content">
                            <div class="media">
                                <div class="media-content has-text-centered">
                                     <a 
                                        class="titlebtn"
                                        v-on:click="select(item)"
                                    >
                                        <h3 class="small-title">
                                            {{item.title}}                                                                  
                                        </h3>
                                    </a>
                                    <p class="subtitle is-6">{{item.name}}  <a class="icon" :href="`//twitter.com/cityjsconf${item.twitter}`"><i class="fa fa-twitter"></i></a>   
                                       <br/>  {{item.company}}
                                     </p>  
                                </div>
                            </div>
                        </div>
                    </div>
           </div>
           <div 
                :class="['column spekers-card-container modal-background', {'closed':open === false}]" 
                v-if="this.chosen"
            >
                <div class="card speaker-card">
                    <div class="card-content">
                        <div class="media">
                        <div class="media-left">
                            <figure class="image is-48x48">
                                <img 
                                    v-if="typeof 
                                    chosen.image!== 'undefined'"  
                                    :alt="chosen.name" 
                                    :src="`//api.spiralthread.com/${chosen.thumbnail.path}`"
                                    class="speaker"
                                />
                            </figure>
                            <a 
                                :class="['button  close closebtn', {'closed':open === false}]"
                                v-on:click="close()"
                            >
                                <span class="icon is-small">
                                    X
                                </span>
                            </a>
                        </div>
                        <div class="media-content">
                            <p class="title is-4">{{chosen.name}}</p>
                            <p class="subtitle is-6">
                                <a :href="`//twitter.com/${chosen.twitter}`">
                                    @{{chosen.twitter}}
                                </a><br/>
                                {{chosen.company}}
                            </p>
                        </div>
                        </div>
                        <div v-html="chosen.talk" />
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
    isMobile () {
        return (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) ? true : false;
    }, 
    speakers () {
        if (typeof this.items!== 'undefined') {
            let speakers = [];
            speakers = this.items.filter(item => {
                return (item.year === 2019)
            }); 

            this.chosen = speakers[0];


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
    
    a.titlebtn
        color: $black;
        h3 
            min-height: 80px;

    .closed
        display: none
    img
        text-align: center;
        left: 30%;
        border-radius: 50%;
        margin: 0 auto;
        top: 0px;
    .spekers-card-container
        position: fixed;
        top: 0%;
        left: 0%;
        z-index: 1000;
        width: 100%;
        margin: 0 auto;
        +mobile
            top: 55px;
            left: 0%;
            width: 100%;
       
        .speaker-card
            position: absolute
            top: 20%;
            left: 35%;
            width: 40%;
            height: 470px;
            display: block;
            +mobile
             top: 0px;
             left: 0px;
             width: 100%;
             min-height: 230vw;
            .closebtn
                display: block;
                position: absolute;
                top: 10px;
                right: 10px;
        
        .small-title
            font-size: 12px;
</style>