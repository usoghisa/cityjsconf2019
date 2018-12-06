<template>
  <div>
    <div id="inner">
    <section>
      <app-nav 
        v-bind:items='Pages'
      >
      </app-nav>
    </section>
    <section class="hero">
      <div class="home">
        <div v-if="Page">
            <banner 
              :title='Page.title'
              :description='Page.description'
              :bannerImage='Page.bannerimage'
              v-if="Page.url !== 'home'"
            >
            </banner>
            <carousel 
              slides="[]"
              v-if="Page.url === 'home'"
            >
            </carousel>
            <page
              :title='Page.title'
              :subtitle='Page.subtitle'
              :shortDescription='Page.shortDescription'
              :description='Page.description'
              :widgets='Page.widgets'
              :image='Page.image'
            >
            </page>
             <speakers2019 
              :items="Speakers"
               v-if="Page.url === 'speakers' || Page.url === 'home'"
            >
            </speakers2019>
             <highlights 
              :items="Speakers"
               v-if="Page.url === 'speakers'"
            >
            </highlights>
            <about-venue
              v-if="Page.url === 'home'"
              title="At the heart of London"
              subtitle="At the iconic Curzon Soho Cinema"
            >
            </about-venue>
            <sponsors 
              :items="Sponsors"
              title="Our Sponsors"
              v-if="Page.url === 'sponsors' || Page.url === 'home'"
            >
            </sponsors>
            <faq 
              :items="Faqs"
               v-if="Page.url === 'about' || Page.url === 'home'"
            >
            </faq>
            
        </div>
      </div>
    </section> 
    </div>
  </div>
</template>

<script>
  import nav from '@/components/nav';
  import banner from '@/components/banner';
  import page from '@/components/page';
  import carousel from '@/components/carousel';
  import faq from '@/components/faq';
  import highlights from '@/components/highlights';
  import speakers2019 from '@/components/speakers2019';
  import sponsors from '@/components/sponsors';
  import venuestatic from '@/components/about-venue';

  export default {
    components: {
      'app-nav': nav,
      'banner': banner,
      'page': page,
      'carousel': carousel,
      'faq': faq, 
      'highlights': highlights,
      'speakers2019': speakers2019,
      'sponsors': sponsors,
      'about-venue': venuestatic
    },
    data: () => ({
      pagename: 'Home',
    }),
    async mounted () {
      let pagename= this.$route.params.page;

      if (typeof pagename !== 'undefined') {
        this.pagename = pagename;
      }
    },
    head () {
      return {
        title: 'CityJSConf 2019'
      }
    },
    created () {
      this.$store.dispatch('getPages');
      this.$store.dispatch('getFaqs');
      this.$store.dispatch('getSpeakers');
      this.$store.dispatch('getSponsors');
    },
    computed: {
      Pages () {
        return this.$store.state.pages
      },
      Faqs () {
        return this.$store.state.faqs;
      },
      Speakers () {
        return this.$store.state.speakers;
      },
      Sponsors () {
        return this.$store.state.sponsors;
      },
      Page  () {
        let page = this.Pages.filter((page) => {
          let route = this.$route.params.page;

          if (typeof route === 'undefined') {
            route = 'home'
          }

          return page.url === route;
        })[0];

        return page;
      }
    }
  }
</script>
