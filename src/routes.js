import DummyContent from './components/DummyContent.vue';
import SectionSharedContainer from './containers/SectionSharedContainer.vue';
import SectionList from './components/shared/SectionList.vue';
import CharacterSheet from './components/CharacterSheet.vue';
import WorldSheet from './components/WorldSheet.vue';
import ShipSheet from './components/ShipSheet.vue';

const homeTitle = 'home';
const charactersSectionTitle = 'characters';
const worldsSectionTitle = 'worlds';
const shipsSectionTitle = 'ships';

export const routes = [
  {
    path: '/',
    redirect: `/${homeTitle}`,
  },
  {
    path: `/${homeTitle}`,
    component: SectionSharedContainer,
    props: {
      sectionTitle: homeTitle,
    },
    children: [
      {
        path: '',
        component: DummyContent,
      }
    ]
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
        component: CharacterSheet
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
        component: WorldSheet
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
        component: ShipSheet
      }
    ]
  },
];