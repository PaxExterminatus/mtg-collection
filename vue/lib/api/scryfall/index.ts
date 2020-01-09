import {ScryfallCardModel} from './ScryfallCardModel'
import {ScryfallSearchResponseModel} from './ScryfallSearchResponseModel'

import {ScryfallCard} from './ScryfallCard'

type ScryfallObjectTypes = 'card' | 'list'
type ScryfallLanguagesTypes = 'en' | 'ru'
type ScryfallColorsTypes = 'W'
type ScryfallLegacyTypes = 'legal' | 'not_legal'
type ScryfallGamesTypes = 'mtgo' | 'paper'
type ScryfallRarityTypes = 'uncommon'
type ScryfallBorderTypes = 'black'

export {
    ScryfallCardModel,
    ScryfallSearchResponseModel,

    ScryfallObjectTypes,
    ScryfallLanguagesTypes,
    ScryfallColorsTypes,
    ScryfallLegacyTypes,
    ScryfallGamesTypes,
    ScryfallRarityTypes,
    ScryfallBorderTypes,

    ScryfallCard,
}
