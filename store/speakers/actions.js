import FetchIt from '../fetchit';

export default {
    async get ({commit}) {
        await FetchIt.getAllEntries(`speakers`).then(data => {
          commit('set', data.entries);
        })
    },
}