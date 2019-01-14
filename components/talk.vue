<template>
    <section class="section">
      <div class="container">
      <div class="columns">
      <div class="column is-3"> 
       {{talk}}
      </div>
      <div class="column is-9"> 
          
      </div>
      </div>
      </div>
    </section>
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