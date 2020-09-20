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
@import 'assets/stylesheets/foundation/config.scss';

body {
  color: $white;
  background-color: $black;
}

h1, h2 {
  color: $yellow;
  font-weight: normal;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 60px;
}

a {
  color: #42b983;
}
</style>