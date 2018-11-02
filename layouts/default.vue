<template>
  <div class="main">
    <!-- Mount the page content here -->
    <nuxt/>
    <app-footer />
  </div>
</template>
<script>
import appFooter from '@/components/footer';

export default {
  head: {
    meta: [
      { name: 'viewport', content: 'initial-scale=1.0, width=device-width' }
    ],
    link: [
     { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400' },
     { rel: 'stylesheet', href: 'https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css' },
     { rel: 'stylesheet', href: 'http://fonts.googleapis.com/css?family=Oswald:400,300,700' },
     { rel: 'stylesheet', href: 'http://fonts.googleapis.com/css?family=Open+Sans:400,300,700,800' }
    ]
  },
  components: {
    'app-footer': appFooter
  }
}
</script>

<style lang="sass" scoped>
  @import '~/assets/css/main.sass';
  @import '~/assets/css/mq.sass';
  
</style>
