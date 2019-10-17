<template>
    <section class="section bg-gray">
        <div class="container ">
            <div class="columns">
                <div class=" column is-two about-content ">
                    <h2 class="title">Frequently Asked Questions</h2>
                    <BulmaAccordion
                        dropdown
                        :icon="'plus-minus'"
                        :caretAnimation="{
                            duration: '.2s',
                            timerFunc: 'ease-in-out'
                        }"
                        :slide="{
                            duration: '.2s',
                            timerFunc: 'ease'
                        }"
                    >
                        <!-- The wrapper component for all the items -->
                        <BulmaAccordionItem v-for="(item) in faqs" v-bind:key="item._id">
                            <h4 slot="title">{{item.question}}</h4>
                            <p slot="content" v-html="item.answer">{{item.answer}}</p>
                        </BulmaAccordionItem>
                    </BulmaAccordion>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import { BulmaAccordion, BulmaAccordionItem } from "vue-bulma-accordion";
import { mapGetters } from "vuex";

export default {
    name: "faq",
    props: {
        items: {
            type: Array
        }
    },
    components: {
        BulmaAccordion,
        BulmaAccordionItem
    },
    created(store) {
        this.$store.dispatch("faqs/get");
    },
    computed: {
        ...mapGetters({
            faqs: "faqs/faqs"
        })
    }
};
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