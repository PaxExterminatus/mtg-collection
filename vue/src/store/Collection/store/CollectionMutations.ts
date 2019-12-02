import { Mutations } from 'vuex-smart-module'
import { CollectionState, CardEntity } from '@/store/Collection'

const mutations = {
    add: 'collection.add'
};

class CollectionMutations extends Mutations<CollectionState> {
    [mutations.add](card: CardEntity) {
        this.state.collection.cards.push(card);
    }
}

export {
    CollectionMutations,
    mutations,
}

export default CollectionMutations
