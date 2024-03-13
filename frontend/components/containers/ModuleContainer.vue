<template>
    <div class="module-container box-shadow-m border-radius-l">
        MODULE
    </div>
</template>
<style lang="scss" scoped>
.module-container {
    aspect-ratio: 1;
    background-color: $color6;
    display: flex;
    justify-content: center;
    align-items: center ;

    width: 100%;
    height: 100%;

    &.grown2r[class] {
        aspect-ratio: 1 / 2;
        grid-row: span 2;
    }

    &.grown2c[class] {
        aspect-ratio: 2 / 1;
        grid-column: span 2;
    }
    &.grown2r2c[class] {
        aspect-ratio: 1;
        grid-row: span 2;
        grid-column: span 2;

    }
}
</style>