<template>
    <section class="section">
      <div class="container">
      <div class="columns">
      <div class="column is-3"> 
        <aside class="menu">
            <ul class="menulist">
               <li 
                    v-for="(date, index) in dates"
                    v-bind:key="index"
                    class="is-active">
                    <a v-on:click="select(date)">{{date.time}} <br /> {{date.speaker.display}}</a>
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
              chosen: null
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
            select: function (talk) {
               this.chosen = talk;
            }
        },
        watch: { 
                day: function(newVal, oldVal) { // watch it
                console.log("gel");
                console.log(newVal);
                console.log(oldVal);
                    if (newVal!==oldVal) {
                        this.chosen = null;
                    }
                }
        },
        computed: {
            dates() {
              if (typeof this.items !== 'undefined') {
                    return this.items.filter((date) => {
                        return date.date === this.day;
                    });
              } else {
                  return [];
              }
            
            },
            talk() {
                if (typeof this.items !== 'undefined') {
                    const firstDate = this.items.filter((date) => {
                        return date.date === this.day;
                    })[0];

                    console.log(firstDate);
                    console.log(this.chosen);

                    return (this.chosen === null) ? firstDate : this.chosen;
                }
            }
        }
    };
</script>

<style lang="sass" scoped>
  @import '~/assets/css/mq.sass';

  .menulist
    li 
        border-left: 3px solid $white;
        padding-left: 20px;
        margin-bottom: 10px;
        min-height: 40px;
    a
        color: $white

    .subtitle
        color: $white

</style>