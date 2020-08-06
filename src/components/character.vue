<template>
  <article class="swapi-Character_Container">
    <h1>I'm a SW character!!</h1>
    <h2>Name</h2>
    <h2>Specie</h2>
    <h2>Homeworld</h2>
    <ul>
      <li>FILM 1</li>
      <li>FILM 2</li>
      <li>FILM 3</li>
    </ul>
  </article>
</template>

<script>
export default {
  data () {
    return {
      index: 0,
    }
  },
  mounted() {
    this.getIndexFromPath();
  },
  methods: {
    getIndexFromPath() {
      const path = window.location.pathname.split('/');
      const lastPieceOfPath = path[path.length - 1];
      const firstNumber = parseInt(lastPieceOfPath.match(/^\d+/)[0]);
      this.index = firstNumber;
    },
  }
}
</script>

<style>
  .swapi-Character_Container {
    padding: 2rem;
    border: 1px solid #ddd;
  }


</style>
