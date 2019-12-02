type CollectionTypes = string | 'card' | 'token'

interface Card {
    code: string
    number: number
    collectionType: CollectionTypes
}

export {
    Card,
    CollectionTypes,
}
