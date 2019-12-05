class RegexTemplates {
    static get notNumber() {
        return /[^0-9]/g;
    }

    static get notLetters() {
        return /[^a-zA-Z]/g
    }
}

export {
    RegexTemplates,
}
