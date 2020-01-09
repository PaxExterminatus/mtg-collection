import Vue from 'vue'
import Vuex from 'vuex'
import { createStore, Module } from 'vuex-smart-module'
import CollectionModule from './Collection/CollectionStore'

Vue.use(Vuex);

const store = createStore(
    CollectionModule,
);

export default store;
