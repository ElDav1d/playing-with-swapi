<template>
  <div id="app">
    <ul>
      <li v-for="character in charactersList">
        {{ character.name }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      charactersList: [],
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
          this.charactersList = response.data.results;
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
            this.charactersList = [...this.charactersList, ...response.data.results];
          }) 
      }
    } 
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

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

a {
  color: #42b983;
}
</style>
