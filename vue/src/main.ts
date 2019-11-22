import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'

Vue.config.productionTip = false;


axios.get('/api/collection/index.json').then( resp => {
      new Vue({
        router,
        store,
        render: h => h(App)
      }).$mount('#app');

      store.commit('collectionSet', resp.data);
}
);
