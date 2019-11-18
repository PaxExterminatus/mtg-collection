import {Key} from './'

class Keyboard {
    readonly key: Key;
    constructor(event: KeyboardEvent) {
        this.key = new Key(event.code);
    }
}

export {
    Keyboard
}
