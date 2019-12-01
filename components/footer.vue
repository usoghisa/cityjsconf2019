<template>
    <footer class="footer">
      <div class="container">
        <div class="columns">
          <div class="column is-6">
            <p>CityJS Conference, a community conference run by the Community</p>
          </div>
          <div class="column is-3">
                <a class="whitelink" href="past">Past events</a> <br />
                <a class="whitelink" href="coc">Code of conduct</a> <br />
                <a class="whitelink" href="about">About</a>
          </div>
          <div class="column is-3">
            <!-- <app-newsletter />
           <br/> -->
            Follow us:
            <a class="icon" href="https://twitter.com/cityjsconf"><i class="fa fa-twitter"></i></a>
             <a class="icon" href="https://instagram.com/cityjsconf_official/"><i class="fa fa-instagram"></i></a>    
        </div>
      
        </div>
      </div>
    </footer>
</template>
<script>
  import newsletter from '@/components/newsletter';

  export default {
    props: {
      title: String,
      description: String,
    },
    components: {
      "app-newsletter" : newsletter,
    },
  };
</script>
<style lang="sass" scoped>
    @import '~/assets/css/mq.sass';

    .main
      height: 100%;
      
    footer
        background: #000;
        color: #fff

        a
          &.whitelink
            color: $white

        .icon
            color: #fff
            margin-left: 20px
</style>