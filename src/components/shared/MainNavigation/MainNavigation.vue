<template>
<nav class="MainNavigation">
  <ul class="MainNavigation_List">
    <li class="MainNavigation_ListItem">
      <router-link :to="{ name: this.homeTitle }">
        {{ homeTitle }}
      </router-link>
    </li>
    <li class="MainNavigation_ListItem">
      <router-link :to="{name: this.charactersTitle}">
        {{ charactersTitle }}
      </router-link>
    </li>
    <li class="MainNavigation_ListItem">
      <router-link :to="{name: this.worldsTitle}">
        {{ worldsTitle }}
      </router-link>
    </li>
    <li class="MainNavigation_ListItem">
      <router-link :to="{name: this.shipsTitle}">
        {{ shipsTitle}}
      </router-link>
    </li>
  </ul>
</nav>
</template>

<script>
import config from '../../../config.js';

export default {
  data () {
    return {
      homeTitle: config.HOME_TITLE,
      charactersTitle: config.CHARACTER_SECTION_TITLE,
      worldsTitle: config.WORLD_SECTION_TITLE,
      shipsTitle: config.SHIPS_SECTION_TITLE
    }
  }
}
</script>

<style lang="scss">
@import './main-navigation.scss';
</style>