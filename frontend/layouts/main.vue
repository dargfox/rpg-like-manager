<template>
    <div class="layout">
        <Header class="header"/>
        <Menu class="menu"/>
        <DebugRouter/>
        <NuxtPage class="page"/>
        <Footer class="footer"/>
    </div>
</template>
<style lang="scss" scoped>
.layout {
    display: flex;
    flex-direction: column;
    max-width: $maxWidthL;
    margin: 0 auto;
    background-color: $color3;
    padding: $paddingM;
    min-height: calc( 100vh - ( $paddingM * 2 ) );
}
</style>