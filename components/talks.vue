<template>
    <div class="container">
    <section class="section shallow is-centered">
    <div class="testimonials is-text ">
        <app-h2
            title="2019 Conference Day Talks"
            subtitle="We are excited  to announce our talks for this year"
            :is-h2="true"
        >
        </app-h2>
       <div class="columns "> 
           <div class="column is-4">
            <ul class="menulist"
            >
                <li 
                     v-for="item in speakers"
                    v-bind:key="item._id"
                >
                <a 
                    v-on:click="select(item)"
                    :class="{'is-active':talk === chosen}"
                >
                    <div class="">
                        <div class="card-content">
                            <div class="media">
                                <div class="media-left">
                                    <figure class="image is-48x48">
                                    <img 
                                        v-if="typeof 
                                        item.image!== 'undefined'"  
                                        :alt="item.name" 
                                        :src="`//api.spiralthread.com/${item.thumbnail.path}`"
                                        class="speaker"
                                    />
                                    </figure>
                                </div>
                                <div class="media-content">
                                    <p class="title is-4">{{item.name}} <br/>
                                        <span class="title is-6">
                                            <a :href="`//twitter.com/${item.twitter}`">
                                                @{{item.twitter}}
                                            </a>
                                        </span>
                                    </p>
                                    <p class="subtitle is-6">{{item.title}}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </a>
                </li>
            </ul>
           </div>
           <div 
                :class="['column spekers-card-container', {'closed':open === false}]" 
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

                        <div class="content">
                            {{chosen.talk}}
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
                return item.year === 2019 && (item.event === 'both' || item.event === 'talk')
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
    .closed
        +mobile
            display: none

    img
        text-align: center;
        left: 30%;
        border-radius: 50%;
        +mobile
            margin: 0 auto;
            top: 0px;
    .spekers-card-container
        +mobile
            position: fixed;
            top: 55px;
            left: 0px;
            background: $darkred;
            z-index: 1000;
            width: 100%;
            min-height: 200vw;
            overflow-y: scroll;
        .speaker-card
            .closebtn
               display: none;
            +mobile
                position: relative;
                display: block;
                min-height: 200vw;
                .closebtn
                    display: block;
                    position: absolute;
                    top: 10px;
                    right: 10px;
</style>