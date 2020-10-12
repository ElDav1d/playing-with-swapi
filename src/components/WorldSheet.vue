<template>
<article class="WorldSheet">
  <template v-if="hasData">
    <h2>
      I'm a SW {{ singularizeTitle }}!!
    </h2>
    <section>
      <h3>
        My name is {{ name }}
      </h3>
      <h3>
        My population is {{ population }}
      </h3>
      <h3>
        My climate is {{ climate }}
      </h3>
    </section>
    <films-sub-list
      v-if="films.length"
      :films="films"
    />
    <characters-sub-list
      v-if="residentsUrls.length"
      :urls="residentsUrls"
      :itemsName="residentsKeyString"
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
import { singularizeTitle, getNestedElementsSingleValue, commonSheetData } from '../mixins'
import FilmsSubList from './shared/FilmsSubList.vue';
import CharactersSubList from './shared/CharactersSubList.vue';
import ItemSheetErrorMessage from './shared/ItemSheetErrorMessage.vue';

export default {
  data () {
    return {
      population: '',
      climate: 'arid',
      residentsUrls: [],
      residentsKeyString: 'residents',
    }
  },
  mounted() {
    this.getWorldData();
  },
  components: {
    FilmsSubList,
    CharactersSubList,
    ItemSheetErrorMessage
  },
  mixins: [
    singularizeTitle,
    getNestedElementsSingleValue,
    commonSheetData
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
        this.residentsUrls = residents;
      })
      .catch(error => {
        console.log(error);
      });
    },
  }
}
</script>

<style lang="scss">
@import '../assets/stylesheets/foundation/helpers.scss';

.WorldSheet {
  @extend %is-sheet-container;
}
</style>