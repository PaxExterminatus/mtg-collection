import { Card, CollectionTypes } from '@/store/Collection'

class CardEntity implements Card {
    code: string = '';
    number: number = 0;
    collectionType: CollectionTypes = 'card';
}

class TokenEntity extends CardEntity {
    collectionType: CollectionTypes = 'token';
}

export {
    CardEntity
}

export default CardEntity
