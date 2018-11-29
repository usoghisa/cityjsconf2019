<template>
    <section class="section shallow">
    <div class="testimonials has-text-centered">
        <app-h2
            title="2019 Speakers"
            subtitle="Take some time to read about our amazing speakers!"
            :is-h2="true"
        >
        </app-h2>
        <div class="">
            <div class="">     
                <div class='grid-item' data-autoplay="true">
                    <div class='grid'>
                        <div class='grid-item has-background is-active'
                            v-for="item in items"
                            v-bind:key="item._id"
                        >
                            <div class="card">
                               <div class="card-content">
                                   <div class="media">
                                        <div class="media-left">
                                            <div class="cropimage">
                                                <img 
                                                    v-if="typeof 
                                                    item.image!== 'undefined'"  
                                                    width="200" :alt="item.name" 
                                                    :src="`//api.spiralthread.com/${item.image.path}`"
                                                    class="speaker"
                                                />
                                            </div>

                                            <div class="social-icon">
                                                <svg aria-hidden="true" data-prefix="fab" data-icon="twitter" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" size="sm"
                                                class="svg-inline--fa fa-twitter fa-w-16 fa-sm">
                                                <path fill="currentColor" 
                                                    d="" class="">
                                                </path>
                                                </svg>
                                            </div>
                                        </div> 
                                        <div class="media-content">
                                            <div class="name has-text-weight-bold has-text-grey-dark">
                                                {{item.name}}
                                            </div> 
                                            <div class="username has-text-primary">
                                                {{item.company}}
                                            </div>
                                        </div>
                                </div> 
                                <div class="text">
                                    <!-- {{item.title}} -->
                                </div>
                            </div>
                        </div>
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
    }
  }
  
};
</script>

<style lang="sass" scoped>
    @import '~/assets/css/mq.sass';
    .card-image
       overflow: hidden
    .grid
        text-align: center;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: stretch;
        -ms-flex-align: stretch;
        align-items: stretch;
        margin: 0 auto;
        -ms-flex-wrap: wrap;
        flex-wrap: wrap;
        margin-bottom: 40px;
        .grid-item
            width: 30%;
            text-align: left;
            padding: 1.5rem;
            vertical-align: top;
            display: inline-block;
            position: relative;
            +mobile
                width: 100%;
            +tablet
                width: 30%;

    img.speaker
        display: inline;
        margin: 0 auto;
        height: 100%;
        width: auto;

        
    .cropimage
        width: 100px;
        height: 100px;
        position: relative;
        overflow: hidden;
        border-radius: 50%;

</style>