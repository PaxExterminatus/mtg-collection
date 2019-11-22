import { Getters } from 'vuex-smart-module'
import { CollectionState } from './'

class CollectionGetters extends Getters<CollectionState> {
    get counter() {
        return {
            cards: this.state.collection.cards.length + 1,
        }
    }
}

export default CollectionGetters
