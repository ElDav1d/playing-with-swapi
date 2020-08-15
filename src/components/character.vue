<template>
  <article class="swapi-itemSheet_Container">
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
  </article>
</template>

<script>

export default {
  data () {
    return {
      id: this.$store.state.itemID,
      name: '',
      species: [],
      homeworld: '',
      films: []
    }
  },
  mounted() {
    this.getCharacterData();
  },
  props: {
    sectionTitle: {
      type: String,
      required: true
    },
  },
  computed: {
    singularizeTitle() {
      return this.$props.sectionTitle.slice(0, -1);
    }
  },
  methods: {
    getCharacterData() {
      axios.get( `https://swapi.dev/api/people/${this.id}`)
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
          this.species = 'human';
        }
        
        axios.get(homeworld)
         .then(response => { this.homeworld = response.data.name; })
         .catch(error => { console.log(error); })
      })
      .catch(error => {
        console.log(error);
        alert(`Sorry, something went wrong when loading this character. Please refresh the page after closing this dialog.`);
      });
    },
  }
}
</script>