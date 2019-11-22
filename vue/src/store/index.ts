import Vue from 'vue'
import Vuex from 'vuex'
import { createStore } from 'vuex-smart-module'
import CollectionModule from './CollectionStore'

Vue.use(Vuex);

const store = createStore(
    CollectionModule
);
console.log('store make');
export default store;
