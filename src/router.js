import Vue from 'vue'
import Router from 'vue-router'
import StoriesListBase from './components/nodes/StoriesList/StoriesListBase'
import StoriesNodesListBase from './components/nodes/NodesList/StoryNodesListBase'
import NodeEditForm from "./components/nodes/Forms/NodeEditForm";
import NodeNewForm from "./components/nodes/Forms/NodeNewForm";

Vue.use(Router);

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    scrollBehavior() {
        return { x: 0, y: 0 };
    },
    routes: [
        {
            path: '/',
            name: 'stories',
            component: StoriesListBase
        },
        {
            path: '/story/:story_id',
            name: 'story',
            component: StoriesNodesListBase
        },
        {
            path: '/story/:story_id/nodes/:node_id/edit',
            name: 'nodesEdit',
            component: NodeEditForm
        },
        {
            path: '/story/:story_id/nodes/new',
            name: 'nodesNew',
            component: NodeNewForm
        },
        {
            path: '/story/new',
            name: 'storyNew',
            component: NodeNewForm
        }
    ]
})