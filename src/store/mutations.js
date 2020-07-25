import Vue from 'vue'

export default {
    receiveStories(state, stories) {
        Vue.set(state.stories, 'stories' ,stories);
    }
}