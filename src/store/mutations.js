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
            // localStorage.setItem(story.story_id, story);
        //     getStory(store, story.story_id)
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
        //     Vue.set(state.fetch_stories_from_api, 'loading', isLoading);
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
        // state.fetch_stories_from_api.requests_pending = 0;
    },
    saveToken(state, token) {
        localStorage.setItem('token', token);
        state.authorized = true;
    },
    deleteToken(state) {
        localStorage.removeItem('token');
        state.authorized = false;
    }
}