type ItemsTypeVarieties = 'card' | 'token'

interface ItemDataFace {
    code: string
    number: number
    type: ItemsTypeVarieties
}

class ItemDataModel implements ItemDataFace {
    public code: string = '';
    public number: number = 0;
    public type: ItemsTypeVarieties;

    constructor(type: ItemsTypeVarieties) {
        this.type = type;
    }
}

export {
    ItemsTypeVarieties,
    ItemDataFace,
    ItemDataModel,
}
