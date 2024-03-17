<template>
    <div class="page profile-page">
        <ProfileImage  class="profile-image"/>
        <ProfileStats  class="profile-stats"/>
        <ProfileBadges class="profile-badges" :badges="badges"/>
        <InventoryContainer class="profile-items-container"/>
    </div>
</template>
<script lang="ts" setup>

const badges: Ref<IBadge[]> = ref([
    {icon: 'pepicons-pop:star-filled-circle-filled', name: '', rarity: 'common'},
    {icon: 'fa6-solid:ranking-star', name: '', rarity: 'common'},
    {icon: 'ph:star-of-david-duotone', name: '', rarity: 'common'},
    {image: 'https://t4.ftcdn.net/jpg/05/89/22/37/360_F_589223719_UYrXFIOsMxs3RRMnxqIQIiUvkmPuDLnG.jpg', name: '', rarity: 'common'},
    {image: 'https://seeklogo.com/images/G/google-logo-28FA7991AF-seeklogo.com.png', name: '', rarity: 'common'},
])
</script>
<style lang="scss" scoped>
.profile-page {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    grid-template-rows: repeat(2, minmax(0, 150px)) repeat(auto-fill, minmax(0px, 500px));
    grid-gap: $paddingM;
    padding: $paddingM;
}
.profile-image {
    grid-row: span 2;
}
.profile-stats {
    grid-column: span 2;
}
.profile-badges {
    grid-column: span 2;
}
.profile-items-container {
    grid-column: span 3;
}
</style>