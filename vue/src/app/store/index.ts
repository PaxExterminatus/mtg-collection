import Vue from 'vue'
import Vuex from 'vuex'
import { createStore, Module } from 'vuex-smart-module'
import CollectionModule from './Collection/CollectionStore'
import {collection} from '@/app/api/collection'

Vue.use(Vuex);

const store = createStore(
    CollectionModule,
);

collection()
    .load()
    .then( (resp) => {
        console.log('collection', resp);
        store.state.collection.load(resp.data);
    });

export default store;
