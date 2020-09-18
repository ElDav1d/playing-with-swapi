import SectionSharedContainer from './containers/SectionSharedContainer.vue';
import SectionList from './components/shared/SectionList.vue';
import Character from './components/Character.vue';
import World from './components/World.vue';
import Ship from './components/Ship.vue';

const charactersSectionTitle = 'characters';
const worldsSectionTitle = 'worlds';
const shipsSectionTitle = 'ships';

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
        component: SectionList,
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
        component: SectionList,
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
  {
    path: `/${shipsSectionTitle}`,
    component: SectionSharedContainer,
    props: {
      sectionTitle: shipsSectionTitle,
    },
    children: [
      {
        path: '',
        component: SectionList,
        props: {
          apiPath: 'starships',
        },
      },
      {
        path: ':name',
        component: Ship
      }
    ]
  },
];