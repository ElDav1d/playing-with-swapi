<template>
  <article>
    <search
      @display-search-results="displaySearchResults"
      :sectionTitle="sectionTitle"
      />
    <ul v-if="hasItems">
      <router-link
        v-for="item in items"
        :key="item.id"
        class="navbar-list-item"
        active-class="active"
        tag="li"
        exact
        :to="`/${sectionTitle}/${formatPath(item.name)}`">
        <a @click="saveItemID(item.id)">{{ item.name }}</a>
      </router-link>
    </ul>
    <h3 v-else> There are no matches in the list. Try again!</h3>
  </article>
</template>

<script>
import Search from './Search.vue';

export default {
  data () {
    return {
      requestedData: [],
      items: [],
      hasItems: true,
    }
  },
  mounted() {
    this.getItemsData();
  },
  components: {
    Search,
  },
  props: {
    sectionTitle: {
      type: String,
      required: true
    },
    apiPath:  {
      type: String,
      required: true
    },
  },
  methods: {
    saveItemID(id) {
      this.$store.commit('saveItemID', id);
    },
    getItemsData() {
      let url = `https://swapi.dev/api/${this.$props.apiPath}/`;
      axios.get(url)
        .then(response => {
          this.requestedData = response.data.results;
          this.getAllPagesData(response, url);
        })
        .catch(error => {
          console.log(error);
          alert(`Sorry, something went wrong When loading this ${this.$props.sectionTitle}' list. Please refresh the page after closing this dialog.`);
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
      this.getItems();
    },
    addIDToItems() {
      this.requestedData.forEach((item, index) => {
        item.id = index + 1;
      });
    },
    formatPath(name) {
      return name.replace(/[\s]+/g, '-').toLowerCase();
    },
    getItems() {
      this.items = this.requestedData.map( item => {
        return {
          name : item.name,
          id: item.id
        }
      })
    },
    displaySearchResults() {
      this.getItems();
      this.hasItems = true;
      const searchInput = this.$store.state.searchInput.toLowerCase();
      const filteredItems = this.items.filter( item => item.name.toLowerCase().indexOf(searchInput) > -1)

      if(!filteredItems.length) {
        this.hasItems = false;
        return;
      }

      this.items = filteredItems;
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