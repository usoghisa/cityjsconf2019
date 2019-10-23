<template>
  <div class="main">
    <!-- Mount the page content here -->
      <section>
        <app-nav 
          v-bind:items='pages'
        >
        </app-nav>
    </section>
    <nuxt/>
    <app-footer :style="style"/>
  </div>
</template>
<script>
  import nav from '@/components/nav';
  import appFooter from '@/components/footer';
  import { mapGetters } from 'vuex'
  
  export default {
    components: {
      'app-nav': nav,
      'app-footer': appFooter,
    },
    head: {
      meta: [
        { name: 'viewport', content: 'initial-scale=1.0, width=device-width' }
      ],
      link: [
      { rel: 'stylesheet', href: '//fonts.googleapis.com/css?family=Source+Sans+Pro:300,400' },
      { rel: 'stylesheet', href: '//maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css' },
      { rel: 'stylesheet', href: '//fonts.googleapis.com/css?family=Oswald:400,300,700' },
      { rel: 'stylesheet', href: '//fonts.googleapis.com/css?family=Open+Sans:400,300,700,800' }
      ]
    },
    computed: { 
      ...mapGetters({
        pages: 'pages/pages',
      }),
      style () {
        let style = 'display: none;' 
        if (this.pages) {
          style = 'display: block'
        }

        return style;
      }
    }
  }
</script>

<style lang="sass" scoped>
  @import '~/assets/css/main.sass';
  @import '~/assets/css/mq.sass';
  
</style>
