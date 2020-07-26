import Vue from 'vue'
import {getStory} from "./actions";
import store from './index'

export default {
    receiveStories(state, stories) {
        stories.forEach(story => {
            Vue.set(state.stories_list, 'story' + story.story_id, story.story_id);
            getStory(store, story.story_id)
        })
    },
    receiveStory(state, nodes) {
        Vue.set(state.stories, nodes.story_id, nodes);
    }
}