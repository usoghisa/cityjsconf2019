import Vuex from 'vuex';
import axios from '~/plugins/axios';

import createPersistedState from 'vuex-persistedstate';
import * as Cookie from 'js-cookie';

const store = () => {
  return new Vuex.Store({
    state: {
      menuIsActive: false,
      page: {},
      pages: [],
      faqs: [],
      speakers: [],
      sponsors: []
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
    mutations: {
      toggleMenuState (state) {
        state.menuIsActive = !state.menuIsActive
      },
      setPages: (state, pages) => {
        state.pages = pages
      },
      setSpeakers: (state, speakers) => {
        state.speakers = speakers
      },
      setFaqs: (state, faqs) => {
        state.faqs = faqs
      },
      setSponsors: (state, sponsors) => {
        state.sponsors = sponsors
      },
      setCurrentPage: (state, page) => {
        state.page = page
      }
    },
    actions: {
      async getPages ({commit}) {
        let {data} = await axios.get(`pages?token=${
          process.env.API_KEY
        }`, { 
          params: {
            populate: 1
          }
        });

        commit('setPages', data.entries);
      },
      async getFaqs ({commit}) {
        let {data} = await axios.get(`faqs?token=${
          process.env.API_KEY
        }`, { 
          params: {
            populate: 1
          }
        });

        commit('setFaqs', data.entries);
      },
      async getSpeakers ({commit}) {
        let {data} = await axios.get(`speakers?token=${
          process.env.API_KEY
        }`, { 
          params: {
            populate: 1
          }
        });

        commit('setSpeakers', data.entries);
      },
      async getSponsors ({commit}) {
        let {data} = await axios.get(`partners?token=${
          process.env.API_KEY
        }`, { 
          params: {
            populate: 1
          }
        });

        commit('setSponsors', data.entries);
      },
      async getPage ({commit, store}, id) {
        let {data} = await axios.get(`pages/${id}`)
        commit('setCurrentPage', data)
      },
      async nuxtServerInit ({commit}, {store, isClient, isServer, route, params}) {
        if (isServer && route.name === 'index') {
          let {data} = await axios.get(`pages?token=${
            process.env.API_KEY
          }`)
          commit('setPages', data.entries)
        }
        if (isServer && params.id) {
          let {data} = await axios.get(`pages/${params.id}`)
          commit('setCurrentPage', data)
        }
      }
    }
  })
}

export default store