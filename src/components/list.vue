<template>
  <main>
    <search @display-search-results="displaySearchResults"></search>
    <ul v-if="hasItems">
      <router-link
        v-for="(item) in itemsList"
        :key="item.id"
        class="navbar-list-item"
        active-class="active"
        tag="li"
        exact
        :to="`characters/${formatPath(item.name)}`">
        <a @click="saveItemID(item.id)">{{ item.name }}</a>
      </router-link>
    </ul>
    <h3 v-else> There are no matches in the list. Try again!</h3>
  </main>
</template>

<script>
import Search from './search.vue';

export default {
  data () {
    return {
      requestedData: [],
      itemsList: [],
      hasItems: true
    }
  },
  mounted() {
    this.getItemsData();
  },
  components: {
    Search,
  },
  methods: {
    saveItemID(id) {
      this.$store.commit('saveItemID', id);
    },
    getItemsData() {
      let url = 'https://swapi.dev/api/people/';
      axios.get(url)
        .then(response => {
          this.requestedData = response.data.results;
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
            this.requestedData = [...this.requestedData, ...response.data.results];
          }) 
      }
      this.addIDToItems();
      this.getItemsList();
    },
    addIDToItems() {
      this.requestedData.forEach((item, index) => {
        item.id = index + 1;
      });
    },
    formatPath(name) {
      return name.replace(/[\s]+/g, '-').toLowerCase();
    },
    getItemsList() {
      this.itemsList = this.requestedData.map( item => {
        return {
          name : item.name,
          id: item.id
        }
      })
    },
    displaySearchResults() {
      this.getItemsList();
      this.hasItems = true;
      const searchInput = this.$store.state.searchInput.toLowerCase();
      const newList = this.itemsList.filter( item => item.name.toLowerCase().indexOf(searchInput) !== -1)

      if(!newList.length) {
        this.hasItems = false;
        return;
      }

      this.itemsList = newList;
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
