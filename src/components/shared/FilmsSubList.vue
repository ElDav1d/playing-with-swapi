<template>
<section>
  <h2>
    I'd appeared on this movies:
  </h2>
  <ul class="FilmsSubList">
    <li v-for="film in films">
      <h3>
        {{ film }}
      </h3>
    </li>
  </ul>
</section>
</template>

<script>
export default {
  props: {
    films: {
      type: Array,
      required: true
    },
  },
}
</script>