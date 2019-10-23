<template>
  <div>
    <section class="about-home section backimg is-mobile lazyload">
      <div class="container">
        <div class="columns level-right">
          <div class="column is-4-desktop is-12-mobile is-12-tablet is-offset-4">
            <div class="card">
              <div class="card-content">
                <div class="media">
                  <div class="media-content copy">
                    <div class="title is-4 no-padding" v-html="subtitle"></div>
                    <p class="subtitle" v-html="current.subtitle"></p>
                    <div class="banner-heading">
                      <span></span>
                    </div>
                  </div>
                </div>
                <div class="content" v-html="current.description"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import h2 from "@/components/h2";
import { mapGetters } from "vuex";

export default {
  data: function() {
    return {
      isActive: false
    };
  },
  components: {
    "app-h2": h2
  },
  computed: {
    ...mapGetters({
      current: "pages/current"
    }),
  },
  props: {
    title: String,
    description: String,
    image: Object,
    subtitle: String
  }
};
</script>

<style lang="sass" scoped>
    @import '~/assets/css/mq.sass';
    .about-home
        margin-top: -130px;
        +mobile
          margin-top: 0vw;
    .backimg
        background-position: center center;
        background-repeat: no-repeat;
        background-size: cover;
        padding: 220px 0;
        height: 672px;
        &.lazyloaded
          background-image: url(/images/audience.jpg); 
          background-repeat: no-repeat; 
          background-size: cover;
          +mobile
              background-position: 41% -273px;
              background-repeat: no-repeat;
              background-size: cover;
              padding: 2.0rem 0;
              height: 255vw;
        .card
            top: -50px;
            +mobile
                top: 35vw;
    h2
        font-size: 1.8rem;
        font-weight: 700;
        line-height: 1.375;
        line-height: 2.875rem;
        text-transform: uppercase;
        padding: 30px 0;

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
            margin-top: 70%;
            margin-bottom: 20%;

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