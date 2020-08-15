import Home from './containers/SharedContainer.vue';
import Characters from './containers/SharedContainer.vue';
import List from './components/List.vue';
import Character from './components/Character.vue';

export const routes = [
  {
    path: '/',
    component: Home,
    props: {
      title: 'Home'
    }
  },
  { path: '/characters',
    component: Characters,
    props: {
      title: 'Characters'
    },
    children :[
      {
        path: '',
        component: List
      },
      {
        path: ':name',
        component: Character
      }
  ]},
];
