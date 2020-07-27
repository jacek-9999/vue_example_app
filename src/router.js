import Vue from 'vue'
import Router from 'vue-router'
import StoriesListBase from './components/nodes/StoriesList/StoriesListBase'
import StoriesNodesListBase from './components/nodes/NodesList/StoryNodesListBase'
import NodeEditForm from "./components/nodes/Forms/NodeEditForm";
import NodeDeleteForm from "./components/nodes/Forms/NodeDeleteForm";
import NodeNewForm from "./components/nodes/Forms/NodeNewForm";
import StoryNewForm from "./components/nodes/Forms/StoryNewForm";
import StoryDeleteForm from "./components/nodes/Forms/StoryDeleteForm";
import StoryEditForm from "./components/nodes/Forms/StoryEditForm";

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
            path: '/stories/edit/:node_id',
            name: 'storiesEdit',
            component: StoryEditForm
        },
        {
            path: '/stories/delete/:node_id',
            name: 'storiesDelete',
            component: StoryDeleteForm
        },
        {
            path: '/stories/new',
            name: 'storiesNew',
            component: StoryNewForm
        },
        {
            path: '/nodes/:story_id',
            name: 'nodes',
            component: StoriesNodesListBase
        },
        {
            path: '/nodes/edit/:node_id',
            name: 'nodesEdit',
            component: NodeEditForm
        },
        {
            path: '/nodes/delete/:node_id',
            name: 'nodesDelete',
            component: NodeDeleteForm
        },
        {
            path: '/nodes/new',
            name: 'nodesNew',
            component: NodeNewForm
        }
    ]
})