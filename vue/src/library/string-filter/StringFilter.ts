import { RegexTemplates } from '../regex/RegexTemplates'

class StringFilter {
    private str: string;
    constructor(str: string) {
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

    get value() {
        return this.str;
    }
}

function StrFilter(str: string) {
    return new StringFilter(str);
}

export {
    StringFilter,
    StrFilter,
}

export default StringFilter
