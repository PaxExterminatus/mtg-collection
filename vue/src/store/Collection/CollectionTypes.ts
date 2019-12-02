type ItemsTypes = string | 'card' | 'token'

interface ItemDataStructure {
    code: string
    number: number
    type: ItemsTypes
}

interface CollectionDataStructure {
    cards: ItemDataStructure[]
    tokens: ItemDataStructure[]

}
export {
    ItemsTypes,
    ItemDataStructure,
    CollectionDataStructure,
}
