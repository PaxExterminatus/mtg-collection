import { Getters, Actions, Mutations, Module } from 'vuex-smart-module'
import { ItemDataFace } from './CollectionItem'
import { CollectionEntity } from './Collection'

class CollectionState {
    collection = new CollectionEntity();
    constructor() {
        this.collection.load()
    }
}

class CollectionGetters extends Getters<CollectionState> {}
class CollectionActions extends Actions<CollectionState, CollectionGetters, CollectionMutations, CollectionActions> {}

class CollectionMutations extends Mutations<CollectionState> {

    ['collection.load'](cards: ItemDataFace[]) {
        this.state.collection.cards = cards;
    }

    ['collection.add'](card: ItemDataFace) {
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
