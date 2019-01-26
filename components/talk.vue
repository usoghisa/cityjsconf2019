<template>
    <div class="columns" v-if="talk">
      <div class="column is-three-quarters">
        <div class="card">
            <div class="card-content">
                <div class="columns">
                    <div class="column is-full">
                        <h2>{{talk.title}}</h2>
                    </div>
                </div>
                <div class="columns">
                    <div class="column is-1">
                        <figure class="image is-64x64">
                            <img v-if="talk.image" :src="`//api.spiralthread.com/${talk.image.path}`" alt="Placeholder image">
                        </figure>
                    </div>
                    <div class="column is-4">
                        <p  class="title is-4">{{talk.speaker.display}}</p>
                        <p class="subtitle is-6">@johnsmith</p>
                    </div>
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
  
</style>