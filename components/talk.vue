<template>
    <div class="columns" v-if="talk">
      <div class="column is-6">
        <div class="card">
            <div class="card-content">
                <div class="media">
                    <div class="media-left">
                        <figure class="image is-96x96">
                        <img v-if="talk.image" :src="`//api.spiralthread.com/${talk.image.path}`" alt="Placeholder image">
                        </figure>
                    </div>
                    <div class="media-content">
                        <p>{{talk.title}}</p>
                        <p  class="title is-4">{{talk.speaker.display}}</p>
                        <p class="subtitle is-6">@johnsmith</p>
                    </div>
                </div>
                    <div class="content" v-html="talk.description">
                    </div>
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
</style>