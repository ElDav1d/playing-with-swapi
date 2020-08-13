<template>
  <div>
    <search @display-search-results="displaySearchResults"></search>
    <ul>
      <router-link
        v-for="(item, index) in list"
        :key="index"
        class="navbar-list-item"
        active-class="active"
        tag="li"
        exact
        :to="`characters/${formatName(item.name)}`">
        <a @click="saveItemIndex(index + 1)">{{ index }} - {{ item.name }}</a>
      </router-link>
    </ul>
  </div>
</template>

<script>
import Search from './search.vue';

export default {
  data () {
    return {
      list: [],
      query: 'initial',
    }
  },
  mounted() {
    this.getItemsData();
  },
  components: {
    Search,
  },
  methods: {
    saveItemIndex(index) {
      this.$store.commit('saveIndex', index);
    },
    getItemsData() {
      let url = 'https://swapi.dev/api/people/';
      axios.get(url)
        .then(response => {
          this.list = response.data.results;
          this.getAllPagesData(response, url);
        })
        .catch(error => {
          console.log(error);
          alert(`Sorry, something went wrong When loading this list. Please refresh the page after closing this dialog.`);
        });
    },
    getAllPagesData(response, url) {
      if (response.data.next === null) {
        return;
      } else {
        url = response.data.next;
        axios.get(url)
          .then(response => {
            this.getAllPagesData(response, url);
            this.list = [...this.list, ...response.data.results];
          }) 
      }
    },
    formatName(name) {
      return name.replace(/[\s]+/g, '-').toLowerCase();
    },
    displaySearchResults() {
      this.query = this.$store.state.searchInput;
      axios.get(`https://swapi.dev/api/people/?search=${this.query}`)
        .then(response => {
          this.list = response.data.results;
        })
        .catch(error => {
          console.log(error);
          alert(`Sorry, something went wrong When loading your search Please refresh the page after closing this dialog.`);
        });
    }
  }
}
</script>

<style>
ul {
  list-style-type: none;
  padding: 0;
  margin: 0 auto;
  max-width: 250px;
}

li {
  border: 1px solid #ddd;
  padding: .75rem;
  margin: 0 10px;
}
</style>
