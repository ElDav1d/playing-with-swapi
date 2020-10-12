<template>
<article class="CharacterSheet">
  <template v-if="hasData">
    <h2>
      I'm a SW {{ singularizeTitle }}!!
    </h2>
    <section>
      <h3>
        My name is {{ name }}
      </h3>
      <h3>
        I'm a {{ species }}
      </h3>
      <h3>
        I'm from {{ homeworld }}
      </h3>
    </section>
    <films-sub-list
      v-if="films.length"
      :films="films"
    />
  </template>
  <template v-else>
    <item-sheet-error-message
      :sectionTitle="sectionTitle"
    />
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

<style lang="scss">
@import '../assets/stylesheets/foundation/helpers';

.CharacterSheet {
  @extend %is-sheet-container;
}
</style>