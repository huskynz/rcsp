// store/auth.js

import { supabase } from '~/plugins/supabase';

export const state = () => ({
  user: null,
  userRole: null
});

export const mutations = {
  setUser(state, user) {
    state.user = user;
  },
  setUserRole(state, role) {
    state.userRole = role;
  }
};

export const actions = {
  async fetchUser({ commit }) {
    const { user, error } = await supabase.auth.user();
    if (user) {
      commit('setUser', user);
      // Fetch and set user role from the database
      const { data, error } = await supabase
        .from('user_roles')
        .select('role')
        .eq('user_id', user.id)
        .single();
      if (data) {
        commit('setUserRole', data.role);
      }
    }
  }
};
