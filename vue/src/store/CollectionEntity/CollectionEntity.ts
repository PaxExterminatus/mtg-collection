import { Card, Collection } from './'

class CollectionEntity implements Collection {
    cards: Card[] = [];
    tokens: Card[] = [];
}

export {
    CollectionEntity,
}

export default CollectionEntity
