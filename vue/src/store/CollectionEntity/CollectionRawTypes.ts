type CardRawType = {
    code: string
    number: number
}

type CollectionRawType = {
    cards: CardRawType[]
    tokens: CardRawType[]
};

export {
    CardRawType,
    CollectionRawType
}
