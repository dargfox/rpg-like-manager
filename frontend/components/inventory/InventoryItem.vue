<template>
    <div class="inventory-item border-radius-m" :title="props.name" :class="{
        disabled: isDisabled,
    }">
        <Icon class="icon" :name="props.icon" v-if="props.icon" :color="isDisabled ? theme.colors.color1 : theme.colors.color2"/>
        <img class="icon" :src="props.image" v-else-if="props.image"/>
    </div>
</template>
<script lang="ts" setup>
interface IProps {
    color?: string,
}
interface IPropsItem extends IProps {
    name: string,
    class: IInventoryItemClass,
    icon?: string,
    image?: string,
    active?: Boolean,
}

interface IPropsAchievement extends IPropsItem {
    class: IInventoryAchievementClass,
    unlocked?: Boolean,
    active?: undefined,
}

const { theme } = useTheme();

const props = defineProps<IPropsItem | IPropsAchievement>();

const color = computed<string>(() => (
    props.color || theme.colors.color4!
));

const isDisabled = computed<boolean>(() => (
    !(props as IPropsAchievement).unlocked && !props.active
));
</script>
<style lang="scss" scoped>
.inventory-item {
    width: 100%;
    aspect-ratio: 1;

    background-color: v-bind(color);

    display: flex;
    justify-content: center;
    align-items: center;

    .icon {
        width: 80%;
        height: 80%;

        filter: drop-shadow($color6 0 0 5px);
    }

    &.disabled {
        filter: grayscale(0.4) saturate(0.8);

        .icon {
            filter: drop-shadow($color6 0 0 5px) brightness(0.9);
        }
    }
}
</style>