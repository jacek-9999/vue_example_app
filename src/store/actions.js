import * as api from '../api'

export const getAllStories = ({ commit }) => {
    api.getAllStories(stories => {
        commit('receiveStories', stories)
    })
};
