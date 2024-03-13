<template>
    <div class="page profile-page">
        <ProfileImage  class="profile-image"/>
        <ProfileStats  class="profile-stats"/>
        <ProfileBadges class="profile-badges"/>
        <ProfileItemsContainer class="profile-items-container"/>
    </div>
</template>
<style lang="scss" scoped>
.profile-page {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    grid-template-rows: 1fr 1fr 4fr;
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