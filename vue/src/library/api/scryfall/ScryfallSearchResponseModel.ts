import {
    ScryfallCardModel
} from './'

interface ScryfallSearchResponseModel {
    has_more: boolean
    object: 'list'
    total_cards: 1
    data: ScryfallCardModel[]
}

export {
    ScryfallSearchResponseModel,
}
