<template>
<form @submit.prevent="saveSearchValue">
  <label class="SearchInput_Label">
    Search your {{ singularizeTitle }}
  </label>
  <input
    type="text"
    v-model="searchValue"
    @keyup.enter="saveSearchValue"
    class="SearchInput_Field"
  />
  <button
    type="submit"
    class="SearchInput_Button"
    >
    Submit your search
  </button>
</form>
</template>

<script>
import { singularizeTitle } from '../../../mixins'

export default {
  data () {
    return {
      searchValue: ''
    }
  },
  mixins: [
    singularizeTitle,
  ],
  methods: {
    saveSearchValue() {
      this.$store.commit('saveSearchValue', this.searchValue);
      this.$emit('display-search-results');
    },
  }
}
</script>

<style lang="scss">
@import './search-input.scss';
</style>