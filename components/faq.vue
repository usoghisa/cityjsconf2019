<template>
    <section class="section bg-gray">
      <div class="container ">
        <div class="columns">
         <div class=" column is-two about-content ">
            <h2 class="title">Frequently Asked Questions</h2>
                <section class="accordions faqs">
                    <article class="accordion "
                        :class="{ 'is-active': index === 0 }" 
                        v-for="(item, index) in faqs"
                        v-bind:key="item._id"
                    >
                        <div class="accordion-header toggle">
                        <button class="toggle" aria-label="toggle"></button>
                        <p>{{item.question}}</p>
                        
                        </div>
                        <div class="accordion-body">
                        <div class="accordion-content"  v-html='item.answer'>
                        </div>
                        </div>
                    </article>
                </section>
         </div>
      </div>
      </div>
    </section>
</template>

<script>
    import bulmaAccordion from 'bulma-extensions/bulma-accordion/dist/js/bulma-accordion.min.js'
    import 'bulma-extensions/bulma-accordion/dist/css/bulma-accordion.min.css';
    import { mapGetters } from 'vuex'

    export default {
        name: 'faq',
        props: {
            items: {
              type: Array
            }
        },
        mounted: function() {
                this.accordions = bulmaAccordion.attach()
        },
        created (store) {
            this.$store.dispatch('faqs/get');
        },
        computed: { 
            ...mapGetters({
                faqs: 'faqs/faqs',
            })
        }
    }
</script>

<style lang="sass" scoped>
    @import '~/assets/css/mq.sass';
    
    h2
        margin: 1.5rem 0 2rem 0 !important
        text-transform: uppercase

    .fa-cog
        font-size: 40px
    

    .bg-gray
        background-color: $lightgray
    
    .accordion-header
        padding: 40px;

    .accordions
        .accordion
            font-size: 18px;
            &.is-active
                background-color: $white !important; 
                .accordion-header 
                    color: $black;
                    align-text: left;
                    background-color: $white !important; 
                    border: none
                    .toggle::before 
                        background: $white !important
                        color: $red;
                        padding: 0px;
            .accordion-header
                background-color: $lightgray !important; 
                border-bottom: 1px solid $grayins;
                padding: 23px 15px;
                font-size: 18px;
                color: $black;
                button
                    background: none;
                    padding: 0px;
                .toggle::before 
                        background: none !important
                        color: $black;
                        font-size: 20px;
                        padding: 0px;
                        margin: 0px
            
            p 
                float: left;
                width: 100%;
                padding-left: 20px;
            .accordion-body
                padding-left: 40px;
                background-color: #fff !important; 
                border: none;

</style>