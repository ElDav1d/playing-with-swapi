import config from './config.js';
import DummyContent from './components/DummyContent.vue';
import SectionSharedContainer from './containers/SectionSharedContainer.vue';
import SectionList from './components/shared/SectionList.vue';
import CharacterSheet from './components/CharacterSheet.vue';
import WorldSheet from './components/WorldSheet.vue';
import ShipSheet from './components/ShipSheet.vue';

export const routes = [
  {
    path: '/',
    redirect: `/${config.HOME_TITLE}`,
  },
  {
    path: `/${config.HOME_TITLE}`,
    component: SectionSharedContainer,
    props: {
      sectionTitle: config.HOME_TITLE,
    },
    children: [
      {
        path: '',
        name: config.HOME_TITLE,
        component: DummyContent,
      }
    ]
  },
  {
    path: `/${config.CHARACTER_SECTION_TITLE}`,
    component: SectionSharedContainer,
    props: {
      sectionTitle: config.CHARACTER_SECTION_TITLE,
    },
    children :[
      {
        path: '',
        name: config.CHARACTER_SECTION_TITLE,
        component: SectionList,
        props: {
          apiPath: 'people',
        },
      },
      {
        path: ':name',
        component: CharacterSheet
      }
    ]
  },
  {
    path: `/${config.WORLD_SECTION_TITLE}`,
    component: SectionSharedContainer,
    props: {
      sectionTitle: config.WORLD_SECTION_TITLE,
    },
    children: [
      {
        path: '',
        name: config.WORLD_SECTION_TITLE,
        component: SectionList,
        props: {
          apiPath: 'planets',
        },
      },
      {
        path: ':name',
        component: WorldSheet
      }
    ]
  },
  {
    path: `/${config.SHIPS_SECTION_TITLE}`,
    component: SectionSharedContainer,
    props: {
      sectionTitle: config.SHIPS_SECTION_TITLE,
    },
    children: [
      {
        path: '',
        name: config.SHIPS_SECTION_TITLE,
        component: SectionList,
        props: {
          apiPath: 'starships',
        },
      },
      {
        path: ':name',
        component: ShipSheet
      }
    ]
  },
];