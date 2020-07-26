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
    }
}