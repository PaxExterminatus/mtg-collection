import { StringExtends } from '@/library/string-filter/StringWebExtends'

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
        this._code = StringExtends(code).latinLetters.toUpperCase();
    }
    get code() {
        return this._code;
    }

    set number(number: string) {
        this._number = ' '; // disable vue v-model cache
        this._number = StringExtends(number).numbers;
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

interface ScryfallCardModel {
    object: 'card'
    name: string
    lang: 'en' | 'ru'
    released_at: string
    highres_image: boolean
    image_uris: {
        small: string
        normal: string
        large: string
        png: string
        art_crop: string
        border_crop: string
    }
    set: string
    set_name: string
    rarity: string
    type_line: string
    printed_type_line: string
    oracle_text: string
    flavor_text: string
    printed_text: string
}

interface ScryfallSearchResponseFace {
    data: ScryfallCardModel[]
    has_more: boolean
    object: 'list'
    total_cards: 1
}

class ScryfallCard  {
    constructor(private model: ScryfallCardModel) {}

    get object() {
        return this.model.object
    }

    get name() {
        return this.model.name
    }

    get lang() {
        return this.model.lang
    }

    get releasedDate() {
        return this.model.released_at
    }

    get images() {
        return this.model.image_uris
    }

    get set() {
        return {
            code: this.model.set.toUpperCase(),
            name: this.model.set_name,
        }
    }

    get rarity() {
        return this.model.rarity
    }

    get type() {
        return {
            line: this.model.type_line,
            printed: this.model.printed_type_line,
        }
    }

    get text() {
        return {
            oracle: StringExtends(this.model.oracle_text).getSlashNToBr,
            flavor: this.model.flavor_text,
            printed: StringExtends(this.model.printed_text).getSlashNToBr,
        }
    }
}

class ScryfallSearchResponse {
    private count: number;
    private readonly items: ScryfallCardModel[]; // todo use card interface
    constructor(response: ScryfallSearchResponseFace) {
        this.count = response.total_cards;
        this.items = response.data;
    }

    get card() {
        return new ScryfallCard(this.items[0]);
    }
}


// https://api.scryfall.com/cards/search?q=set:aer+number:5

export {
    ItemsTypeVarieties,
    ItemDataFace,
    ItemVModel,
    ItemVModelDefault,
    CardInfo,
    ScryfallSearchResponse,
    ScryfallCardModel,
}
