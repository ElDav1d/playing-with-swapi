<template>
  <article class="swapi-itemSheet_Container">
    <h1>I'm a SW {{ singularizeTitle }}!!</h1>
    <h2>My name is {{ name }}</h2>
    <h2>My population is {{ population }}</h2>
    <h2>My climate is {{ climate }}</h2>
    <h2>I'd appeared on this movies:</h2>
    <ul>
      <li v-for="film in films">
        {{ film }}
      </li>
    </ul>
    <h2>Some of my residents have been:</h2>
    <ul>
      <li v-for="resident in residents">
        {{ resident }}
      </li>
    </ul>
  </article>
</template>

<script>
import { singularizeTitle } from '../mixins'

export default {
  data () {
    return {
      id: this.$store.state.itemID,
      name: 'Tattoine',
      population: '20000000',
      climate: 'arid',
      films: [
        "http://swapi.dev/api/films/1/", 
        "http://swapi.dev/api/films/3/", 
        "http://swapi.dev/api/films/4/", 
        "http://swapi.dev/api/films/5/", 
        "http://swapi.dev/api/films/6/"
      ],
      residents: [
        "http://swapi.dev/api/people/1/", 
        "http://swapi.dev/api/people/2/", 
        "http://swapi.dev/api/people/4/", 
        "http://swapi.dev/api/people/6/", 
        "http://swapi.dev/api/people/7/", 
        "http://swapi.dev/api/people/8/", 
        "http://swapi.dev/api/people/9/", 
        "http://swapi.dev/api/people/11/", 
        "http://swapi.dev/api/people/43/", 
        "http://swapi.dev/api/people/62/"
      ],
    }
  },
  mixins: [
    singularizeTitle,
  ],
}

</script>