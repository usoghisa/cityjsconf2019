<template>
  <div class="banner-container">
    <div class="overlay-container thin-heading">
       <!-- <h1 class="title">{{title}}</h1>
       <p clsss="subtitle">{{subtitle}}</p> -->
    </div>
    <section class="hero columns">
      <div class="hero-body">
      </div>
    </section>
  </div>
</template>
<script>
  export default {
    props: {
      description: String,
      bannerImage: String
    },
  };
</script>

<style lang="sass" scoped>
  @import '~/assets/css/mq.sass';

  .hero
    margin: 0;
    padding: 0;
    background-image: url('//api.spiralthread.com/images/aboutus.png');
    -webkit-background-size: cover;
    background-size: cover;
    height: 250px;
    display: table;
    width: 100%;
    background-position-x: center;
    background-position-y: center;
    position: absolute;
    z-index: 998;
  
  .overlay-container
    position: absolute;
    background: rgba($red, 0.7);
    z-index: 999;
    width: 100%;
    height: 250px;
    +desktop
      padding: 100px 400px 0;

  .banner-container
    position: relative;
    display: block;
    height: 300px;

    h1 
      color: #fff;

    .title
      +mobile
        font-weight: bold
      +tablet
        font-size: 2.5rem
      +desktop
        font-size: 4rem
        margin-top: 2rem

</style>