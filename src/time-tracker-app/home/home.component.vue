<template>
<div class="mdl-grid">
  <div class="home--content-card mdl-card mdl-shadow--4dp mdl-cell--4-col mdl-cell--4-offset mdl-cell--2-offset-tablet">
    <div class="mdl-card__title">
      <h2 class="mdl-card__title-text">Vue Time Tracker</h2>
    </div>
    <div class="mdl-card__supporting-text">
      Get started by <router-link :to="'/time-entries'">creating a time entry</router-link>.
    </div>
  </div>
</div>  
</template>

<style lang="scss" scoped>
.home--content-card {
  margin: 0 auto;
}
</style>
