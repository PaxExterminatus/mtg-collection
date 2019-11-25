import { CollectionFace, CardFace } from './'

class CollectionDataInitial implements CollectionFace {
    cards: CardFace[] = [];
    tokens: CardFace[] = [];
}

export {
    CollectionDataInitial
}

export default CollectionDataInitial
