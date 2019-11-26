import { Getters } from 'vuex-smart-module'
import { CollectionState } from 'src/store/Collection/store/index'

class CollectionGetters extends Getters<CollectionState> {
    get counter() {
        return {
            cards: this.state.collection.cards.length,
            tokens: this.state.collection.tokens.length,
        }
    }
}

export default CollectionGetters
