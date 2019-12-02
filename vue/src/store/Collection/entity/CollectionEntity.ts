import { Card, Collection, mutations as collectionMutations } from '@/store/Collection'
import storage from '../../index'

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
        storage.commit(collectionMutations.add, card);
    }
}

export {
    CollectionEntity,
}

export default CollectionEntity
