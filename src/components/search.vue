<template>
  <form @submit.prevent="saveSearchValue">
    <label>Search your character</label>
    <input
      type="text"
      placeholder="Type your search"
      v-model="searchValue"
      @keyup.enter="saveSearchValue"
    />
    <button type="submit">Submit your search</button>
  </form>
</template>

<script>

export default {
  data () {
    return {
      searchValue: ''
    }
  },
  methods: {
    saveSearchValue() {
      this.$store.commit('saveSearchValue', this.searchValue);
      this.$emit('display-search-results');
    },
  }
}
</script>

<style>
label {
  display: block;
  margin-bottom: .75rem;
}

input {
  padding: .25rem;
  max-width: 250px;
}

</style>
