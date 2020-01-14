import { CardFace } from './'

class CardModelLayout {
    public oracle: CardFace | null = null;
    public printed: CardFace | null = null;
    public translate: CardFace | null = null;

    constructor() {}
}

export {
    CardModelLayout,
    CardFace,
}

export default CardModelLayout