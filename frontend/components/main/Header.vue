<template>
    <div class="header border-radius-m">
        <Button class="menu-button" icon="mingcute:menu-fill"/>
        <Logo/>
        <BarCode/>
    </div>
</template>
<style lang="scss" scoped>
.header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: $paddingL $paddingM;
    background-color: $color6;
    color: $color2;
    border: gray 0 0;
    box-sizing: border-box;
}
.menu-button {
    height: 35px;
    width: 35px;

    display: flex;
    justify-content: center;
    align-items: center;

    border: none;
    background: none;

    padding: $buttonPaddingS;

    cursor: pointer;
}
</style>