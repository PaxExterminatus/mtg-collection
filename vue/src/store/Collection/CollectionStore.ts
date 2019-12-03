import {Getters, Actions, Mutations, Module} from 'vuex-smart-module'
import { ItemDataFace } from './CollectionItem'
import { CollectionEntity } from './Collection'

class CollectionState {
    collection = new CollectionEntity()
}
class CollectionGetters extends Getters<CollectionState> {}
class CollectionActions extends Actions<CollectionState, CollectionGetters, CollectionMutations, CollectionActions> {}

const mutations = {
  add: 'collection.add',
};

class CollectionMutations extends Mutations<CollectionState> {
    static mutations = mutations;

    [mutations.add](card: ItemDataFace) {
        this.state.collection.cards.push(card);
    }
}

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
