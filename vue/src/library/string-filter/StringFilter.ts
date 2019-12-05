import { RegexTemplates } from '../regex/RegexTemplates'

class StringFilter {
    private str: string;
    constructor(str: string) {
        this.str = str;
    }

    get numbers() {
        return this.str.replace( RegexTemplates.notNumber , '') || '';
    }
    get letters() {
        return this.str.replace( RegexTemplates.notLetters, '') || '';
    }

    get holdNumbers() {
        this.str = this.numbers;
        return this;
    }

    get holdLetters() {
        this.str = this.letters;
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
