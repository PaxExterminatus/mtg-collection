class Key {
    code: string;
    constructor(code : string) {
        this.code = code;
    }

    get tab() {
        return this.code === 'Tab';
    }
}

export {
    Key
}
