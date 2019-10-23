import fetchLocal from '../fetchlocal';

export default {
    async get ({commit}) {
        await fetchLocal.getAllEntries(`pages`).then(data => {
          commit('set', data.entries);
        })
    },
    async current ({commit}, page) {
      commit('current', page);
  },
}