<template>
  <article class="swapi-itemSheet_Container">
    <h1>I'm a SW {{ singularizeTitle }}!!</h1>
  </article>
</template>

<script>
import { singularizeTitle } from '../mixins'

export default {
  data () {
    return {

    };
  },
  mounted() {
  },
  mixins: [
    singularizeTitle,
  ]
}
</script>