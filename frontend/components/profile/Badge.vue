<template>
    <div class="badge-item">
        <Icon class="icon" :name="props.icon" v-if="props.icon" :color="theme.colors.color2"/>
        <img class="icon" :src="props.image" v-else-if="props.image"/>
    </div>
</template>
<script lang="ts" setup>
interface IProps {
    icon?: string,
    image?: string,
    name: string,
    rarity: IBadgeRarity,
}

const props = defineProps<IProps>();
const { theme } = useTheme();

</script>
<style lang="scss" scoped>
.badge-item {
    border-radius: 100%;
    aspect-ratio: 1;
    background-color: $color6;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: inset $color3 0 -2px 10px 3px, #00000040 0 0 10px;

    .icon {
        width: 50%;
        height: 50%;
        filter: drop-shadow($color3 0px 0px 3px);
    }
    img.icon {
        object-fit: cover;
        border-radius: 100%;
    }
}
</style>