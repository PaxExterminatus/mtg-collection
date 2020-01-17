import {EnumLanguages} from "lib/api/scryfall";

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
    lang: EnumLanguages
}

export {
    ICardModel,
    ICardImages,
}