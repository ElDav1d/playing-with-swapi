<template>
  <section>
    <h2>Some of my {{ itemsName }} have been:</h2>
    <ul>
      <li v-for="item in items">
        {{ item.id }}
        {{ item.name }}
        <br>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  data() {
    return {
      items: [],
    }
  },
  mounted() {
    this.getItems(this.$props.urls);
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
    }
  }
}
</script>