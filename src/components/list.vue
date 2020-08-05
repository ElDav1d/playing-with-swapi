<template>
  <div>
    <ul>
      <li v-for="item in list">
        {{ item.name }}
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data () {
    return {
      list: [],
    }
  },
  mounted() {
    this.getCharacterData();
  },
  methods: {
    getCharacterData() {
      let url = 'https://swapi.dev/api/people/'
      axios.get(url)
        .then(response => {
          this.list = response.data.results;
          this.getAllPagesData(response, url)
        })
        .catch(error => {
          console.log(error);
          alert( `Sorry, something went wrong. Please refresh the page after closing this dialog.` );
        });
    },
    getAllPagesData(response, url) {
      if (response.data.next === null){
        return;
      } else {
        url = response.data.next;
        axios.get(url)
          .then(response => {
            this.getAllPagesData(response, url);
            this.list = [...this.list, ...response.data.results];
          }) 
      }
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
  padding: .2em;
  margin: 0 10px;
}
</style>
