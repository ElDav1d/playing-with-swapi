<template>
<router-link
  class="LinkedItem"
  active-class="active"
  tag="li"
  exact
  :to="`/${sectionTitle}/${formatPath(item.name)}`"
>
  <a @click="saveItemID(item.id)">
    {{ item.name }}
  </a>
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
  font-size: $font-size-m;
  padding: $spacing-s;
  border: 1px solid $white;
  
  &:not(:last-child) {
    margin-bottom: $spacing-l;

    @include mq(M) {
      margin-bottom: $spacing-xl;
    }
  }
}
</style>