<template>
    <div class="debug-menu box-shadow-m" :class="{hidden}">
        <h2>Debug Router</h2>
        <NuxtLink to="/">Home</NuxtLink>
        <NuxtLink to="/profile">Profile</NuxtLink>
        <button class="debug-button" @click="toggleDebugMenu">
            <Icon name="gg:debug"/>
        </button>
    </div>
</template>
<script lang="ts" setup>
const hidden = ref(true);

function toggleDebugMenu() {
    hidden.value = !hidden.value;
    localStorage.setItem('debug-menu', Number(hidden.value).toFixed());
}

onMounted(() => {
    hidden.value = Boolean(Number(localStorage.getItem('debug-menu')));
})

</script>
<style lang="scss" scoped>
.debug-menu {
    position: fixed;
    top: 200px;
    right: 0;
    width: 200px;
    height: 300px;
    background-color: $color6;
    color: $color2;
    display: flex;
    flex-direction: column;
    transition: all 0.3s ease-in-out;
    z-index: 999;
    overflow: hidden;
    padding: 5px;
    border-radius: 5px 0 0 5px;

    .debug-button {
        margin-top: auto;
        margin-right: auto;
        width: 20px;
        border: none;
        background: none;
    }

    h2 {
        text-align: center;
    }
    
    a {
        border-bottom: 1px solid $color2;
        color: $color2;
        text-decoration: none;
        padding: 2px 0;

        &:first-of-type {
            border-top: 1px solid $color2;
        }
        &::before {
            content: " > ";
        }
    }

    &.hidden {
        right:-180px;
        background-color: none;
        height: 20px;
        top: 480px;

        h2, a {
            display: none;
        }
    }
}
</style>