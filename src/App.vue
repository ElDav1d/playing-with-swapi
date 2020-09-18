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

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

a {
  color: #42b983;
}
</style>