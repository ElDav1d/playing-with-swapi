<template>
  <article class="swapi-itemSheet_Container">
    <template v-if="hasData">
      <h1>I'm a SW {{ singularizeTitle }}!!</h1>
      <h2>My name is {{ name }}</h2>
      <h2>I'm a <em>{{ model }}</em> model</h2>
      <h2>I belong to the <em>{{ starship_class }}</em> class</h2>
      <films-sub-list
        :films="films">
      </films-sub-list>
      <characters-sub-list
        v-if="pilots.length"
        :items="pilots"
        :itemsName="pilotsTitle">
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
      model: '',
      starship_class: '',
      pilots: [],
      pilotsTitle: 'pilots',
      films: [],
      hasData: false
    };
  },
  mounted() {
    this.getShipData();
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
    getShipData() {
      axios.get( `https://swapi.dev/api/starships/${this.id}`)
      .then(response => {
        const { name, model, starship_class, pilots, films } = response.data;

        this.hasData = true;
        this.name = name;
        this.model = model;
        this.starship_class = starship_class;
        this.films = this.getNestedElementsSingleValue(films, 'title');
        this.pilots = this.getNestedElementsSingleValue(pilots, 'name');
      })
      .catch(error => {
        console.log(error);
      });
    },
  }
}
</script>