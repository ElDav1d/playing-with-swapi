import Home from './containers/Home.vue';
import Characters from './containers/Characters.vue';
import List from './components/List.vue';
import Character from './components/Character.vue';

export const routes = [
  { path: '/', component: Home },
  { path: '/characters', component: Characters, children :[
    { path: '', component: List },
    { path: ':name', component: Character }
  ]},
];
