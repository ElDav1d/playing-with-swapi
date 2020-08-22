<template>
  <article class="swapi-itemSheet_Container">
    <template v-if="hasData">
      <h1>I'm a SW {{ singularizeTitle }}!!</h1>
      <h2>My name is {{ name }}</h2>
      <h2>I'm a {{ species }}</h2>
      <h2>I'm from {{ homeworld }}</h2>
      <h2>I'd appeared on this movies:</h2>
      <ul>
        <li v-for="film in films">
          {{ film }}
        </li>
      </ul>
    </template>
    <template v-else>
      <h1>This is not the {{ singularizeTitle }} you are looking for</h1>
      <p>Sorry: currently we have no data for this one</p>
      <p>Don't surrender to fear and check  it later!</p>
    </template>
  </article>
</template>

<script>
import { singularizeTitle, getNestedElementsSingleValue } from '../mixins'
export default {
  data () {
    return {
      id: this.$store.state.itemID,
      name: '',
      species: [],
      homeworld: '',
      films: [],
      hasData: false
    }
  },
  mounted() {
    this.getCharacterData();
  },
  mixins: [
    singularizeTitle,
    getNestedElementsSingleValue
  ],
  methods: {
    getCharacterData() {
      axios.get( `https://swapi.dev/api/people/${this.id}`)
        .then(response => {
          const { name, species, homeworld, films } = response.data;

          this.name = name;
          this.films = this.getNestedElementsSingleValue(films, 'title');

          if (species.length) {
            axios.get(species)
              .then(response => { this.species = response.data.name; })
              .catch(error => { console.log(error); })
          } else {
            this.species = 'human';
          }
          
          axios.get(homeworld)
            .then(response => { this.homeworld = response.data.name; })
            .catch(error => { console.log(error); })
        })
        .catch(error => {
          console.log(error);
      });
    },
  }
}
</script>