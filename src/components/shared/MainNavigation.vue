<template>
<nav class="navbar">
  <ul class="navbar-list">
    <li class="navbar-list-item">
      <router-link to="/">
        Home
      </router-link>
    </li>
    <li class="navbar-list-item">
      <router-link to="/characters">
        Characters
      </router-link>
    </li>
    <li class="navbar-list-item">
      <router-link to="/worlds">
        Worlds
      </router-link>
    </li>
    <li class="navbar-list-item">
      <router-link to="/ships">
        Ships
      </router-link>
    </li>
  </ul>
</nav>
</template>

<style>
.navbar {
  display: flex;
  justify-content: flex-start;
  border-bottom: 1px solid #ddd;
  margin-bottom: 1em;
}

.navbar-list {
  display: flex;
  flex-direction: row;
}

.navbar-list-item {
  margin: 1em;
}
</style>