import fetchLocal from '../fetchlocal';

export default {
    async get ({commit}) {
        await fetchLocal.getAllEntries(`speakers`).then(data => {
          commit('set', data.entries);
        })
    },
}