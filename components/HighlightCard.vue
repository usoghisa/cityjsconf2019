<template>
    <div :class="$style.highlightCardWrapper">
      <a :href="item.videoUrl">
       <div :style="{ backgroundImage: 'url(' + imageUrl + ')' }" :class="$style.imageDiv">
        </div>
        <div :class="$style.infoWrap">
            <div :class="$style.talkTitle">{{ item.title }}</div>
            <div :class="$style.speaker">
                <div :class="$style.speakerName">{{ item.name }}</div>
                <div :class="$style.speakerCompany">{{ item.company }}</div>
            </div>
        </div>
        </a>
    </div>

</template>

<script>
    export default {
        name: 'HighlightCard',
        props: {
            item: Object,
        },
        computed: {
            imageUrl() {
                return `/siteimages/${this.item.image.path}`
            }
        }
    };
</script>

<style module src="./HighlightCard.css" />
