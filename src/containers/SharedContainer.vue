<template>
  <main>
    <h1>{{ title }}</h1>
    <router-view></router-view>
  </main>
</template>

<script>
export default {
  props: {
    title: String,
  }
}
</script>

<style>
.swapi-itemSheet_Container {
  padding: 2rem;
  border: 1px solid #ddd;
}
</style>
