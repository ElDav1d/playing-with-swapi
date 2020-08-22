<template>
  <article class="swapi-itemSheet_Container">
    <template v-if="hasData">
      <h1>I'm a SW {{ singularizeTitle }}!!</h1>
      <h2>My name is {{ name }}</h2>
      <h2>My population is {{ population }}</h2>
      <h2>My climate is {{ climate }}</h2>
      <films-sub-list
        :films="films">
      </films-sub-list>
      <characters-sub-list
        v-if="residents.length"
        :items="residents"
        :itemsName="residentsTitle">
      </characters-sub-list>
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
import FilmsSubList from './shared/FilmsSubList.vue';
import CharactersSubList from './shared/CharactersSubList.vue';

export default {
  data () {
    return {
      id: this.$store.state.itemID,
      name: '',
      population: '',
      climate: 'arid',
      films: [],
      residents: [],
      residentsTitle: 'residents',
      hasData: false
    }
  },
  mounted() {
    this.getWorldData();
  },
  components: {
    FilmsSubList,
    CharactersSubList
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

        this.hasData = true;
        this.name = name;
        this.population = population;
        this.climate = climate;
        this.films = this.getNestedElementsSingleValue(films, 'title');
        this.residents = this.getNestedElementsSingleValue(residents, 'name');
      })
      .catch(error => {
        console.log(error);
      });
    },
  }
}
</script>