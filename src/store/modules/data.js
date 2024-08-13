//data.js (Vuex module)
import {fetchPageById, fetchAllPages } from '../../services/apiService';

  const state = {
    pages: [],
    page: null,
  };
  
  const mutations = {
    SET_PAGES(state, pages) {
              state.pages = pages;
            },
            SET_PAGE(state, page) {
              state.page = page;
            },
  };
  
  const actions = {
    async fetchPages({ commit }) {
              const pages = await fetchAllPages();
              commit('SET_PAGES', pages);
            },
            async fetchPageById({ commit }, id) {
              const page = await fetchPageById(id);
              commit('SET_PAGE', page);
            },
  };

const getters = {
    allPages: (state) => state.pages,
    singlePage: (state) => state.page,
  };
  export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
  };