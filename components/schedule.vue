<template>
    <section class="hero columns">
      <div class="hero-body">
        <div>
            <app-h2
                title="Schedule"
                subtitle="3 days of JS Festivities around the center of London"
                :is-h2="true"
            >
            </app-h2>
        </div>
      </div>
          {{Days}}
    </section>
</template>

<script>
    import h2 from '@/components/h2';

    export default {
        props: {
            items: Array,
        },
        components: {
            "app-h2" : h2
        },
        computed: {
            Days() {
              if (typeof this.items!== 'undefined') {
                  return [...new Set(this.items.map(date => date.date))];
              } else {
                  return [];
              }
            
            }
        }
    };
</script>

<style lang="sass" scoped>
  @import '~/assets/css/mq.sass';


</style>