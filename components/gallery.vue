<template>
  <section class="blackbag">
    <div class="container">
      <div class="row">
        <app-h2 title="Our Gallery" subtitle="join us this year" :is-h2="true" :white="true"></app-h2>
        <div class="columns is-multiline">
          <div class="column is-4 is-12-mobile">
            <div class="polaroid">
              <img class="is-2" src="/images/previous_year/elle.jpg" />
              <div class="pictitle">
                <p>Our event</p>
              </div>
            </div>
          </div>
          <div class="column is-4 is-12-mobile">
            <div class="polaroid">
              <img src="/images/previous_year/dylan.jpg" />
              <div class="pictitle">
                <p>Our speakers</p>
              </div>
            </div>
          </div>
          <div class="column is-4 is-12-mobile">
            <div class="polaroid">
              <img src="/images/previous_year/audience2.jpg" />
              <div class="pictitle">
                <p>CityJS 2019</p>
              </div>
            </div>
          </div>
          <div class="column is-4 is-12-mobile">
            <div class="polaroid">
              <img src="/images/previous_year/elle.jpg" />
              <div class="pictitle">
                <p>CityJS 2018</p>
              </div>
            </div>
          </div>
          <div class="column is-4 is-12-mobile">
            <div class="polaroid">
              <img src="/images/previous_year/audience.jpg" />
              <div class="pictitle">
                <p>Community</p>
              </div>
            </div>
          </div>
          <div class="column is-4 is-12-mobile">
            <div class="polaroid">
              <img src="/images/previous_year/elle.jpg" />
              <div class="pictitle is-h2">
                <p>ELLE</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import h2 from "@/components/h2";
export default {
  data: function() {
    return {
      isActive: false
    };
  },
  components: {
    "app-h2": h2
  },
  computed: {},
  props: {
    gallery: Array
  }
};
</script>

<style lang="sass" scoped>
    @import '~/assets/css/mq.sass';

    .nopadding
        padding: 0;


    .blackbag
        background: $black;
        padding: 20px;

    .column
        display: flex;
        flex-direction: row;// this is default;


    .polaroid
      margin: 10px;
      color: black;
      position: relative;
      display: block;
      img
        +mobile
         float: left;
         width: 24%;


    .pictitle
      margin: 0px 0px;
      text-align: center;
      position: absolute;
      width: 95%;
      padding: 20px;
      background: #fff;
      bottom: 20px;
      left: 10px;
      +mobile
        color: #fff;
        width: 100%;
        position: initial;
        background: #b13232;
        border: 1px solid #322525;



    .container
      text-align: center;
      padding: 10px 20px;




</style>
