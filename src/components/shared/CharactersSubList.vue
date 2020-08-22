<template>
  <section>
    <h2>Some of my {{ itemsName }} have been:</h2>
    <ul>
      <li v-for="item in items">
        {{ item }}
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      required: true
    },
    itemsName: {
      type: String,
      required: true
    },
  },
}
</script>