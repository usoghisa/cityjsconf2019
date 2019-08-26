import Vuex from 'vuex';

import createPersistedState from 'vuex-persistedstate';
import * as Cookie from 'js-cookie';

const store = () => {
  return new Vuex.Store({
    state: {
      menuIsActive: false,
    },
    plugins: [
      createPersistedState({
          key: 'cityjsconf',
          paths: ['cityjsconf'],
          storage: {
              getItem: (key) => Cookie.getJSON(key),
              setItem: (key, value) => Cookie.set(key, value, { expires: 3, secure: true }),
              removeItem: (key) => Cookie.remove(key)
          }
      })
    ],
  })
}

export default store