<template>
    <div class="profile-badges border-radius-m box-shadow-m">
        <div class="badges-container border-radius-l">
            <Badge v-bind="badge" class="badge" v-for="badge in props.badges"/>
        </div>
    </div>
</template>
<script lang="ts" setup>
interface IProps {
    badges: IBadge[],
}

const props = defineProps<IProps>();
</script>
<style lang="scss" scoped>
.profile-badges {
    box-sizing: border-box;
    padding: $paddingM;
}

.badges-container {
    width: 100%;
    height: 100%;
    background-color: $color3;

    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: minmax(0px, 1fr);
    grid-gap: $paddingM;
    padding: $paddingM;
    box-sizing: border-box;
    align-items: center;
    justify-items: center;
}
.badge {
    height: 100%;
    max-width: 100%;
    max-height: 100%;
    border-radius: 100%;
    aspect-ratio: 1;
    background-color: $color6;
}
</style>