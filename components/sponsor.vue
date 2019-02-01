<template>
    <div v-if="TypedItems.length > 0">
        <h3 class="" >{{level}}</h3>
        <section class="section">
            <div class="">
                <div class="columns">
                        <div class=' column carousel-item has-background is-active'
                            v-for="item in TypedItems"
                            v-bind:key="item._id"
                        >
                            <a :href="`${item.url}`">
                                <img class="sponsor" v-if="typeof item.image!== 'undefined'" alt="sponsor"  :src="`//api.spiralthread.com/${item.image.path}`">
                            </a>
                        </div>                
                </div>
            </div>
        </section>
    </div>
</template>

<script>
    import h2 from '@/components/h2';

    export default {
        props: {
            items: Array,
            level: String
        },
        components: {
            "app-h2" : h2
        },
        computed: {
            TypedItems() {
              if (typeof this.items!== 'undefined') {
                    return this.items.filter(item => {
                    return item.level === this.level;
                })   
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