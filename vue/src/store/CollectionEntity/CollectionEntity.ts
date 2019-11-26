import store from '../'
import { CardFace } from './'

class CollectionEntity {
    constructor() {}
}

class CollectionStoreEntity {
    cards: CardFace[] = [];
    tokens: CardFace[] = [];
}

export {
    CollectionStoreEntity,
}
