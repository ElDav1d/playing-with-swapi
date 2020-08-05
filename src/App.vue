<template>
  <div id="app">
    <character-list></character-list>
  </div>
</template>

<script>
import CharacterList from './components/list.vue';

export default {
  name: 'app',
  components: {
    CharacterList,
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
