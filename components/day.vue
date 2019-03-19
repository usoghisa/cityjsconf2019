<template>
    <section class="section bordered">
      <div class="container">
      <div class="columns">
      <div class="column is-8"> 
        <aside 
            class="menu"
            v-for="(group, index) in groups"
            v-bind:key="index"
        >
            <p class="menu-label">
                {{group.location}}
            </p>

            <ul 
                class="menulist"
            >
               <li 
                    v-for="(talk, index) in group.talks"
                    v-bind:key="index"
                >
                    <a 
                        :class="{'is-active':talk === chosen}"
                        v-on:click="select(talk)"
                    >   
                        <div v-if="talk.type !== 'standard'">
                                <div class="columns talk ">
                                    <div class="column is-2">
                                        {{talk.time}}      
                                    </div>
                                    <div class="column is-6">
                                        {{talk.title}} <br/>
                                        <strong>
                                            <span
                                                
                                                v-for="(speaker, index) in talk.speakers"
                                                v-bind:key="index">
                                                {{speaker.display}} <br/>
                                            </span>
                                        </strong>
                                    </div>
                            </div>
                        </div>
                        <div v-if="talk.type === 'standard'">
                            <div class="columns talk ">
                             <div class="column is-2">
                                {{talk.time}}      
                            </div>
                             <div class="column is-2">
                               {{talk.title}}
                            </div>
                            </div>
                        </div>         
                    </a>
                </li>
            </ul>
        </aside>
      </div>
      <div class="column is-9 scheduletlk"> 
        <a  :class="['button  close closebtn', {'closed':open === false}]"
            v-on:click="close()"
        >
            <span class="icon is-small">
                X
            </span>
        </a>
        <app-talk
            :talk= 'talk'
            :open='open'
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
    import { BulmaAccordion, BulmaAccordionItem } from "vue-bulma-accordion";


    export default {
        data: function() {
            return {
              chosen: null,
              open: false,
              date: {}
            } 
        },
        props: {
            items: Array,
            day: String,
            location: String,
        },
        components: {
            "app-h2" : h2,
            "app-talk" : talk,
            "accordion":  BulmaAccordion,
            "accordion-item": BulmaAccordionItem
        },
        methods: {
            select: function (talk) {
               this.chosen = talk;
               this.open = !this.open;
            }, 
            close: function () {
                this.open = !this.open;
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
                }).sort(function(a, b) {
                    return a.order-b.order
                });

                const groups =  locations.map(location => {
                    return  {
                            'location': location, 
                            'talks': talks.filter((talk) => {
                                if(location === talk.location) {
                                    return talk;
                                }
                             }),
                            'morning': talks.filter((talk) => {
                                if(location === talk.location && talk.group === 'morning') {
                                    return talk;
                                }
                             }),
                             'midday': talks.filter((talk) => {
                                if(location === talk.location && talk.group === 'midday') {
                                    return talk;
                                }
                             }),
                             'afternoon': talks.filter((talk) => {
                                if(location === talk.location && talk.group === 'afternoon') {
                                    return talk;
                                }
                             })

                    }
                });

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

  .menu
    &:last-child
        border-bottom: 20px solid $black;

  .menu-label
    border-bottom: $white;
    background: $darkred;
    color: $white;
    height: 2.3em;
    padding: 10px 10px 30px 20px;
    border-left: 3px solid $white;
    font-weight: bold;
  
  .scheduletlk
    position: fixed;
    top: 0px;
    left: 0px;
    width: 100%;
    z-index: 10000;
    display: block;
    .close
        position: absolute;
        top: 0px;
        right: 20px;
        display: none;
        z-index: 1000000;
        background-color: transparent;
        color: $white;
        display: block
    .closed
        display: none;

  .menulist
    li 
        border-left: 3px solid $gray;
        padding-left: 20px;
        margin-bottom: 10px;
        min-height: 40px;
        padding-top: 5px;
        padding-bottom: 5px;
        a
            color: $white;
            opacity: .6;
            &.is-active
                opacity: 1;

    .subtitle
        color: $white

</style>