<template>
    <div class="inventory-items-container border-radius-m box-shadow-m">
        <InventorySelector/>
        <InventoryAchievements class="inventory-items" v-if="selected == 'achievements'" :items="inventoryAchievements"/>
        <InventoryItems class="inventory-items" v-else-if="selected == 'inventory'" :items="inventoryItems"/>
    </div>
</template>
<script lang="ts" setup>
const selected = ref<'inventory' | 'achievements'>('achievements');

const inventoryItems = ref<IInventoryItem[]>(Array(7).fill(0).map(_ => {
    return {name: 'TEST1', class: 'test', icon: 'arcticons:fastlikeafox', active: true}
}));

const inventoryAchievements = ref<IInventoryAchievement[]>([
    {name: 'ATEST1', class: 'test', icon: 'arcticons:foxydroid', unlocked: true},
    {name: 'ATEST2', class: 'test', icon: 'arcticons:foxydroid', unlocked: false},
]);

</script>
<style lang="scss" scoped>
.inventory-items-container {
    padding: $paddingS;
    max-height: fit-content;
}
</style>