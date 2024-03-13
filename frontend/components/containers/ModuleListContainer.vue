<template>
    <div class="module-list-container">
        <ModuleContainer :class="{grown2r2c: !(module % 4), grown2r: !(module % 7)}" :key="module" v-for="module in moduleList"/>
        <!-- <div class="module-container border-radius-l grown2r2c">
            MODULE
        </div>
        <div class="module-container border-radius-l">
            MODULE
        </div>
        <div class="module-container border-radius-l grown2r">
            MODULE
        </div>
        <div class="module-container border-radius-l grown2c">
            MODULE
        </div>  
        <div class="module-container border-radius-l">
            MODULE
        </div>
        <div class="module-container border-radius-l grown2c">
            MODULE
        </div>  
        <div class="module-container border-radius-l" :key="module" v-for="module in moduleList">
            MODULE
        </div> -->
    </div>
</template>
<script lang="ts" setup>
const moduleList = ref([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11
]);
const rowsCount = ref(3);
</script>
<style lang="scss" scoped>
.module-list-container {
    display: grid;
    width: 100%;
    grid-template-columns: repeat(3, minmax(100px, 1fr));
    grid-template-rows: repeat(v-bind('rowsCount'), min-max(100px, 1fr));
    grid-column-gap: 13px;
    grid-row-gap: 13px;
}
</style>