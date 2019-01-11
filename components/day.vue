<template>
    <section class="hero columns">
      <div class="container"> 
          {{dates}}
        <div class="tabs">
             <ul>
                <li 
                    v-for="(date) in dates"
                    v-bind:key="date"
                    class="is-active">
                    <a v-on:click="select(date.title)">{{date.title}}</a>
                </li>
            </ul>
        </div>
      </div>
    </section>
</template>

<script>
    import h2 from '@/components/h2';

    export default {
        props: {
            items: Array,
            day: String,
        },
        components: {
            "app-h2" : h2
        },
        methods: {
            select: function (date) {
                alert(date)
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