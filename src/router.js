import Vue from 'vue'
import Router from 'vue-router'
import StoriesListBase from './components/StoriesListBase'
import StoriesNodesListBase from './components/StoryNodesListBase'

Vue.use(Router);

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'stories',
            component: StoriesListBase
        },
        {
            path: '/nodes',
            name: 'nodes',
            component: StoriesNodesListBase
        }
    ]
})