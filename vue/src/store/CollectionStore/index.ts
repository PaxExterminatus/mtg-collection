import {Module} from "vuex-smart-module";
import CollectionState from './CollectionState'
import CollectionGetters from './CollectionGetters'
import CollectionMutations from './CollectionMutations'
import CollectionActions from './CollectionActions'

export {
    CollectionState,
    CollectionGetters,
    CollectionMutations,
    CollectionActions,
}

export default new Module({
    state: CollectionState,
    getters: CollectionGetters,
    mutations: CollectionMutations,
    actions: CollectionActions,
})
