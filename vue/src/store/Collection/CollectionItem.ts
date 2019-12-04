type ItemsTypeVarieties = 'card' | 'token'

interface ItemDataFace {
    code: string
    number: number
    type: ItemsTypeVarieties
}

class ItemDataModel implements ItemDataFace {
    private _code: string = '';
    private _number: number = 0;
    public type: ItemsTypeVarieties;

    constructor(type: ItemsTypeVarieties) {
        this.type = type;
    }

    set code(code: string) {
        this._code = code.toUpperCase();
    }
    get code() {
        return this._code;
    }

    get number(): number {
        return this._number;
    }
    set number(value: number) {
        this._number = value;
    }
}

export {
    ItemsTypeVarieties,
    ItemDataFace,
    ItemDataModel,
}
