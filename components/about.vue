<template>
    <div>
        <app-banner 
            :title="current-title"
        />
        <section class="section ">

        <div class="container ">
            <div class="columns">
            <div class="column is-two">
                <h2 class="title" v-html="current.title"></h2>
                <p class="subtitle" v-html="current.description"></p>
                <app-payments 
                    v-if="current.title === 'Buy Tickets'"
                >
                </app-payments>
            </div>
            <div class="column img" :style="style">
            </div>
            </div>
        </div>
        </section>
    </div>
</template>

<script>
    import payments from '@/components/payments';
    import banner from '@/components/banner';
    
    import { mapGetters } from 'vuex';

    export default {
        data: function() {
            return {
                isActive: false
            }
        },
        components: {
            'app-payments': payments,
            'app-banner': banner
        },
        computed: {
            ...mapGetters({
               current: 'pages/current',
            }),
            style () {
               console.log(this.current.image)
               return `background-image: url(/siteimages/${this.current.image.path});`;
            }
        },
        props: {
            title: String,
            description: String,
            image: String,
        }
    };
</script>

<style lang="sass" scoped>
    @import '~/assets/css/mq.sass';
    
    .fa-cog
        font-size: 40px

    #learn
        +desktop
        margin-bottom: 2rem

    .pd
        +tablet
        padding: 2em 0

    .img
        display: block
        background-cover:cover
        background-repeat: no-repeat
        width: 100%;
        height: 523px;
        background-position-x: center;
        background-position-y: center;
    
    .about
        width: 100%

        .about-content
            padding: 6.75rem;
       

</style>