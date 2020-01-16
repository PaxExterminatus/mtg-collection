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
}

export {
    ICardModel,
    ICardImages,
}