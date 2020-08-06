import Vue from 'vue'
import Vuex from 'vuex'

import * as actions from './actions'
import mutations from './mutations'
import * as getters from './getters'

Vue.use(Vuex);

const state = {
    stories: [],
    stories_list: {
    },
    games_list: {
    },
    loading: true,
    requests_pending: 0,
    authorized: false,
    token: null,
    token_exp: null,
    node: {},
    currentNode: {},
    node_prepared_to_delete: null,
    story_prepared_to_delete: null,
    current_error_msg: null
};

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations,
});
