<template>
<router-link
  class="LinkedItem"
  active-class="active"
  tag="li"
  exact
  :to="`/${sectionTitle}/${formatPath(item.name)}`"
>
  <h3>
    <a @click="saveItemID(item.id)">
      {{ item.name }}
    </a>
  </h3>
</router-link>
</template>

<script>
export default {
  props: {
    sectionTitle: {
      type: String,
      required: true
    },
    item: {
      type: Object,
      required: true
    }
  },
  methods: {
    saveItemID(id) {
      this.$store.commit('saveItemID', id);
    },
    formatPath(name) {
      return name.replace(/[\s]+/g, '-').toLowerCase();
    }
  }
}
</script>

<style lang="scss">
@import '../../assets/stylesheets/foundation/helpers';

.LinkedItem {
  @extend %is-vertical-list-item;
  padding: $spacing-s;
  border: $border;
}
</style>