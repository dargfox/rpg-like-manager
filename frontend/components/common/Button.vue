<template>
    <button class="button" :class="{
        
    }">
        <Icon v-if="props.icon" :name="props.icon" class="icon"/>
        <slot/>
    </button>
</template>
<script lang="ts" setup>
interface IProps {
    disabled?: boolean,
    variant?: 'round' | 'square' | 'rectangular',
    size?: 'small' | 'medium' | 'large',
    transparent?: boolean,
    icon?: string,
}

const props = withDefaults(defineProps<IProps>(), {
    variant: 'square',
    size: 'medium',
    transparent: false,
    disabled: false,
});
</script>
<style lang="scss" scoped>
.button {
    display: flex;
    justify-content: center;
    align-items: center;

    border: none;
    
    .icon {
        width: 100%;
        height: 100%;
    }
}
</style>