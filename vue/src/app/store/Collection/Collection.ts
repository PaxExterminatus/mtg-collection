import store from '@/app/store'
import { ItemDataFace } from './CollectionItem'
import { CollectionMutations } from './CollectionStore'


interface CollectionDataFace {
    cards: ItemDataFace[];
}

interface CollectionActionFace {
    add(card: ItemDataFace): void
    load(data: ItemDataFace[]): void
}

class CollectionEntity implements CollectionDataFace, CollectionActionFace {
    public cards: ItemDataFace[] = [];

    add(card: ItemDataFace) {
        store.commit(CollectionMutations.mutations.add, card);
    }

    load(data: ItemDataFace[]): void {
        this.cards = data;
    }
}

export {
    CollectionDataFace,
    CollectionActionFace,
    CollectionEntity,
}
