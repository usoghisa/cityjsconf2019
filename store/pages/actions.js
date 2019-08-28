import FetchIt from '../fetchit';

export default {
    async get ({commit}) {
        await FetchIt.getAllEntries(`pages`).then(data => {
          console.log(data);
          commit('set', data.entries);
        })
    },
}