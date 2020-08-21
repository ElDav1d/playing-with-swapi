<template>
  <article class="swapi-itemSheet_Container">
    <h1>I'm a SW {{ singularizeTitle }}!!</h1>
    <h2>My name is {{ name }}</h2>
    <h2>I'm  a <em>{{ model }}</em> model</h2>
    <h2>I belong to the <em>{{ starship_class }}</em> class</h2>
    <h2>I'd appeared on this movies:</h2>
    <ul>
      <li v-for="film in films">
        {{ film }}
      </li>
    </ul>
    <template v-if="pilots.length">
      <h2>Some of my pilots have been:</h2>
      <ul>
        <li v-for="pilot in pilots">
          {{ pilot }}
        </li>
      </ul>
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
      model: '',
      starship_class: '',
      pilots: [],
      films: [], 
    };
  },
  mounted() {
    this.getShipData();
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

        this.name = name;
        this.model = model;
        this.starship_class = starship_class;
        this.films = this.getNestedElementsSingleValue(films, 'title');
        this.pilots = this.getNestedElementsSingleValue(pilots, 'name');
      })
      .catch(error => {
        console.log(error);
        alert(`Sorry, something went wrong when loading this ship. Please refresh the page after closing 
        this dialog.`);
      });
    },
  }
}
</script>