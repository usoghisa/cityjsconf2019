<template>
    <div>
        <app-about-home 
            v-if="title === 'Home'"
            :title='shortDescription'
            :description='description'
            :image='image'
            :subtitle='subtitle'
        >
        </app-about-home>
        <app-about 
            v-if="title !== 'Home'"
            :title='title'
            :description='description'
            :image='image'
            :subtitle='subtitle'
        >
        </app-about>
         <app-venue 
            v-if="title === 'Venue'"
        >
        </app-venue>
    </div>
</template>

<script>
    import aboutHome from '@/components/about-home';
    import about from '@/components/about';
    import venue from '@/components/venue';

    export default {
        components: {
            'app-about-home': aboutHome,
            'app-about': about,
            'app-venue': venue
        },
        props: {
            title: String,
            shortDescription: String,
            description: String,
            widgets: Array,
            image: Object,
            subtitle: String
        }
    };
</script>
