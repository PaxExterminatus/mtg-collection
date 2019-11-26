import {Module} from "vuex-smart-module";
import CollectionActions from "./CollectionActions";
import CollectionGetters from "./CollectionGetters";
import CollectionMutations from "./CollectionMutations";
import CollectionState from "./CollectionState";

export default new Module({
    state: CollectionState,
    getters: CollectionGetters,
    mutations: CollectionMutations,
    actions: CollectionActions,
})
