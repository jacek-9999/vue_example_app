import Vue from 'vue'
import Vuex from 'vuex'

import * as actions from './actions'
import mutations from './mutations'
import * as getters from './getters'

Vue.use(Vuex);

const state = {
    stories: {

    },
    stories_list: {
    },
    fetch_stories_from_api: {
        loading: true,
        requests_pending: 0
    },
    node: {

    }
};

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations,
  // plugins: process.env.NODE_ENV !== 'production'
  //   ? [createLogger()]
  //   : []
});
