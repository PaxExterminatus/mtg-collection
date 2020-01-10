import axios from 'axios'

type SupportedLanguages = 'en' | 'ru';

const options = {
    translateTo: SupportedLanguages = 'ru',
};

class ScryfallAPI {
    protected code: string;
    protected number: number;
    protected language: SupportedLanguages;
    protected translate: SupportedLanguages;

    constructor(code: string, number: string, language: SupportedLanguages, translate: SupportedLanguages = options.translateTo) {
        this.code = code.toLowerCase();
        this.number = +number;
        this.translate = translate;
    }

    get url() {
        return {
            oracle: `https://api.scryfall.com/cards/search?q=set:${this.set}+number:${this.number}`,
            printed: `https://api.scryfall.com/cards/search?q=set:${this.set}+number:${this.number}+lang:${this.translate}`,
        }
    }
}

export {
    ScryfallAPI
}

export default ScryfallAPI