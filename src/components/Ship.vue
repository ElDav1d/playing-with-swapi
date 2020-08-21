<template>
  <article class="swapi-itemSheet_Container">
    <h1>I'm a SW {{ singularizeTitle }}!!</h1>
    <h2>My name is {{ name }}</h2>
    <h2>I'm  a <em>{{ model }}</em> model</h2>
    <h2>I belong to the <em>{{ starship_class }}</em> class</h2>
    <h2>I'd appeared on this movies:</h2>
    <ul>
      <li v-for="film in films">
        {{ film }}
      </li>
    </ul>
    <template v-if="pilots.length">
      <h2>Some of my pilots have been:</h2>
      <ul>
        <li v-for="pilot in pilots">
          {{ pilot }}
        </li>
      </ul>
    </template>
  </article>
</template>

<script>
import { singularizeTitle } from '../mixins'

export default {
  data () {
    return {
      id: this.$store.state.itemID,
      name: 'Y-wing',
      model: 'BTL Y-wing',
      starship_class: 'assault starfighter',
      pilots: [
        'http://swapi.dev/api/people/13/', 
        'http://swapi.dev/api/people/14/', 
        'http://swapi.dev/api/people/25/', 
        'http://swapi.dev/api/people/31/'
      ],
      films: [
        'http://swapi.dev/api/films/1/', 
        'http://swapi.dev/api/films/2/', 
        'http://swapi.dev/api/films/3/'
      ], 
    };
  },
  mounted() {
  },
  mixins: [
    singularizeTitle,
  ]
}
</script>