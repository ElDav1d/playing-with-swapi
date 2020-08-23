export const singularizeTitle = {
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
}

export const getNestedElementsSingleValue = {
  methods: {
    getNestedElementsSingleValue(array, string) {
      let newArray = []
      array.forEach((item) => {
        axios.get(item)
          .then(response => { newArray.push(response.data[string]) })
          .catch(error => { console.log(error); });
      })
      return newArray
    },
  },
}

export const commonSheetData = {
  data() {
    return {
      id: this.$store.state.itemID,
      name: '',
      films: [],
      hasData: false
    };
  },
}