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
        v-if="residentsUrls.length"
        :items="residentsUrls"
        :itemsName="residentsKeyString">
      </characters-sub-list>
    </template>
    <template v-else>
      <item-sheet-error-message
        :sectionTitle="sectionTitle">
      </item-sheet-error-message>
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