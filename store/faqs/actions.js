import fetchLocal from '../fetchlocal';

export default {
    async get ({commit}) {
        await fetchLocal.getAllEntries(`faqs`).then(data => {
          commit('set', data.entries);
        })
    },
}