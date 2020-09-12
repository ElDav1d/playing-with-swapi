import SectionSharedContainer from './containers/SectionSharedContainer.vue';
import SectionListWrapper from './components/shared/SectionListWrapper.vue';
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
        component: SectionListWrapper,
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
        component: SectionListWrapper,
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
        component: SectionListWrapper,
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