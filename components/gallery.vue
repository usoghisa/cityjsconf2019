<template>
  <section class="blackbag">
    <div class="container">
      <div class="row">
        <app-h2 title="Our Gallery" subtitle="some of the best moments" :is-h2="true" :white="true"></app-h2>

        <div class="columns row columns is-mobile is-multiline">
          <div class="column is-8">
            <div class="columns row columns is-mobile is-multiline">
              <div class="column is-12 is-12-mobile side-crop">
                <a
                  class="polaroid"
                  href="https://www.flickr.com/photos/182802514@N02/albums/72157710741420497"
                  target="_blank"
                >
                  <img class="is-2" src="/images/previous_year/audience.jpg" />
                  <div class="pictitle">
                    <p>2019</p>
                  </div>
                </a>
              </div>

              <div class="column is-6 is-12-mobile">
                <a
                  class="polaroid"
                  href="https://www.flickr.com/photos/182802514@N02/albums/72157710741420497"
                  target="_blank"
                >
                  <img class="is-2" src="/images/previous_year/workshops.jpeg" />
                  <div class="pictitle">
                    <p>2019</p>
                  </div>
                </a>
              </div>

              <div class="column is-6 is-12-mobile">
                <a
                  class="polaroid"
                  href="https://www.flickr.com/photos/182802514@N02/albums/72157710741420497"
                  target="_blank"
                >
                  <img class="is-2" src="/images/previous_year/audience2.jpg" />
                  <div class="pictitle">
                    <p>2019</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div class="column is-4">
            <div class="columns">
              <div class="column is-12 is-12-mobile">
                <a
                  class="polaroid"
                  href="https://www.flickr.com/photos/182802514@N02/albums/72157710741420497"
                  target="_blank"
                >
                  <img class="is-2" src="/images/previous_year/ex2.jpg" />
                  <div class="pictitle">
                    <p>2019</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div class="is-12">
          <p class="is-pulled-left photography">
            photography
            <a href="https://www.instagram.com/mnmarkg/">@mnmarkg</a>
          </p>
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
  props: {}
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

        
    .photography
      color: $white;
      font-size: 12px;
      margin-left: 20px;
      a
        color: $white;
        font-weight: bold;


    .pictitle
      margin: 0px 0px;
      text-align: center;
      position: absolute;
      display: none;
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


    .side-crop 
      max-width: 100%; 
      overflow: hidden;
      height: 250px;
      position: relative
      display: block;
      img
        max-width: initial;
        top: -242px;
        position: absolute;
        left: 0px;
        width: 100%;

</style>
