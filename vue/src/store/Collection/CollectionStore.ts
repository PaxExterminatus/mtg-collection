import {Getters, Actions, Mutations, Module} from 'vuex-smart-module'
import {CollectionEntity, CollectionMutations} from "@/store/Collection/index";

class CollectionState {
    collection = new CollectionEntity()
}

class CollectionGetters extends Getters<CollectionState> {}
class CollectionActions extends Actions<CollectionState, CollectionGetters, CollectionMutations, CollectionActions> {}

import { CollectionState, CardEntity } from '@/store/Collection'

class CollectionMutations extends Mutations<CollectionState> {
    // @ts-ignore
    [this.names.add](card: CardEntity) {
        this.state.collection.cards.push(card);
    }

    static names = {
        add: 'collection.add'
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
