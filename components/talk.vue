<template>

    <div class="columns" v-if="talk">
      <div class="column is-three-quarters">
        <div class="card">
            <div class="card-content">
                <div class="columns">
                    <div class="column is-3 " v-if="talk.type !== 'standard'">
                        <figure class="image is-128x128">
                            <img v-if="talk.image" :src="`//api.spiralthread.com/${talk.image.path}`" alt="Placeholder image">
                        </figure>
                  
                    </div>
                    <div class="column is-9">
                        <h2>{{talk.title}}</h2>
                        <h3 
                          v-if="talk.speaker">
                             <ul>
                             <li 
                                v-for="(speaker, index) in talk.speakers"
                                v-bind:key="index"
                                :class="{'is-active':date === chosen}">
                                {{speaker.display}}
                             </li>
                             </ul>
                        </h3>
                    </div>
                </div>
                <div class="columns">
                   
                </div>
                <div class="content" v-html="talk.description" />
            </div>
        </div>
    </div>
    </div>
</template>

<script>
    import h2 from '@/components/h2';

    export default {
        props: {
            talk: Object,
        },
        components: {
            "app-h2" : h2
        }
    };
</script>

<style lang="sass" scoped>
  @import '~/assets/css/mq.sass';

  .card
    background-color: transparent;
    color: $white;
    border: none;
    box-shadow: none;
  
  .card-content
    padding: 0px;

  .title
    color: $white;

  .subtitle
    color: $white;
  
  figure
    padding-right: 20px;
  
  h2
    font-size: 32px;
    line-height: 34px;
    text-transform: unset;

  h3 
    font-size: 16px;
    line-height: 16px;
    padding: 0px;
    margin: 10px 0px;
    text-transform: unset;
</style>