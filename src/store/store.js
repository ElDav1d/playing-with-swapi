import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

export const store = new Vuex.Store ({
  state: {
    itemID: '',
    searchInput: '',
  },
  mutations: {
    saveItemID: (state, id) => {
      state.itemID = id;
    },
    saveSearchValue: (state, value) => {
      state.searchInput = value;
    }
  },
  plugins: [createPersistedState()],
})