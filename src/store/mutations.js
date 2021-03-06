import Vue from 'vue'
// import {getStory} from "./actions";
// import store from './index'

export default {
    clearStories(state) {
        state.stories_list = {};
    },
    receiveStories(state, stories) {
        stories.forEach(story => {
            Vue.set(state.stories_list, story.story_id, story);
        });
    },
    receiveGames(state, games) {
        games.forEach(game => {
            Vue.set(state.games_list, game.story_id, game);
        });
    },
    receiveStory(state, nodes) {
        Vue.set(state.stories, nodes.story_id, nodes);
    },
    receiveNode(state, node) {
        Vue.set(state.node, 'current', node);
    },
    setCurrentNode(state, node) {
        Vue.set(state.currentNode, 'current', node);
    },
    isLoading(state, isLoading) {
        if (isLoading) {
            state.requests_pending++;
        } else {
            state.requests_pending--;
        }
        if ((!isLoading && (state.requests_pending === 0))
            || (isLoading && (state.requests_pending > 0))) {
            Vue.set(state, 'is_loading', isLoading);
        }
    },
    prepareNodeToDelete(state, node) {
        state.node_prepared_to_delete = node;
    },
    prepareStoryToDelete(state, story) {
        state.story_prepared_to_delete = story;
    },
    resetLoader(state) {
        state.is_loading = false;
    },
    setToken(state, token) {
        state.token_exp = JSON.parse(atob(token.split('.')[1])).exp;
        state.token = token;
        localStorage.setItem('token', token);
    },
    deleteToken(state) {
        localStorage.removeItem('token');
        state.token = null;
        state.token_exp = null;
    },
    setErrorMsg(state, msg) {
        state.current_error_msg = msg;
    },
}