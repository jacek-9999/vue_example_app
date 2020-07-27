import * as api from '../api'

export const getAllStories = ({ commit }) => {
    commit('isLoading', true);
    api.getAllStories(stories => {
        commit('receiveStories', stories)
        commit('isLoading', false);
    })
};

export const getStory = ({ commit }, id) => {
    commit('isLoading', true);
    api.getStory(id, (nodes) => {
        nodes.story_id = id;
        commit('receiveStory', nodes);
        commit('isLoading', false);
    })
};

export const getNodeById = ({commit}, id) => {
    commit('isLoading', true);
    api.getNode(id, (node) => {
        commit('receiveNode', node);
        commit('isLoading', false);
    });
};