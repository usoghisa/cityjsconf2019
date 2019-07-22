<template>
    <section class="blackbag">
      <div class="container">
         <div class="row"> 
            <app-h2
                title="Our Gallery"
                subtitle="join us this year"
                :is-h2="true"
                :white="true"
            >
            </app-h2>
            <div class="columns is-variable is-3-mobile is-0-tablet is-8-desktop is-8-widescreen is-8-fullhd">
                <div class="column">
                    <img src="/images/previous_year/audience.jpg">
                    <img src="/images/previous_year/cinemas.jpg">
                    <img src="/images/previous_year/elle.jpg">
                </div>
                <div class="column" >
                    <img src="/images/previous_year/cinemas.jpg"> 
                    <img src="/images/previous_year/audience.jpg">
                    <img src="/images/previous_year/elle.jpg">
                </div> 
                <div class="column">
                    <img src="/images/previous_year/dylan.jpg">
                     <img src="/images/previous_year/cinemas.jpg"> 
                    <img src="/images/previous_year/audience2.jpg">
                </div>
            </div>
        </div>
      </div>
    </section>
</template>

<script>
    import h2 from '@/components/h2';
    export default {
        data: function() {
            return {
                isActive: false
            }
        },
        components: {
            'app-h2': h2,
        },
        computed: {
        },
        props: {
            gallery: Array,
        }
    };
</script>

<style lang="sass" scoped>
    @import '~/assets/css/mq.sass';
    
    .nopadding 
        padding: 0

    
    .blackbag
        background: $black;
        padding: 20px;

    .columns
        display: flex;
        flex-direction: row; // this is default
        align-items: stretch; // this will stretch the children vertically

</style>