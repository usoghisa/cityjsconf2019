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
      <div class="container"> 
        <div class="tabs">
            <ul>
                <li 
                    v-for="(date, index) in Days"
                    v-bind:key="date"
                    class="is-active">
                    <a v-on:click="select(date)">Day {{index+1}} </a>
                </li>
            </ul>
        </div>
        <app-day
            :items= 'items'
            :day= 'selectedDate'
        >
        </app-day>
      </div>
    </section>
</template>

<script>
    import h2 from '@/components/h2';
    import day from '@/components/day';

    export default {
        data: function() {
            return {
              selectedDate: {},
            }
        },
        props: {
            items: Array,
        },
        components: {
            "app-h2" : h2,
            "app-day": day
        },
        methods: {
            select: function (date) {
                this.selectedDate = date;
            }
        },
        computed: {
            Days() {
              if (typeof this.items!== 'undefined') {
                  return [...new Set(this.items.map(date => date.date))];
              } else {
                  return [];
              }
            },
        }
    };
</script>

<style lang="sass" scoped>
  @import '~/assets/css/mq.sass';


</style>