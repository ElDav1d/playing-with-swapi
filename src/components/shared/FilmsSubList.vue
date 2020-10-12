<template>
<section>
  <h2>
    I'd appeared on this movies:
  </h2>
  <ul class="FilmsSubList">
    <li
      v-for="film in films"
      class="FilmsSubList_Item"
    >
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
<style lang="scss">
@import '../../assets/stylesheets/foundation/helpers';

.FilmsSubList {
  @extend %is-clean-list;

  &_Item {
    @extend %is-vertical-list-item;
  }
}
</style>