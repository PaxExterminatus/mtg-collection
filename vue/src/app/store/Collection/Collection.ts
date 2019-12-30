import store from '@/app/store'
import axios from "axios";
import {ItemDataFace} from './CollectionItem'

interface CollectionDataFace {
    cards: ItemDataFace[];
}

interface CollectionActionFace {
    add(card: ItemDataFace): void
    load(data: ItemDataFace[]): void
}

class CollectionEntity implements CollectionDataFace, CollectionActionFace {
    public cards: ItemDataFace[] = [];

    load():void
    {
        axios.get('http://localhost:9990/api/collection')
            .then( (resp) => {
                store.commit('collection.load', resp.data.cards);
            });
    }

    add(card: ItemDataFace):void
    {
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
