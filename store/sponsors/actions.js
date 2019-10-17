import fetchLocal from '../fetchlocal';

export default {
    async get ({commit}) {
        await fetchLocal.getAllEntries(`partners`).then(data => {
          commit('set', data.entries);
        })
    },
}