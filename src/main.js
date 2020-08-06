import Vue from 'vue'
import App from './App.vue'
import './assets/custom.scss'
import { BootstrapVue, IconsPlugin, LayoutPlugin } from 'bootstrap-vue'
import {getAllStories, initAuth, setErrorMsg} from "./store/actions";
import store from './store'
import router from './router'

if (localStorage.getItem('token') !== null) {
  initAuth(store).then(() => {
      getAllStories(store);
  });
}

Vue.config.errorHandler = function (err) {
    setErrorMsg(store, `Error: ${err.name}`);
};
window.onerror = function(message) {
    setErrorMsg(store, `Error: ${message}`);
    return false;
};
window.addEventListener('unhandledrejection', function(event) {
    setErrorMsg(store, `Error: ${event.toString()}`);
});

Vue.config.productionTip = false;
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(LayoutPlugin);
new Vue({
  render: h => h(App),
  store,
  router
}).$mount('#app');
