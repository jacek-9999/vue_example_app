import Vue from 'vue'
import Router from 'vue-router'
import StoriesListBase from './components/nodes/StoriesList/StoriesListBase'
import StoriesNodesListBase from './components/nodes/NodesList/StoryNodesListBase'
import NodeEditForm from "./components/nodes/Forms/NodeEditForm";
import NodeNewForm from "./components/nodes/Forms/NodeNewForm";
import GamesListBase from "./components/Game/GameListBase";
import Game from "./components/Game/Game";
import LoginForm from "./components/Login/LoginForm";

Vue.use(Router);

let router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    scrollBehavior() {
        return { x: 0, y: 0 };
    },
    routes: [
        {
            path: '/login',
            name: 'login',
            component: LoginForm,
            meta: {
                requiresAuth: false
            }
        },
        {
            path: '/games',
            name: 'games',
            component: GamesListBase,
            meta: {
                requiresAuth: false
            }
        },
        {
            path: '/game/:story_id',
            name: 'game',
            component: Game,
            meta: {
                requiresAuth: false
            }
        },
        {
            path: '/',
            name: 'stories',
            component: StoriesListBase,
            meta: {
                requiresAuth: true
            }
        },
        {
            path: '/story/:story_id',
            name: 'story',
            component: StoriesNodesListBase,
            meta: {
                requiresAuth: true
            }
        },
        {
            path: '/story/:story_id/nodes/:node_id/edit',
            name: 'nodesEdit',
            component: NodeEditForm,
            meta: {
                requiresAuth: true
            }
        },
        {
            path: '/story/:story_id/nodes/new',
            name: 'nodesNew',
            component: NodeNewForm,
            meta: {
                requiresAuth: true
            }
        },
        {
            path: '/story/new',
            name: 'storyNew',
            component: NodeNewForm,
            meta: {
                requiresAuth: true
            }
        }
    ]
});

router.beforeEach((to, from, next) => {
    if(to.matched.some(record => record.meta.requiresAuth)) {
        if (localStorage.getItem('token') == 'null') {
            return next({
                path: '/login',
                params: { nextUrl: to.fullPath }
            });
        }
    }
    return next();
});

export default router