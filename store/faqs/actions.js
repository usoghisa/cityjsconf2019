import FetchIt from '../fetchit';

export default {
    async get ({commit}) {
        await FetchIt.getAllEntries(`faqs`).then(data => {
          commit('set', data.entries);
        })
    },
}