<template>
    <div class="profile-image border-radius-m box-shadow-m">
        <img class="border-radius-l" :class="{
            default: isDefaultImage
        }" :src="profileImage" :alt="props.alt"/>
    </div>
</template>
<script lang="ts" setup>
interface IProps {
    image?: 'default' | string,
    alt?: string,
}

const props = withDefaults(defineProps<IProps>(), {
    image: 'default',
    alt: 'profile image',
});

const isDefaultImage = computed(() => (
    props.image === 'default' || !props.image 
));

const profileImage = computed(() => (
    isDefaultImage.value ?
    '/img/default-profile-image.jpg' :
    props.image
))

</script>
<style lang="scss" scoped>
.profile-image {
    background-color: $color6;
    overflow: hidden;
    padding: $paddingS;
    position: relative;

    img {
        width: 100%;
        aspect-ratio: 1;
        object-fit: cover;
        box-sizing: border-box;
    }

    img.default {
        padding: 30px;
        background-color: white;
        object-fit: contain;
    }
}
</style>