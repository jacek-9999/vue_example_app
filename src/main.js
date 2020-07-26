import Vue from 'vue'
import App from './App.vue'
import './assets/custom.scss'
import { BootstrapVue, IconsPlugin, LayoutPlugin } from 'bootstrap-vue'
// import { getNode, getAllStories, getStory } from './api'
import {getAllStories} from "./store/actions";
import store from './store'
import router from './router'



Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(LayoutPlugin)
new Vue({
  render: h => h(App),
  store,
  router
}).$mount('#app')

// getNode(1, (data) => console.log(data));
// getStory(1, (data) => console.log(data));
getAllStories(store);
