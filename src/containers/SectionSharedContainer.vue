<template>
<main>
  <h1 class="swapi-itemSheet_Title">
    {{ sectionTitle }}
  </h1>
  <router-view
    :sectionTitle="sectionTitle"
    :key="$route.fullPath"
  />
</main>
</template>

<script>
export default {
  props: {
    sectionTitle: String,
    required: true
  }
}
</script>

<style>
.swapi-itemSheet_Title {
  text-transform: capitalize;
}

.swapi-itemSheet_Container {
  padding: 2rem;
  border: 1px solid #ddd;
}
</style>