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
    </div>
</template>

<script>
    import aboutHome from '@/components/about-home';
    import about from '@/components/about';

    export default {
        components: {
            'app-about-home': aboutHome,
            'app-about': about,
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
