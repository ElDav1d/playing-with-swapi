import Home from './components/Home.vue';
import List from './components/List.vue';
import Character from './components/Character.vue';

export const routes = [
  { path: '/', component: Home },
  { path: '/characters', component: List },
  { path: '/characters/*', component: Character }
];
