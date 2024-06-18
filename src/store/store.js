import { createStore } from 'vuex'

export default createStore({
  state: {
    sections: []
  },
  mutations: {
    setSections(state, sections) {
      state.sections = sections
    }
  },
  actions: {
    async fetchSections({ commit }) {
      const response = await axios.get(`${import.meta.env.VITE_API_URL}/sections`)
      commit('setSections', response.data)
    }
  }
})