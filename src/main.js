import Vue from 'vue'
import App from './App.vue'
import './assets/custom.scss'
import { BootstrapVue, IconsPlugin, LayoutPlugin } from 'bootstrap-vue'
import {initAuth} from "./store/actions";
import store from './store'
import router from './router'

if (localStorage.getItem('token') !== null) {
  initAuth(store);
}


Vue.config.productionTip = false;
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(LayoutPlugin);
new Vue({
  render: h => h(App),
  store,
  router
}).$mount('#app');

