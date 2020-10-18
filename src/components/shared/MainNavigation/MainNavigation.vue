<template>
<nav class="MainNavigation">
  <ul class="MainNavigation_List">
    <li class="MainNavigation_ListItem">
      <router-link :to="{ name: 'home' }">
        Home
      </router-link>
    </li>
    <li class="MainNavigation_ListItem">
      <router-link :to="{name: 'characters'}">
        Characters
      </router-link>
    </li>
    <li class="MainNavigation_ListItem">
      <router-link :to="{name: 'worlds'}">
        Worlds
      </router-link>
    </li>
    <li class="MainNavigation_ListItem">
      <router-link :to="{name: 'ships'}">
        Ships
      </router-link>
    </li>
  </ul>
</nav>
</template>

<style lang="scss">
@import './main-navigation.scss';
</style>