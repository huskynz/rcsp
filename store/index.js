// store/index.js
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const state = () => ({
  // Your state variables here
});

export const mutations = {
  // Your mutations here
};

export const actions = {
  // Your actions here
};

export const getters = {
  // Your getters here
};

export const strict = false;

export const plugins = [];

export const store = new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
  strict,
  plugins,
});
