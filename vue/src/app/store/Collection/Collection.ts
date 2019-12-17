import store from "@/app/store"
import { ItemDataFace } from './CollectionItem'
import { CollectionMutations } from "./CollectionStore"


interface CollectionDataFace {
    cards: ItemDataFace[];
    tokens: ItemDataFace[];
}

interface CollectionActionFace {
    add(card: ItemDataFace): void
}

class CollectionEntity implements CollectionDataFace, CollectionActionFace {
    public cards: ItemDataFace[] = [];
    public tokens: ItemDataFace[] = [];

    add(card: ItemDataFace) {
        store.commit(CollectionMutations.mutations.add, card);
    }
}

export {
    CollectionDataFace,
    CollectionActionFace,
    CollectionEntity,
}
