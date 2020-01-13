// Interfaces
import {ScryfallCardModel} from './ScryfallCardModel'
import {ScryfallListModel} from './ScryfallListModel'
import { SearchQueryFace } from './ScryfallQueryModel'
// Classes
import {ScryfallCard} from './ScryfallCard'
import {ScryfallSearch} from './ScryfallSearch'
// Types
type SupportedLanguages = 'en' | 'ru'
type ScryfallObjectTypes = 'card' | 'list'
type ScryfallColorsTypes = 'W'
type ScryfallLegacyTypes = 'legal' | 'not_legal'
type ScryfallGamesTypes = 'mtgo' | 'paper'
type ScryfallRarityTypes = 'uncommon'
type ScryfallBorderTypes = 'black'

export {
    ScryfallCardModel,
    ScryfallListModel,
    SearchQueryFace,

    ScryfallObjectTypes,
    SupportedLanguages,
    ScryfallColorsTypes,
    ScryfallLegacyTypes,
    ScryfallGamesTypes,
    ScryfallRarityTypes,
    ScryfallBorderTypes,

    ScryfallCard,
    ScryfallSearch,
}
