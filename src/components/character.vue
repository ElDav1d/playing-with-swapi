<template>
  <article class="swapi-itemSheet_Container">
    <template v-if="hasData">
      <h1>I'm a SW {{ singularizeTitle }}!!</h1>
      <h2>My name is {{ name }}</h2>
      <h2>I'm a {{ species }}</h2>
      <h2>I'm from {{ homeworld }}</h2>
      <h2>I'd appeared on this movies:</h2>
      <films-sub-list
        :films="films">
      </films-sub-list>
    </template>
    <template v-else>
      <item-sheet-error-message
        :sectionTitle="sectionTitle">
      </item-sheet-error-message>
    </template>
  </article>
</template>

<script>
import { singularizeTitle, getNestedElementsSingleValue, commonSheetData } from '../mixins';
import FilmsSubList from './shared/FilmsSubList.vue';
import ItemSheetErrorMessage from './shared/ItemSheetErrorMessage.vue';

export default {
  data () {
    return {
      species: [],
      homeworld: '',
    }
  },
  mounted() {
    this.getCharacterData();
  },
  components: {
    FilmsSubList,
    ItemSheetErrorMessage
  },
  mixins: [
    singularizeTitle,
    getNestedElementsSingleValue,
    commonSheetData 
  ],
  methods: {
    getCharacterData() {
      axios.get( `https://swapi.dev/api/people/${this.id}`)
        .then(response => {
          const { name, species, homeworld, films } = response.data;

          this.hasData = true;
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