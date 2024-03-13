<template>
    <div class="stat-bar">
        <div class="decoration">
            <Icon :name="props.icon" v-if="props.icon" :color="decorationColor"/>
        </div>
        <div class="back-filler"></div>
        <div class="filler"></div>
    </div>
</template>
<script lang="ts" setup>
const { theme } = storeToRefs(useTheme());

interface IProps {
    name?: string,
    color?: string,
    progress?: number,
    icon?: string,
}

const props = withDefaults(defineProps<IProps>(), {
    name: 'stat',
    progress: 0.0,
});

const color = computed(() => props.color || theme.value.colors.color1);
const decorationColor = computed(() => props.progress < 0.05 ? "#000" : "#fff");
</script>
<style lang="scss" scoped>
.stat-bar {
    position: relative;
    display: flex;
    border: 2px solid v-bind(color);
    min-height: 20px;
    box-sizing: border-box;

    .back-filler {
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;

        background-color: v-bind(color);
        opacity: 0.25;
        z-index: 1;
    }
    .filler {
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: calc( 5px + (100% - 5px) * v-bind(progress));
        max-width: 100%;

        transition: width 0.5s ease-in-out;

        background-color: v-bind(color);
        z-index: 10;
    }
    .decoration {
        z-index: 20;
        height: 85%;
        aspect-ratio: 1;
        border: 2px solid v-bind(decorationColor);
        box-sizing: border-box;
        margin: auto 5px;
        border-radius: 100%;

        display: flex;
        justify-content: center;
        align-items: center;
        padding: 4px;
    }
}
</style>