import Vue from 'vue'
import App from './App.vue'
import './assets/custom.scss'
import { BootstrapVue, IconsPlugin, LayoutPlugin } from 'bootstrap-vue'
import {initAuth, setErrorMsg} from "./store/actions";
import store from './store'
import router from './router'

if (localStorage.getItem('token') !== null) {
  initAuth(store);
}

window.onerror = function(message, source, lineno, colno, error) {
    console.log(message);
    console.log(source);
    console.log(lineno);
    console.log(colno);
    console.log(error);
    setErrorMsg(store, `Error: ${message}`);
};
// window.onerror = function (message) {
//   console.log(message);
//   setErrorMsg(store, `Error: ${message}`);
// };
Vue.config.productionTip = false;
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(LayoutPlugin);
new Vue({
  render: h => h(App),
  store,
  router
}).$mount('#app');

