<template>
    <section class="blackbag">
      <div class=" ">
         <div class="row"> 
            <app-h2
                title="Community Events"
                subtitle="join us this year"
                white=true
            >
            </app-h2>
            <div class="column nopadding">
                <img src="/images/previous_year/audience.jpg">
                <img src="/images/previous_year/cinema.jpg">
                <img src="/images/previous_year/workshops2.jpg">
                <img src="/images/previous_year/joe.jpg">
                <img src="/images/previous_year/lucciano.jpg">
                <img src="/images/previous_year/magic.jpg">
                <img src="/images/previous_year/workshopsaud2.jpg">
            </div>
            <div class="column nopadding" >
                <img src="/images/previous_year/smoosh.jpg">
                <img src="/images/previous_year/dylan.jpg">
                <img src="/images/previous_year/mc.jpg">
                <img src="/images/previous_year/mcspeaker.jpg">
                <img src="/images/previous_year/workshopsaud.jpg">
                <img src="/images/previous_year/workshopsaud2.jpg">
                <img src="/images/previous_year/workshopsaud2.jpg">
            </div> 
            <div class="column nopadding">
                 <img src="/images/previous_year/ingrid.jpg">
                <img src="/images/previous_year/audience2.jpg">
                <img src="/images/previous_year/trent.jpg">
                <img src="/images/previous_year/sru.jpg">
                <img src="/images/previous_year/elle.jpg">
                <img src="/images/previous_year/workshopsaud2.jpg">
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

</style>