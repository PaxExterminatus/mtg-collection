import { RegexTemplates } from '../../regex/RegexTemplates'

class WebString extends String {
    private str: string;
    constructor(str: string) {
        super();
        this.str = str;
    }

    get numbers() {
        return this.str.replace( RegexTemplates.notNumber , '') || '';
    }
    get latinLetters() {
        return this.str.replace( RegexTemplates.notLatinLetters, '') || '';
    }

    get holdNumbers() {
        this.str = this.numbers;
        return this;
    }

    get holdLetters() {
        this.str = this.latinLetters;
        return this;
    }

    get useSlashNToBr() {
        this.str = this.str?.replace(/\n/g, "<br>");
        return this;
    }

    get getSlashNToBr() {
        return this.str?.replace(/\n/g, "<br>");
    }


    get value() {
        return this.str;
    }
}

function webstr(str: string) {
    return new WebString(str);
}

export {
    WebString,
    webstr,
}