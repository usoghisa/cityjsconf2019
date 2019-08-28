<template>
  <div>
    <div id="inner">
    <section>
      <!-- <app-nav 
        v-bind:items='pages'
      >
      </app-nav> -->
    </section>
    <section class="hero">
      <div class="home"
       v-if="this.page && this.components"
      >
        <template v-for="(component, i) in this.components" >
          {{component.name}}
            <component :key="i" v-bind:is="component"></component>
        </template>

      </div>
    </section>
  </div>
  </div>
</template>

<script>
    import { mapGetters } from 'vuex'
    import Vue from 'vue'
    export default {
        components:{

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
          async components () {
            let widgets = [
                {
                    type: 'carousel',
                    name: 'carousel'
                },
                {
                    type: 'gallery',
                    name: 'gallery'
                }
            ];
            let componentsToLoad = await widgets.forEach((component, index) => {
               import(`@/components/${component.type}`).then(comp => {
                  this.components[index] = comp.default;
                })
            });

            console.log(this)

            return componentsToLoad;
          }
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
