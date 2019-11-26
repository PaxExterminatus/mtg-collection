import { Collection, Card } from '@/store/Collection'

class CollectionDataInitial implements Collection {
    cards: Card[] = [];
    tokens: Card[] = [];
}

export {
    CollectionDataInitial
}

export default CollectionDataInitial
