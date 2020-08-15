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