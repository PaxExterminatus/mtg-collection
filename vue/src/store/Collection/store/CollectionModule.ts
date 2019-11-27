import {Module} from "vuex-smart-module";
import { CollectionState, CollectionGetters, CollectionMutations, CollectionActions } from './'

export default new Module({
    state: CollectionState,
    getters: CollectionGetters,
    mutations: CollectionMutations,
    actions: CollectionActions,
})
