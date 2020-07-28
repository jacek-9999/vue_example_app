import Vue from 'vue'
import {getStory} from "./actions";
import store from './index'

export default {
    receiveStories(state, stories) {
        stories.forEach(story => {
            Vue.set(state.stories_list, 'story' + story.story_id, story);
            getStory(store, story.story_id)
        });
    },
    receiveStory(state, nodes) {
        Vue.set(state.stories, nodes.story_id, nodes);
    },
    receiveNode(state, node) {
        Vue.set(state.node, node.id, node);
    },
    isLoading(state, isLoading) {
        if (isLoading) {
            state.fetch_stories_from_api.requests_pending++;
        } else {
            state.fetch_stories_from_api.requests_pending--;
        }
        if ((!isLoading && (state.fetch_stories_from_api.requests_pending === 0))
            || (isLoading && (state.fetch_stories_from_api.requests_pending > 0))) {
            Vue.set(state.fetch_stories_from_api, 'loading', isLoading);
        }
    },
    prepareNodeToDelete(state, node) {
        state.node_prepared_to_delete = node;
    },
    prepareStoryToDelete(state, story) {
        state.story_prepared_to_delete = story;
    },
    resetLoader(state) {
        state.fetch_stories_from_api.loading = false;
        state.fetch_stories_from_api.requests_pending = 0;
    }
}