<template>
  <div class="sponsors">
    <section class="hero columns">
      <div class="hero-body">
        <div>
            <app-h2
                title="Our Sponsors"
                subtitle="CITYJS CONFERENCE WOULDN'T BE POSSIBLE WITHOUT OUR AMAZING SPONSORS"
                :is-h2="true"
            >
            </app-h2>
           
            <div class="">
            <div class="columns is-centered is-half">
            <div class="column is-half has-text-centered">
               <br/>If you are thinking of sponsoring please <a href='mailto:cityjsconf@gmail.com'>contact us</a>
              </div>
            </div>
            <div class="columns is-centered is-half">
            <div class="column is-half has-text-centered">
                <app-sponsor
                  :items="filteredSponsors"
                  level="Platinum"
                  :is-h2="false"
                >
                </app-sponsor>
              </div>
            </div>
            <div class="columns is-centered is-half">
               <div class="column is-10 has-text-centered">
                <app-sponsor
                  :items="filteredSponsors"
                  level="Gold"
                  :is-h2="false"
                >
                </app-sponsor>
              </div>
            </div>
             <div class="columns is-centered ">
               <div class="column is-10 has-text-centered">
                <app-sponsor
                  :items="filteredSponsors"
                  level="Silver"
                  :is-h2="false"
                >
                </app-sponsor>
              </div>
            </div>
             <div class="columns is-centered ">
               <div class="column is-10 has-text-centered">
                <app-sponsor
                  :items="filteredSponsors"
                  level="Bronze"
                  :is-h2="false"
                >
                </app-sponsor>
              </div>
            </div>
            <div class="columns is-centered is-half">
               <div class="column is-10 has-text-centered">
                <app-sponsor
                  :items="filteredSponsors"
                  level="Video"
                  :is-h2="false"
                >
                </app-sponsor>
              </div>
            </div>
            <div class="columns is-centered is-half">
               <div class="column is-one has-text-centered">
                <app-sponsor
                  :items="filteredSponsors"
                  level="Community"
                  :is-h2="false"
                >
                </app-sponsor>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
  import sponsor from '@/components/sponsor';
  import h2 from '@/components/h2';
  import { mapGetters } from 'vuex'
  
  export default {
    props: {
      items: Array,
    },
    components: {
     'app-sponsor': sponsor,
     'app-h2' : h2
    },
    created (store) {
      this.$store.dispatch('sponsors/get');
    },
    computed: { 
      ...mapGetters({
        sponsors: 'sponsors/sponsors',
        pages: 'pages/current'
      }),
      filteredSponsors() {
        let sponsors = this.sponsors.filter((sponsor) => {
          return sponsor.Year.includes(this.pages.year); 
        });

        return sponsors;
      }
    }
  };
</script>

<style lang="sass" scoped>
  @import '~/assets/css/mq.sass';

</style>