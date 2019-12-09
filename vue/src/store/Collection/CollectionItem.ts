import { StrFilter } from '@/library/string-filter/StringFilter'

type ItemsTypeVarieties = 'card' | 'token'

interface ItemDataFace {
    code: string
    number: string
    type: ItemsTypeVarieties
}

class ItemVModel implements ItemDataFace {
    private _code: string = '';
    private _number: string = '';
    public type: ItemsTypeVarieties;

    constructor(type: ItemsTypeVarieties) {
        this.type = type;
    }

    set code(code: string) {
        this._code = ' '; // disable vue v-model cache
        this._code = StrFilter(code).latinLetters.toUpperCase();
    }
    get code() {
        return this._code;
    }

    set number(number: string) {
        this._number = ' '; // disable vue v-model cache
        this._number = StrFilter(number).numbers;
    }
    get number() {
        return this._number;
    }
}

class CardInfo {
    constructor(private item: ItemDataFace, private language: string = '') {}

    get id() {
        return `${this.item.code}/${this.item.number}`
    }

    get link() {
        return `https://scryfall.com/card/${this.item.code}/${this.item.number}`
    }
}

export {
    ItemsTypeVarieties,
    ItemDataFace,
    ItemVModel,
    CardInfo,
}
