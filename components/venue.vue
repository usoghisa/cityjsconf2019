<template>
    <section class="section map backimg">
        <div>
            <GmapMap
                :center="{lat:51.5126, lng:-0.1306}"
                :zoom="19"
                map-type-id="terrain"
                class="map_contain"
                style="width:100%; height: 600px;"
                >
              <GmapMarker
                    :key="index"
                    v-for="(m, index) in markers"
                    :position="m.position"
                    :clickable="true"
                    :draggable="true"
                    @click="center=m.position"
                />
            </GmapMap>
            <section class="section backimg is-mobile" :style="style">
                <div class="container">
                    <div class="columns level-right">
                        <div class="column is-6 is-offset-4">
                            <div class="card ">
                                <div class="card-content ">
                                    <div class="media">
                                        <div class="media-content">
                                            <p class="title is-4 no-padding">How to get to the venue</p>
                                        </div>
                                    </div>
                                    <div class="content">
                                        The venue is located within minutes walk from Oxford Street and between 
                                        Leicester Square and Picadilly Circus Station. 
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </section>
</template>

<script>
    export default {
         data() {
            return {
            markers: [
                {position: { lat: 51.5126, lng: -0.1306 }},
            ]
            };
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
    
    .map 
        position: relative;
        display:block
        height: 600px;
        margin-bottom: 20px;
        .map_contain
            width: 200%;
            position: absolute;
            top: 0px;
            left: 0px;
            height: 600px;
            z-index: 999
            +mobile
            +tablet
            +desktop
        .copy
            position: absolute
            top: 0px;
            z-index: 1000
            width: 100%;
            border: 10px solid black;

   

</style>