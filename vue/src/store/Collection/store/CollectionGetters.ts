import { Getters } from 'vuex-smart-module'
import CollectionState  from './CollectionState'

class CollectionGetters extends Getters<CollectionState> {
    get counter() {
        return {
            cards: this.state.collection.cards.length,
            tokens: this.state.collection.tokens.length,
        }
    }
}

export default CollectionGetters
