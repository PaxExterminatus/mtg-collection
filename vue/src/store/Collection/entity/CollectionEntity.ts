import { Card, Collection } from '../index'

class CollectionEntity implements Collection {
    cards: Card[] = [];
    tokens: Card[] = [];
}

export {
    CollectionEntity,
}

export default CollectionEntity
