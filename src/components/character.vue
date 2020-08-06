<template>
  <article class="swapi-Character_Container">
    <h1>I'm a SW character!!</h1>
    <h2>Name</h2>
    <h2>Specie</h2>
    <h2>Homeworld</h2>
    <ul>
      <li>FILM 1</li>
      <li>FILM 2</li>
      <li>FILM 3</li>
    </ul>
  </article>
</template>

<script>
export default {
  data () {
    return {
      index: 0,
      name: '',
      species: [],
      homeworld: '',
      films: []
    }
  },
  mounted() {
    this.getIndexFromPath();
    this.getCharacterData();
  },
  methods: {
    getIndexFromPath() {
      const path = window.location.pathname.split('/');
      const lastPieceOfPath = path[path.length - 1];
      const firstNumber = parseInt(lastPieceOfPath.match(/^\d+/)[0]);
      this.index = firstNumber;
    },
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
