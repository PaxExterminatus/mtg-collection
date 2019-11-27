import { Card, Collection } from '../index'
import { mutations } from '../'
import store from '@/store'

class CollectionEntity implements Collection {
    cards: Card[] = [];
    tokens: Card[] = [];

    get counter() {
        return {
            cards: this.cards.length,
            tokens: this.tokens.length,
        }
    }

    add(card: Card) {
        store.commit(mutations.add, card);
    }
}

export {
    CollectionEntity,
}

export default CollectionEntity
