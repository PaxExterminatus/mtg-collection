import { StringExtends } from '@/library/string-filter/StringWebExtends'

type ItemsTypeVarieties = 'card' | 'token'

interface ItemDataFace {
    code: string
    number: string
    type: ItemsTypeVarieties
    lang: string
}

class ItemVModel implements ItemDataFace {
    protected _code: string = '';
    protected _number: string = '';
    public readonly type: ItemsTypeVarieties;
    public lang: string = 'ru';

    constructor(type: ItemsTypeVarieties) {
        this.type = type;
    }

    set code(code: string) {
        this._code = ' '; // reset vue v-model cache
        this._code = StringExtends(code).latinLetters.toUpperCase();
    }
    get code() {
        return this._code;
    }

    set number(number: string) {
        this._number = ' '; // reset vue v-model cache
        this._number = StringExtends(number).numbers;
    }
    get number() {
        return this._number;
    }

    toJson() {
        return {

        }
    }
}

class ItemVModelDefault extends ItemVModel {
    protected _code: string = 'AER';
    protected _number: string = '5';
}

export {
    ItemsTypeVarieties,
    ItemDataFace,
    ItemVModel,
    ItemVModelDefault,
}
