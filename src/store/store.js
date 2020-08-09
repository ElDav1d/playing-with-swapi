import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

export const store = new Vuex.Store ({
  state: {
    itemIndex: 0,
  },
  mutations: {
    saveIndex: (state, index) => {
      state.itemIndex = index;
    }
  },
  plugins: [createPersistedState()],
})