import { ItemsTypes, ItemDataStructure } from './CollectionTypes'

class CollectionItemInput implements ItemDataStructure {
    public code: string = '';
    public number: number = 0;
    public type: ItemsTypes;

    constructor(type: ItemsTypes) {
        this.type = type;
    }
}

export {
    CollectionItemInput,
}
