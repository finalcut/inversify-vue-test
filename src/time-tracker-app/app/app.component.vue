<template>
<div class="mdl-layout mdl-js-layout mdl-layout--fixed-header mdl-layout--no-desktop-drawer-button">
  <header class="mdl-layout__header">
    <div class="mdl-layout__header-row">
      <!-- Title -->
      <span class="mdl-layout-title">Time Tracker Example</span>
      <!-- Add spacer, to align navigation to the right -->
      <div class="mdl-layout-spacer"></div>
      <!-- Navigation. We hide it in small screens. -->
      <nav class="mdl-navigation mdl-layout--large-screen-only">
        <router-link
            :to="'/home'"
            class="mdl-navigation__link">Home</router-link>
        <a class="mdl-navigation__link" href="">Link</a>
        <a class="mdl-navigation__link" href="">Link</a>
        <a class="mdl-navigation__link" href="">Link</a>
        <a class="mdl-navigation__link" href="">Link</a>
      </nav>
    </div>
  </header>
  <div class="mdl-layout__drawer">
    <span class="mdl-layout-title">Time Tracker Example</span>
    <nav class="mdl-navigation">
      <router-link
          :to="'/home'"
          class="mdl-navigation__link">Home</router-link>
      <a class="mdl-navigation__link" href="">Link</a>
      <a class="mdl-navigation__link" href="">Link</a>
      <a class="mdl-navigation__link" href="">Link</a>
      <a class="mdl-navigation__link" href="">Link</a>
    </nav>
  </div>
  <main class="mdl-layout__content">
    <div class="page-content">
      <router-view></router-view>
    </div>
  </main>
</div>
</template>

<style lang="scss" scoped>

</style>

