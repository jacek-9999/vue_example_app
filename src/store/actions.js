import * as api from '../api'

export const getAllStories = ({ commit }) => {
    api.getAllStories(stories => {
        commit('receiveStories', stories)
    })
};

export const getStory = ({ commit }, id) => {
    api.getStory(id, (nodes) => {
        nodes.story_id = id;
        commit('receiveStory', nodes);
    })
};