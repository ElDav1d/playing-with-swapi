<template>
<router-link
  class="navbar-list-item"
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