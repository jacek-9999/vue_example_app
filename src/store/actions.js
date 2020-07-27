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
    return api.getNode(id)
        .then((data) => {
            commit('isLoading', false);
            return data;
        });
};
export const updateNode = ({commit}, data) => {
    commit('isLoading', true);
    return api.updateNode(data)
        .then((data) => {
            commit('isLoading', false);
            return data;
        });
};