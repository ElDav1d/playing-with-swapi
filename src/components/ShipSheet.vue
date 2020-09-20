<template>
<article class="swapi-itemSheet_Container">
  <template v-if="hasData">
    <h1>
      I'm a SW {{ singularizeTitle }}!!
    </h1>
    <h2>
      My name is {{ name }}
    </h2>
    <h2 v-html="modelString"></h2>
    <h2 v-html="classString"></h2>
    <films-sub-list
      :films="films"
    />
    <characters-sub-list
      v-if="pilotsUrls.length"
      :urls="pilotsUrls"
      :itemsName="pilotsKeyString"
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
      model: '',
      starship_class: '',
      pilotsUrls: [],
      pilotsKeyString: 'pilots',
    };
  },
  mounted() {
    this.getShipData();
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
    getShipData() {
      axios.get( `https://swapi.dev/api/starships/${this.id}`)
      .then(response => {
        const { name, model, starship_class, pilots, films } = response.data;

        this.hasData = true;
        this.name = name;
        this.model = model;
        this.starship_class = starship_class;
        this.films = this.getNestedElementsSingleValue(films, 'title');
        this.pilotsUrls = pilots;
      })
      .catch(error => {
        console.log(error);
      });
    },
  },
  computed: {
    modelString() {
      return `I'm a <em>${this.model}</em> model`;
    },
    classString() {
      return `I belong to the <em>${this.starship_class}</em> class`;
    }
  }
}
</script>