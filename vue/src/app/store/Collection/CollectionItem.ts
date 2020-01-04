import { StringExtends } from '@/library/string-filter/StringWebExtends'

type CardTypes = 'card' | 'token'
type CardLanguages = 'en' | 'ru'

interface CardDataFace {
    code: string
    number: string
    type: CardTypes
    lang: CardLanguages
    foil: boolean
}

class CardInputModel implements CardDataFace {
    protected data: CardDataFace = {
        code: '',
        number: '',
        type:'card',
        lang: 'ru',
        foil: false,
    };

    set code(code: string) {
        this.data.code = ' '; // reset vue v-model cache
        this.data.code = StringExtends(code).latinLetters.toUpperCase();
    }
    get code() {
        return this.data.code;
    }

    set number(number: string) {
        this.data.number = ' '; // reset vue v-model cache
        this.data.number = StringExtends(number).numbers;
    }
    get number() {
        return this.data.number;
    }

    get type() {
        return this.data.type;
    }
    set type(type) {
        this.data.type = type;
    }

    get lang() {
        return this.data.lang
    }
    set lang(lang) {
        this.data.lang = lang;
    }

    get foil() {
        return this.data.foil
    }
    set foil(foil) {
        this.data.foil = foil;
    }
}

export {
    CardTypes,
    CardLanguages,

    CardDataFace,

    CardInputModel,
}