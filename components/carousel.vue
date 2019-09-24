<template>
  <div class="overlay">
    <div class="overlay-container">
      <section id="home">
        <div class="video_shader"></div>
        <div class="video_contain">
          <video
            class="video-player"
            id="background"
            preload="auto"
            width="100%"
            poster="/videos/cityjsconf.jpg"
            muted
            playsinline
            height="100%"
            aria-labelledby="banner381127-text"
            autoplay
            loop
          >
            <source src="/videos/cityjs.mp4" type="video/mp4" />
            <source src="/videos/cityjs.webm" type="video/webm" />
            <!-- <source src="~/assets/videos/cityjsconf.ogv" type="video/ogg"> -->
            <p>
              Sorry, your browser doesn't support embedded videos,
              but you can
              <a
                href="/videos/cityjs.mp4"
              >download it</a>
              and watch it with your favorite video player
            </p>
          </video>
        </div>
      </section>
      <div class="columns has-text-centered slide is-marginless">
        <div class="column is-two-thirds is-4 is-offset-4">
          <h1>
            <b>
              City of London JavaScript Conference
              <br />CityJSConf
              <br />03 May 2019
            </b>
            <br />
            <a
              href="https://www.papercall.io/cityjsconf2019"
              class="is-info button info is-rounded"
            >Call For Papers</a>
          </h1>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  props: {
    slides: {
      type: String
    }
  },
  components: {}
};
</script>

<style lang="sass">
  @import '~/assets/css/mq.sass';



  .video_contain
    position: absolute;
    background: url('/videos/cityjsconf.jpg') no-repeat top 
    -webkit-background-size: contain;
    -moz-background-size: contain;
    -o-background-size: contain;
    background-size: contain;
    top: 0%;
    left: -50%;
    width: 200%;
    height: 100vw;
    +mobile
      top: 0px;
      height: 113vw;
    +tablet
    +desktop

  video
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    margin: auto;
    min-height: 50%;
    min-width: 50%;

  .overlay
    position: relative;
    display: block;
    min-height: 900px;
    height: 900px
    overflow: hidden;
    +mobile
      height: 113vw;
      min-height: 300px;
    +microtablet 
      height: 300px;
      min-height: 60vw;
    +desktop-only
      height: 390px;
      min-height: 700px;
    +desktop
      height: 900px;
      min-height: 900px;

  .video-banner 
    list-style-type: none;
    margin-left: 0;
    margin-top: 0;

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
    
    h1
      color: #fff
      font-size: 3.0736rem
      font-weight: 700
      line-height: 1.375
      text-transform: uppercase
      @include position(absolute, $top: 23%, $left: 30%)
      font-family: 'Oswald', sans-serif;
      position: absolute
      margin-left: auto;
      margin-right: auto;
      left: 0;
      right: 0;
      +mobile
        font-size: 2rem;

      .info
        display: none
        +mobile
          display: block
          margin-left: 20px;
          margin-right: 20px;
          margin-top: 10px;
          width: 50%;
          margin: 0 auto;
          margin-top: 34px;
  
</style>