import FetchIt from '../fetchit';

export default {
    async get ({commit}) {
        await FetchIt.getAllEntries(`partners`).then(data => {
          commit('set', data.entries);
        })
    },
}