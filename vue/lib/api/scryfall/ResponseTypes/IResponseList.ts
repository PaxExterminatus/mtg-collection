interface IResponseList<TDataCard> {
    has_more: boolean
    object: 'list'
    total_cards: 1
    data: TDataCard[]
}

export {
    IResponseList,
}
