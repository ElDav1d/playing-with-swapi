<template>
  <article class="swapi-Character_Container">
    <h1>I'm a SW character!!</h1>
    <h2>My name is {{ name }}</h2>
    <h2>I'm a {{ species }}</h2>
    <h2>I'm from {{ homeworld }}</h2>
    <h2>I'd appeared on this movies:</h2>
    <ul>
      <li v-for="film in films">
        {{ film }}
      </li>
    </ul>
  </article>
</template>

<script>

export default {
  data () {
    return {
      index: this.$store.state.itemIndex,
      name: '',
      species: [],
      homeworld: '',
      films: []
    }
  },
  mounted() {
    this.getCharacterData();
  },
  methods: {
    getCharacterData() {
      axios.get( `https://swapi.dev/api/people/${this.index}`)
      .then(response => {
        const { name, species, homeworld, films } = response.data;

        this.name = name;

        films.forEach(film => {
          axios.get(film)
          .then(response => { this.films.push(response.data.title); })
          .catch(error => { console.log(error); })
        });

        if (species.length) {
          axios.get(species)
         .then(response => { this.species = response.data.name; })
         .catch(error => { console.log(error); })
        } else {
          this.species = 'humanoid';
        }
        
        axios.get(homeworld)
         .then(response => { this.homeworld = response.data.name; })
         .catch(error => { console.log(error); })
      });
    },
  }
}
</script>

<style>
  .swapi-Character_Container {
    padding: 2rem;
    border: 1px solid #ddd;
  }
</style>
