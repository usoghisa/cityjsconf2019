<template>
    <section class="section">
      <div class="container">
      <div class="columns">
      <div class="column is-3"> 
        <aside class="menu"
            v-for="(group, index) in groups"
            v-bind:key="index"
        >
            <p class="menu-label">
                {{group.location}}
            </p>
            <ul class="menulist">
               <li 
                    v-for="(talk, index) in group.talks"
                    v-bind:key="index"
                   
                >
                    <a 
                        :class="{'is-active':talk === chosen}"
                        v-on:click="select(talk)"
                    >
                        {{talk.speaker.display}} 
                        <br />
                        {{talk.time}}  
                    </a>
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
            location: String,
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
                    if (newVal!==oldVal) {
                        this.chosen = null;
                    }
                }
        },
        computed: {
            groups() {
              if (typeof this.items !== 'undefined') {
                const locations =  [...new Set(this.items.filter(date => date.date === this.day).map(talk => talk.location))];
                
                const talks =  this.items.filter((date) => {
                    return date.date === this.day;
                });

                const groups =  locations.map(location => {
                    return  {
                            'location': location, 
                            'talks': talks.filter((talk) => {
                                if(location === talk.location) {
                                    return talk;
                                }
                             })
                    }
                })

                return groups;
            

              } else {
                  return [];
              }
            
            },
            talk() {
                if (typeof this.items !== 'undefined') {
                    const firstDate = this.items.filter((date) => {
                        return date.date === this.day;
                    })[0];

                    if (this.chosen === null) {
                        this.chosen = firstDate;
                    }

                    return this.chosen;
                }
            }
        }
    };
</script>

<style lang="sass" scoped>
  @import '~/assets/css/mq.sass';


   
  .menu-label
    border-bottom: $white;
    background: $darkred;
    color: $white;
    height: 2.3em;
    padding: 10px 10px 30px 20px;
    border-left: 3px solid $white;
    font-weight: bold;

  .menulist
    li 
        border-left: 3px solid $gray;
        padding-left: 20px;
        margin-bottom: 10px;
        min-height: 40px;
        a
            color: $white;
            opacity: .6;
            &.is-active
                opacity: 1;

    .subtitle
        color: $white

  .footer
    border-bottom: 20px solid $black;

</style>