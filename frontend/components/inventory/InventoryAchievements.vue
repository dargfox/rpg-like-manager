<template>
    <div class="achievements-container">
        <InventoryItem v-for="item in props.items" v-bind="item" :color="theme.colors.color2"/>
        <InventoryItem v-for="item in notFilledItems" v-bind="item" :color="theme.colors.color2"/>
    </div>
</template>
<script lang="ts" setup>
const MAX_STORAGE = 18;

interface IProps {
    items: IInventoryItem[]
}

const { theme } = useTheme();

const props = defineProps<IProps>();

const items = computed<IInventoryItem[]>(() => (
    props.items.slice(0, MAX_STORAGE)
));

const notFilledItems = computed<IInventoryItem[]>(() => {
    const countFilledItems = items.value.length;
    const notFilledItemsCount = MAX_STORAGE - countFilledItems;

    return Array(Math.max(0, notFilledItemsCount)).fill(0).map(_ => ({
        name: "UNKNOWN",
        class: "unknown",
        icon: "bi:question-square",
        active: false,
    }))
});

</script>
<style lang="scss" scoped>
.achievements-container {
    background-color: $color3;
    width: 100%;
    height: 100%;

    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-template-rows: repeat(3, 1fr);
    grid-gap: $paddingM;
    padding: $paddingM;
    box-sizing: border-box;
}
</style>