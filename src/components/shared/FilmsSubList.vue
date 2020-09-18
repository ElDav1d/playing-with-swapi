<template>
<section>
  <h2>
    I'd appeared on this movies:
  </h2>
  <ul>
    <li
      v-for="film in films"
      >
      {{ film }}
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