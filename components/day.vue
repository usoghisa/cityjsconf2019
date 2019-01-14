<template>
    <section class="section">
      <div class="container">
      <div class="columns">
      <div class="column is-3"> 
        <aside class="menu">
            <ul class="menu-list">
               <li 
                    v-for="(date, index) in dates"
                    v-bind:key="index"
                    class="is-active">
                    <a v-on:click="select(date)">{{date.title}}</a>
                </li>
            </ul>
        </aside>
      </div>
      <div class="column is-9"> 
        <app-talk
            :talk= 'talk'
        >
        </app-talk>
      </div>
      </div>
      </div>
    </section>
</template>

<script>
    import h2 from '@/components/h2';
    import talk from '@/components/talk';

    export default {
        data: function() {
            return {
              talk: {}
            } 
        },
        props: {
            items: Array,
            day: String,
        },
        components: {
            "app-h2" : h2,
            "app-talk" : talk
        },
        methods: {
            select: function (date) {
               this.talk = date;
            }
        },
        computed: {
            dates() {
              if (typeof this.items!== 'undefined') {
                    return this.items.filter((date) => {
                        return date.date === this.day;
                    });
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