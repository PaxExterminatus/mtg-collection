import {LanguagesType} from "lib/api/scryfall";

interface ICardPrices {
    usd: string | null
    foil: string | null
    eur: string | null
    tix: string | null
}

interface ICardImages {
    hq: boolean
    small: string
    normal: string
    large: string
    png: string
    artCrop: string
    borderCrop: string
}

interface ICardModel {
    name: string
    type: string
    text: string
    flower: string
    images: ICardImages
    lang: LanguagesType
    prices: ICardPrices
    // tests
    readonly appreciated: boolean
}

export {
    ICardModel,
    ICardImages,
    ICardPrices,
}