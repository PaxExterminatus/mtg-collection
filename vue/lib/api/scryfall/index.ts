import { IQueryCardOracle } from './CardTypes/IQueryCardOracle'
import { IQueryCardTranslated } from './CardTypes/IQueryCardTranslated'
import { IResponseList } from './ResponseTypes/IResponseList'
import { IDataCard } from './CardTypes/IDataCard'
import { IDataCardTranslated } from './CardTypes/IDataCardTranslated'
import { LanguagesType, languages } from './EnumTypes/LanguagesType'

import { ScryfallSearchCard } from './ScryfallSearchCard'

type ScryfallObjectTypes = 'card' | 'list'
type ScryfallColorsTypes = 'W'
type ScryfallLegacyTypes = 'legal' | 'not_legal'
type ScryfallGamesTypes = 'mtgo' | 'paper'
type ScryfallRarityTypes = 'uncommon'
type ScryfallBorderTypes = 'black'

export {
    ScryfallSearchCard,

    IQueryCardOracle,
    IQueryCardTranslated,
    IResponseList,
    IDataCard,
    IDataCardTranslated,

    LanguagesType,
    languages,

    ScryfallObjectTypes,
    ScryfallColorsTypes,
    ScryfallLegacyTypes,
    ScryfallGamesTypes,
    ScryfallRarityTypes,
    ScryfallBorderTypes,
}