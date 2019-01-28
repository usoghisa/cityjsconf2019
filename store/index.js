import Vuex from 'vuex';

import createPersistedState from 'vuex-persistedstate';
import * as Cookie from 'js-cookie';
import FetchIt from './fetchit';

const store = () => {
  return new Vuex.Store({
    state: {
      menuIsActive: false,
      page: {},
      pages: [],
      faqs: [],
      speakers: [],
      sponsors: [],
      schedule: []
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
        if (typeof pages !== 'undefined') {
          state.pages = pages.sort(function(a, b) {
            return a.orderOnTopMenu-b.orderOnTopMenu
          });
        }
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
      },
      setSchedule: (state, schedule) => {
        state.schedule = schedule
      }
    },
    actions: {
      async getPages ({commit}) {
        await FetchIt.getAllEntries('pages').then(data => {
          commit('setPages', data.entries);
        })
      },
      async getFaqs ({commit}) {
        await FetchIt.getAllEntries('faqs').then(data => {
          commit('setFaqs', data.entries);
        })
      },
      async getSpeakers ({commit}) {
        await FetchIt.getAllEntries('speakers').then(data => {
          commit('setSpeakers', data.entries);
        });
      },
      async getSponsors ({commit}) {
        await FetchIt.getAllEntries('partners').then(data => {
          commit('setSponsors', data.entries);
        });
      },
      async getSchedule ({commit}) {
        await FetchIt.getAllEntries('schedule').then(data => {

          commit('setSchedule', data.entries);
        });
      },
      async nuxtServerInit ({commit}, {store, isClient, isServer, route, params}) {
        if (isServer && route.name === 'index') {
          await FetchIt.getAllEntries('pages').then(data => {
            commit('setPages', data.entries);
          })
        }
      }
    }
  })
}

export default store