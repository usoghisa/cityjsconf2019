import FetchIt from '../fetchit';

export default {
    async get ({commit}) {
        await FetchIt.getAllEntries('pages').then(data => {
          commit('set', data.entries);
        })
    },
}