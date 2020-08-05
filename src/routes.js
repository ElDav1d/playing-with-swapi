import Home from './components/home.vue';
import List from './components/list.vue';
import Character from './components/character.vue';

export const routes = [
  { path: '/', component: Home },
  { path: '/list', component: List },
  { path: '/character', component: Character },
];
