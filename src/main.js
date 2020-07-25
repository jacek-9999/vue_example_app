import Vue from 'vue'
import App from './App.vue'
import './assets/custom.scss'
import { BootstrapVue, IconsPlugin, LayoutPlugin } from 'bootstrap-vue'
import { getNode, getAllStories, getStory } from './api'


Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(LayoutPlugin)
new Vue({
  render: h => h(App),
}).$mount('#app')

getNode(1, (data) => console.log(data));
getStory(1, (data) => console.log(data));
getAllStories( (data) => console.log(data));
