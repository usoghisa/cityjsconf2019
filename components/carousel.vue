<template>
  <div>
    <div class="overlay">
      <div class="overlay-container">
        <section id="home">
          <div class="video_shader"></div>
          <div class="video_contain"></div>
        </section>
        <div class="columns has-text-centered slide is-marginless">
          <div class="column is-two-thirds is-6 is-offset-4 contend">
            <h1>
              <b>
                City of London JavaScript Conference
                <br />CityJS Conference
              </b>
            </h1>
            <!-- <h2 class="location">Curzon Soho | Microsoft Reactor</h2> -->
            <!-- <a href="/buytickets" class="is-info button info is-primary">Get your tickets</a> -->
          </div>
        </div>
      </div>
    </div>
    <!-- <Timer starttime="May 1, 2019 09:00:00" endtime="May 1, 2019 17:00:00"></Timer> -->
  </div>
</template>


<script>
import timer from "@/components/timer";
import h2 from "@/components/h2";
export default {
  props: {
    slides: {
      type: String
    }
  },
  components: {
    Timer: timer,
    "app-h2": h2
  }
};
</script>

<style lang="sass">
  @import '~/assets/css/mq.sass';

  h2
    padding: 5px;

  .contend
    color: $white;
    font-size: 2.4736rem
    font-weight: 700
    line-height: 1.375
    text-transform: uppercase
    font-family: 'Oswald', sans-serif;
    position: absolute
    margin-left: auto;
    margin-right: auto;
    padding-bottom: 20px;
    left: 0;
    right: 0;
    @include position(absolute, $top: 23%, $left: -10%)
    +mobile
      font-size: 1.2rem;
      height: 200vw;
      @include position(absolute, $top: 33%, $left: 4%)

  .video_contain
    position: absolute;
    background: url('/images/audience.jpg') no-repeat top
    background-repeat: no-repeat;
    padding: 150px 0;
    height: 100vw;
    background-position-y: -185px;
    top: 0%;
    left: -70%;
    width: 240%;
    height: 200vw;
    +mobile
      top: 0px;
      height: 200vw;
      background-position-y: 0;
    +tablet
    +desktop

  .location
    font-size: 1.8rem;
    +mobile
      font-size: .9rem;

  .overlay
    position: relative;
    display: block;
    overflow: hidden;
    +mobile
      height: 113vw;
      min-height: 300px;
    +microtablet 
      height: 600px;
      min-height: 40vw;
    +desktop
      min-height: 100vw;


  .banner:before
    content: "";
    @include position(absolute, $top: 0, $left: 0);
    z-index: 1;
    width: 100%;
    height: auto;
  
  .video-player
    position: absolute;
    width: 100%;
    height: auto;

  .overlay-container
    position:absolute
    background: rgba($red, 0.7)
    height: 230vw;
  
  .slide
    width: 100%
    height: 100%;
    background: inherit
    text-align: center
    @include position(absolute, $top: 0px, $left: 0px)
    +mobile
      padding: 0px;
      margin: 0px;
    +tablet
    +desktop

  .info 
    margin-top: 5px;
    font-size: 0.5em;
    +mobile
      font-size: .9rem;   
  
</style>