<template>
  <div>
    <section class="section backimgVenue is-mobile" :style="style">
      <div class="container">
        <div class="columns level-right">
          <!-- <div class="column is-4 is-offset-4">
            <div class="card">
              <div class="card-content">
                <div class="media">
                  <div class="media-content copy">
                    <p
                      class="title is-4 no-padding"
                    >Curzon Soho will be our venue for the 2019 main event</p>
                    <p class="subtitle">Our venue</p>
                    <div class="banner-heading">
                      <span></span>
                    </div>
                  </div>
                </div>
                <div class="content">
                  <p>
                    Our main event, on the 27th of March, is taking place at one of the most iconic places right at the city
                    centre of London, in the heart of London just a few minutes from Oxford Circus
                  </p>
                  <p>Your chance to be at the centre of JavaScript at the heart of London.</p>
                </div>
              </div>
            </div>
          </div>-->
          <div class="column is-4">
            <a href="/reviews/1" class>
              <article
                class="columns card is-gapless image-hover-scale custom-light-bg is-mobile"
                style="max-height: 160px; min-height: 160px;"
              >
                <figure class="column is-narrow is-clipped is-hidden-mobile">
                  <p class="image" style="width: 160px;">
                    <img class="lazysizes" data-src="https://mythril.nyc3.cdn.digitaloceanspaces.com/games/icons/2.jpeg" />
                  </p>
                </figure>
                <div class="column" style="position: relative;">
                  <div class="content" style="padding: 12px 15px;">
                    <p>
                      <strong>Regent Street Cinema</strong>
                      <!---->
                      <br />Just a few minutes from Oxford Circus our 2020 venue has everything for a great event.
                    </p>
                  </div>
                </div>
              </article>
            </a>
          </div>
          <div class="column is-4">
            <a href="/reviews/1" class>
              <article
                class="columns card is-gapless image-hover-scale custom-light-bg is-mobile"
                style="max-height: 160px; min-height: 160px;"
              >
                <figure class="column is-narrow is-clipped is-hidden-mobile">
                  <p class="image" style="width: 160px;">
                    <img class="lazysizes" data-src="https://mythril.nyc3.cdn.digitaloceanspaces.com/games/icons/2.jpeg" />
                  </p>
                </figure>
                <div class="column" style="position: relative;">
                  <div class="content" style="padding: 12px 15px;">
                    <p>
                      <strong>Buy Tickets</strong>
                      <!---->
                      <br />Get your tickets now, Early birds only for a small period of time.
                    </p>
                  </div>
                </div>
              </article>
            </a>
          </div>
          <div class="column is-4">
            <a href="/reviews/1" class>
              <article
                class="columns card is-gapless image-hover-scale custom-light-bg is-mobile"
                style="max-height: 160px; min-height: 160px;"
              >
                <figure class="column is-narrow is-clipped is-hidden-mobile">
                  <p class="image" style="width: 160px;">
                    <img class="lazysizes" data-src="https://mythril.nyc3.cdn.digitaloceanspaces.com/games/icons/2.jpeg" />
                  </p>
                </figure>
                <div class="column" style="position: relative;">
                  <div class="content" style="padding: 12px 15px;">
                    <p>
                      <strong>Call for Papers</strong>
                      <!---->
                      <br />Submit your talk now, be with us and a number of international speakers
                    </p>
                  </div>
                </div>
              </article>
            </a>
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
    style() {
      return `background: black`;
      //   return "`background: red`";
    }
  },
  props: {
    title: String,
    subtitle: String,
    image: String
  }
};
</script>

<style lang="sass" scoped>
    @import '~/assets/css/mq.sass';

    .backimgVenue
        background-position: center center;
        background-repeat: no-repeat;
        background-size: cover;
        height: 250px;
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