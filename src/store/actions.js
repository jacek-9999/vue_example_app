import * as api from '../api'

export const getAllStories = ({ commit }) => {
    commit('isLoading', true);
    api.getAllStories(stories => {
        commit('receiveStories', stories)
        commit('isLoading', false);
    })
};

export const clearStories = ({commit}) => {
    commit('clearStories');
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
            commit('setCurrentNode', data.data);
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
export const createNode = ({commit}, data) => {
    commit('isLoading', true);
    return api.createNode(data)
        .then((data) => {
            commit('isLoading', false);
            return data;
        });
};
export const createOption = ({commit}, data) => {
    commit('isLoading', true);
    return api.createOption(data)
        .then((data) => {
            commit('isLoading', false);
            return data;
        });
};
export const prepareNodeToDelete = ({commit}, node) => {
    commit('prepareNodeToDelete', node);
};
export const prepareStoryToDelete = ({commit}, story) => {
    commit('prepareStoryToDelete', story);
};
export const deleteNode = ({commit}, id) => {
    commit('isLoading', true);
    return api.deleteNode(id).then((data) => {
            commit('prepareNodeToDelete', null);
            commit('isLoading', false);
            return data;
        });
};
export const deleteStory = ({commit}, id) => {
    commit('isLoading', true);
    return api.deleteStory(id).then((data) => {
            commit('prepareStoryToDelete', null);
            commit('isLoading', false);
            return data;
        });
};
export const unlinkNode = ({commit}, data) => {
    commit('isLoading', true);
    return api.unlinkNode(data).then((data) => {
            commit('isLoading', false);
            return data;
        });
};
export const resetLoader = ({commit}) => {
    commit('resetLoader');
};
export const setCurrentGame = ({commit}, node) => {
    commit('setCurrentGame', node);
};
