import { webstr } from 'lib/advanced/strings/WebString'
import { EnumLanguages } from "lib/api/scryfall";

type CardTypes = 'card' | 'token'

interface CardDataFace {
    code: string
    number: string
    type: CardTypes
    lang: EnumLanguages
    foil: boolean
}

class CardInputModel implements CardDataFace {
    protected data: CardDataFace = {
        code: '',
        number: '',
        type:'card',
        lang: EnumLanguages.ru,
        foil: false,
    };

    set code(code: string) {
        this.data.code = ' '; // reset vue v-model cache
        this.data.code = webstr(code).latinLetters.toUpperCase();
    }
    get code() {
        return this.data.code;
    }

    set number(number: string) {
        this.data.number = ' '; // reset vue v-model cache
        this.data.number = webstr(number).numbers;
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

    get json(): CardDataFace {
        return {
            code: this.data.code,
            number: this.data.number,
            type: this.data.type,
            lang: this.data.lang,
            foil: this.data.foil,
        }
    }

    get asNumber() {
        return +this.number;
    }

    numberPlus() {
        this.number = String(this.asNumber + 1);
    }
    numberMinus() {
        if (this.asNumber <= 1) this.number = '1';
        else this.number = String( this.asNumber - 1)
    }
}

export {
    CardTypes,
    CardDataFace,
    CardInputModel,
}