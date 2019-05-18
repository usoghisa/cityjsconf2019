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
             <!-- <app-talks 
              :items="Speakers"
               v-if="Page.url === 'home' || Page.url === 'speakers'"
            >
            </app-talks> -->
            {{Year}}
             <highlights 
              :items="Speakers"
              :year='this.Year'
              v-if="Page.url === 'home' || Page.url === 'speakers'"
            >
            </highlights>
            <!-- <schedule
                v-if="Page.url === 'home' || Page.url === 'workshops' || Page.url === 'speakers'"
               :items="Schedule"
               :speakers="Speakers"
            >
            </schedule> -->
            <sponsors 
              :items="Sponsors"
              title="Our Sponsors"
              v-if="Page.url === 'sponsors' || Page.url === 'home'"
            >
            </sponsors>
             <!-- <about-venue
              v-if="Page.url === 'home'"
              title="At the heart of London"
              subtitle="At the iconic Curzon Soho Cinema"
            >
            </about-venue> -->
            <faq 
              :items="Faqs"
               v-if="Page.url === 'about' || Page.url === 'home'"
            >
            </faq>            
        </div>
      </div>
    </section> 
    </div>
    <app-footer v-if="Page" />
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
  import schedule from '@/components/schedule';
  import appFooter from '@/components/footer';
  import appTalks from '@/components/talks';
  import payments from '@/components/payments';
  import smoosh from '@/components/smoosh';

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
      'about-venue': venuestatic,
      'schedule': schedule,
      'app-footer': appFooter,
      'app-talks': appTalks,
      'payments': payments,
      'smoosh': smoosh
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
        title: 'CityJS Conference 2019, London UK'
      }
    },
    created () {
      this.$store.dispatch('getPages');
      this.$store.dispatch('getFaqs');
      this.$store.dispatch('getSpeakers');
      this.$store.dispatch('getSponsors');
      this.$store.dispatch('getSchedule');
    },
    computed: {
      Year () {
        console.log(process.env.YEAR_KEY);
        return process.env.YEAR_KEY;
      },
      Pages () {
         this.$store.state.pages
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
      Schedule () {
        return this.$store.state.schedule;
      },
      Page  () {
        let page = this.Pages.filter((page) => {
          let route = this.$route.params.page;

          console.log(process.env.YEAR);

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
