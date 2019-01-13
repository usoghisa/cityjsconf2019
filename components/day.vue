<template>
    <section class="section">
      <div class="container">
      <div class="columns">
      <div class="column is-3"> 
        <aside class="menu">
            <ul class="menu-list">
               <li 
                    v-for="(date) in dates"
                    v-bind:key="date"
                    class="is-active">
                    <a v-on:click="select(date)">{{date.title}}</a>
                </li>
            </ul>
        </aside>
      </div>
      <div class="column is-9"> 
          {{selectedTalk}}
      </div>
      </div>
      </div>
    </section>
</template>

<script>
    import h2 from '@/components/h2';

    export default {
        data: {
            selectedTalk: {}
        },
        props: {
            items: Array,
            day: String,
        },
        components: {
            "app-h2" : h2
        },
        methods: {
            select: function (date) {
                console.log(date);
               this.selectedTalk = date;
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
            
            }
        }
    };
</script>

<style lang="sass" scoped>
  @import '~/assets/css/mq.sass';


</style>