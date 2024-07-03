// src/store/index.js
import { createStore } from 'vuex';
import { fetchPageById, fetchAllPages } from '../services/apiService';

export default createStore({
  state: {
    pages: [],
    page: null,
  },
  mutations: {
    SET_PAGES(state, pages) {
      state.pages = pages;
    },
    SET_PAGE(state, page) {
      state.page = page;
    },
  },
  actions: {
    async fetchPages({ commit }) {
      const pages = await fetchAllPages();
      commit('SET_PAGES', pages);
    },
    async fetchPageById({ commit }, id) {
      const page = await fetchPageById(id);
      commit('SET_PAGE', page);
    },
  },
  getters: {
    getProductById: (state) => (id) => {
      return state.products.find(product => product.id === id);
    },
    allPages: (state) => state.pages,
    singlePage: (state) => state.page,
  },
});
