<template>
<section>
  <h2>
    This is not the {{ singularizeTitle }} you are looking for
  </h2>
  <h3>
    Sorry: currently we have no data for this one
  </h3>
  <h3>
    Don't surrender to fear and check it later!
  </h3>
</section>
</template>

<script>
import { singularizeTitle } from '../../mixins';

export default {
  data() {
    return {
    }
  },
  mixins: [
    singularizeTitle
  ],
}
</script>