<template>
<section>
  <h2>
    Some of my {{ itemsName }} have been:
  </h2>
  <ul>
    <linked-item
      v-for="item in items"
      :key="item.id"
      :sectionTitle="sectionTitle"
      :item="item"
    />
  </ul>
</section>
</template>

<script>
import LinkedItem from './LinkedItem.vue';


export default {
  data() {
    return {
      items: [],
      sectionTitle: 'characters'
    }
  },
  mounted() {
    this.getItems(this.$props.urls);
  },
  components: {
    LinkedItem
  },
  props: {
    urls: {
      type: Array,
      required: true
    },
    itemsName: {
      type: String,
      required: true
    },
  },
  methods: {
    getItems(array) {
      this.items = array.map((element) => {
        let item = {
          id: '',
          name: ''
        };

        item.id = this.getItemId(element);

        axios.get(element)
          .then(response => { item.name = response.data.name })
          .catch(error => { console.log(error); })

        return item;
      });
    },
    getItemId(item) {
      item = item.split('/')
        .filter((element) => element != "")
      return item[item.length - 1];
    },
  }
}
</script>