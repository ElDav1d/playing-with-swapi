import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

export const store = new Vuex.Store ({
  state: {
    itemIndex: 0,
    searchInput: '',
  },
  mutations: {
    saveIndex: (state, index) => {
      state.itemIndex = index;
    },
    saveSearchValue: (state, value) => {
      state.searchInput = value;
    }
  },
  plugins: [createPersistedState()],
})