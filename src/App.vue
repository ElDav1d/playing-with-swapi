<template>
  <div id="app">
    <main-navigation></main-navigation>
    <router-view></router-view>
  </div>
</template>

<script>
import MainNavigation from './components/shared/MainNavigation.vue';

export default {
  name: 'app',
  components: {
    MainNavigation,
  }
}
</script>

<style lang="scss">
@import 'assets/stylesheets/styles.scss';
</style>