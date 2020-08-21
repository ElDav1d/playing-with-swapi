<template>
  <article class="swapi-itemSheet_Container">
    <h1>I'm a SW {{ singularizeTitle }}!!</h1>
    <h2>My name is {{ name }}</h2>
    <h2>My population is {{ population }}</h2>
    <h2>My climate is {{ climate }}</h2>
    <films-sub-list
      v-bind:films="films">
    </films-sub-list>
    <template v-if="residents.length">
      <h2>Some of my residents have been:</h2>
      <ul>
        <li v-for="resident in residents">
          {{ resident }}
        </li>
    </ul>
    </template>
  </article>
</template>

<script>
import { singularizeTitle, getNestedElementsSingleValue } from '../mixins'
import FilmsSubList from './FilmsSubList.vue';

export default {
  data () {
    return {
      id: this.$store.state.itemID,
      name: '',
      population: '',
      climate: 'arid',
      films: [],
      residents: [],
    }
  },
  mounted() {
    this.getWorldData();
  },
  components: {
    FilmsSubList,
  },
  mixins: [
    singularizeTitle,
    getNestedElementsSingleValue
  ],
  methods: {
    getWorldData() {
      axios.get( `https://swapi.dev/api/planets/${this.id}`)
      .then(response => {
        const { name, population, climate, films, residents } = response.data;

        this.name = name;
        this.population = population;
        this.climate = climate;
        this.films = this.getNestedElementsSingleValue(films, 'title');
        this.residents = this.getNestedElementsSingleValue(residents, 'name');
      })
      .catch(error => {
        console.log(error);
        alert(`Sorry, something went wrong when loading this world. Please refresh the page after closing 
        this dialog.`);
      });
    },
  }
}
</script>