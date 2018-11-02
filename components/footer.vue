<template>
    <footer class="footer">
      <div class="container">
        <div class="columns">
          <div class="column">
            <p>CityJSConf, a community conference run by the Community</p>
          </div>
          <div class="column has-text-right">
            <a class="icon" href="https://twitter.com/cityjsconf"><i class="fa fa-twitter"></i></a>
          </div>
        </div>
      </div>
    </footer>
</template>
<script>
  export default {
    props: {
      title: String,
      description: String,
    }
  };
</script>
<style lang="sass" scoped>
    @import '~/assets/css/mq.sass';


    footer
        background: #000;
        color: #fff

        .icon
            color: #fff
            margin-left: 20px
</style>