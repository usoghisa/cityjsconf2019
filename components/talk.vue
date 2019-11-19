<template>
    <div :class="['columns talk',  !open?'is-hidden': '']" 
        v-if="talk"
    >
      <div class="column is-three-quarters-desktop is-mobile">
        <div class="card">
            <div class="card-content">
                <div class="columns">
                    <div class="column is-3 " v-if="talk.type !== 'standard'">
                        <figure class="image is-128x128">
                            <img v-if="talk.image" :src="`siteimages/${talk.image.path}`" alt="Placeholder image">
                        </figure>
                    </div>
                    <div class="column is-9">
                        <h2>{{talk.title}}</h2>
                        <h3>
                             <ul>
                             <li 
                                v-for="(speaker, index) in talk.speakers"
                                v-bind:key="index"
                            >
                                {{speaker.display}}
                             </li>
                             </ul>

                             
                        </h3>
                    </div>
                </div>
                <div v-html="talk.description" />
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
            open: Boolean
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
    padding: 5px;
    +mobile
        overflow-y: scroll;
        height: 170vw;


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
    color: $white;

  h3 
    font-size: 16px;
    line-height: 16px;
    padding: 0px;
    margin: 10px 0px;
    text-transform: unset;
    color: $white;

  strong
    color: $white;

  .talk
    display: block;
    background: $darkred;
    +mobile
      position: initial;
      top: 20%;
      left: 0px;
      background: $darkred;
      z-index: 1000;
      width: 100%;
      min-height: 200vw;
      overflow-y: scroll;

    
</style>