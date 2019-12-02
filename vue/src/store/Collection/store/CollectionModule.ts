import {Module} from "vuex-smart-module";
import { CollectionState, CollectionGetters, CollectionMutations, CollectionActions } from '@/store/Collection'

export default new Module({
    state: CollectionState,
    getters: CollectionGetters,
    mutations: CollectionMutations,
    actions: CollectionActions,
})
