import Vue from 'vue';
import App from './App.vue';
import coreList from './core/core';
import store from './store/index';

Vue.use(coreList);

new Vue({
  store,
  render: h => h(App)
}).$mount('#app');

