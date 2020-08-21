
import SectionSharedContainer from './containers/SectionSharedContainer.vue';
import List from './components/List.vue';
import Character from './components/Character.vue';
import World from './components/World.vue';

const charactersSectionTitle = 'characters'
const worldsSectionTitle = 'worlds'

export const routes = [
  {
    path: '/',
    component: SectionSharedContainer,
    props: {
      sectionTitle: 'home'
    }
  },
  {
    path: `/${charactersSectionTitle}`,
    component: SectionSharedContainer,
    props: {
      sectionTitle: charactersSectionTitle,
    },
    children :[
      {
        path: '',
        component: List,
        props: {
          apiPath: 'people',
        },
      },
      {
        path: ':name',
        component: Character
      }
    ]
  },
  {
    path: `/${worldsSectionTitle}`,
    component: SectionSharedContainer,
    props: {
      sectionTitle: worldsSectionTitle,
    },
    children: [
      {
        path: '',
        component: List,
        props: {
          apiPath: 'planets',
        },
      },
      {
        path: ':name',
        component: World
      }
    ]
  },
];