<template>
    <div class="profile-stats border-radius-m box-shadow-m">
        <ProfileStatsBar class="stat-bar health" name="Health" 
        @click="progressHealth = progressHealth < 1 ? +(progressHealth + 0.1).toFixed(3) : 0"
        icon="solar:health-bold"
        :color="theme.colors.colorHealthBar"
        :progress="progressHealth"/>
        <ProfileStatsBar class="stat-bar energy" name="Energy" 
        @click="progressEnergy = progressEnergy < 1 ? +(progressEnergy + 0.05).toFixed(3) : 0"
        icon="simple-line-icons:energy"
        :color="theme.colors.colorEnergyBar"
        :progress="progressEnergy"/>
        <ProfileStatsBar class="stat-bar exp" name="Experience" 
        @click="progressExperience = progressExperience < 1 ? +(progressExperience + 0.025).toFixed(3) : 0"
        icon="mdi:stars"
        :color="theme.colors.colorExperienceBar"
        :progress="progressExperience"/>
    </div>
</template>
<script lang="ts" setup>
const { theme } = storeToRefs(useTheme());

const progressHealth = ref(0.0);
const progressEnergy = ref(0.0);
const progressExperience = ref(0.0);
</script>
<style lang="scss" scoped>
.profile-stats {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 2fr 1fr 1fr;
    box-sizing: border-box;

    padding: $paddingM;

    .stat-bar.health {
        border-radius: $borderRadiusM $borderRadiusM 0 0;
    }
    .stat-bar.exp {
        border-radius: 0 0 $borderRadiusM $borderRadiusM;
    }
}
</style>
<style lang="scss">
.profile-stats {
    .stat-bar.health .decoration {
        aspect-ratio: 1 / 2;
        border-radius: 20px;
    }
}
</style>