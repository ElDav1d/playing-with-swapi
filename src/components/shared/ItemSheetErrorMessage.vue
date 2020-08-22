<template>
  <section>
    <h1>This is not the {{ singularizeTitle }} you are looking for</h1>
    <p>Sorry: currently we have no data for this one</p>
    <p>Don't surrender to fear and check it later!</p>
  </section>
</template>

<script>
import { singularizeTitle } from '../../mixins';

export default {
  data() {
    return {
    }
  },
  mixins: [
    singularizeTitle
  ],
}
</script>