<template>
    <section class="hero columns"  :style="style">
      <div class="hero-body">
        <div>
            <app-h2
                title="Schedule"
                subtitle="3 days of JS Festivities around the center of London"
                :is-h2="true"
            >
            </app-h2>
        </div>
      </div>
    </section>
</template>

<script>
    import h2 from '@/components/h2';

    export default {
        props: {
            items: Array,
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