import { Mutations } from 'vuex-smart-module'
import { CardEntity } from '../'
import { CollectionState } from './'

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
