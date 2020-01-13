import {
    ScryfallCardModel
} from './'

interface ScryfallListModel {
    has_more: boolean
    object: 'list'
    total_cards: 1
    data: ScryfallCardModel[]
}

export {
    ScryfallListModel,
}
