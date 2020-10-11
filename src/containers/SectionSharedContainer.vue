<template>
<main>
  <h1>
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
</style>