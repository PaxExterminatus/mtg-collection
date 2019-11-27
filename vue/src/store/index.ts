import Vue from 'vue'
import Vuex from 'vuex'
import { createStore, Module } from 'vuex-smart-module'
import { CollectionModule } from './Collection'

Vue.use(Vuex);

const modules = new Module({
    modules: {

    }
});

const store = createStore(
    CollectionModule,
);

export default store;
