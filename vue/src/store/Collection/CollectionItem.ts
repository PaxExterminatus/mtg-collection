import { StrFilter } from '@/library/string-filter/StringFilter'

type ItemsTypeVarieties = 'card' | 'token'

interface ItemDataFace {
    code: string
    number: string
    type: ItemsTypeVarieties
}

class ItemVModel implements ItemDataFace {
    protected _code: string = '';
    protected _number: string = '';
    public readonly type: ItemsTypeVarieties;

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

class ItemVModelDefault extends ItemVModel {
    protected _code: string = 'AER';
    protected _number: string = '5';
}

class CardInfo {
    constructor(private item: ItemDataFace) {}

    get url() {
        return {
            scryfall: {
                en: `https://scryfall.com/card/${this.item.code.toLowerCase()}/${this.item.number}/`,
                ru: `https://scryfall.com/card/${this.item.code.toLowerCase()}/${this.item.number}/ru`
            }
        };
    }
}

class ScryfallInfo {

}


// https://api.scryfall.com/cards/search?q=set:aer+number:5

export {
    ItemsTypeVarieties,
    ItemDataFace,
    ItemVModel,
    ItemVModelDefault,
    CardInfo,
}
