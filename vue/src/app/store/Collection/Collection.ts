import store from '@/app/store'
import axios from "axios";
import {CardDataFace} from './CollectionItem'

interface CollectionDataFace {
    cards: CardDataFace[];
}

interface CollectionActionFace {
    add(card: CardDataFace): void
    load(data: CardDataFace[]): void
}

class CollectionEntity implements CollectionDataFace, CollectionActionFace {
    public cards: CardDataFace[] = [];

    load() {
        axios.get('http://localhost:9990/api/collection')
            .then( (resp) => {
                store.commit('collection.load', resp.data.cards);
            });
    }

    add(card: CardDataFace) {
        axios.post('http://localhost:9990/api/collection', card)
            .then( (resp) => {
                store.commit('collection.add', card);
            });
    }
}

export {
    CollectionDataFace,
    CollectionActionFace,
    CollectionEntity,
}
