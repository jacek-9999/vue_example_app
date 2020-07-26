import Vue from 'vue'
import {getStory} from "./actions";
import store from './index'

export default {
    receiveStories(state, stories) {
        Vue.set(state.stories, 'stories' ,stories);
        stories.forEach(story => {
            getStory(store, story.story_id)
        })
    },
    receiveStory(state, nodes) {
        Vue.set(state.stories, nodes.story_id, nodes);
    }
}