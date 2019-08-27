<template>
  <div>
    <div id="inner">
    <section>
      <app-nav 
        v-bind:items='pages'
      >
      </app-nav>
    </section>
    <section class="hero">
      <div class="home"
        v-if="page"
      >
      <component :is="loadComponent" name="'carousel'" />
      </div>
    </section>
  </div>
  </div>
</template>

<script>
    import { mapGetters } from 'vuex'
    import Vue from 'vue'
    
    import banner from '@/components/banner';
    import carousel from '@/components/carousel';
    import nav from '@/components/nav';

    export default {
        components: {
            'app-nav': nav,
            'banner': banner,
            'carousel': carousel,
        },
        created (store) {
          this.$store.dispatch('pages/get');
        },
        async mounted () {
          let pagename= this.$route.params.page;

          if (typeof pagename !== 'undefined') {
            this.pagename = pagename;
          }
        },
        computed: { 
          ...mapGetters({
            pages: 'pages/pages',
          }),
          page  () {
            let page = this.pages.filter((page) => {
              let route = this.$route.params.page;

              if (typeof route === 'undefined') {
                route = 'home'
              }

              return page.url.toString() === route;
            })[0];
            return page;
          },
          loadComponent () {
             if (!this.name) {
                return null
            }

            console.log(this)
    
            return () => import(`@/components/${this.name}`)
          },
        },
        methods: {
          async fetch({store}) {
             await store.dispatch("pages/get")
          }
        }
    }
</script>

<style>
</style>
