import store from '../'
import axios from "axios";
import {CardDataFace} from './CollectionItem'
import {CollectionHistory} from './CollectionHistory'

interface CollectionDataFace {
    cards: CardDataFace[];
}

interface CollectionActionFace {
    add(card: CardDataFace): void
    load(data: CardDataFace[]): void
}

class CollectionEntity implements CollectionDataFace, CollectionActionFace {
    public cards: CardDataFace[] = [];
    public history: CollectionHistory = new CollectionHistory();

    load()
    {
        axios.get('http://localhost:9990/api/collection')
            .then( (resp) => {
                store.commit('collection.load', resp.data.cards);
                this.history.history = resp.data.history;
            });
    }

    add(card: CardDataFace)
    {
        axios.post('http://localhost:9990/api/collection', card)
            .then( (resp) => {
                store.commit('collection.add', card);
                this.history.add(card);
            });
    }
}

export {
    CollectionDataFace,
    CollectionActionFace,
    CollectionEntity,
}
