// import { ScryfallCard } from '@/library/api/scryfall';
import { CardDataFace } from './CollectionItem';
import axios from 'axios'

type CollectionHistoryActions = 'add' | 'remove';

interface HistoryDataFace {
    action: CollectionHistoryActions,
    object: CardDataFace
}

class CollectionHistory {
    public history: HistoryDataFace[] = [];

    constructor() {
        // axios.get('http://localhost:9990/api/history').then(resp => {
        //     this.history = resp.data.history
        // })
    }

    add(card: CardDataFace)
    {
        this.history.unshift({
            action: "add",
            object: card
        })
    }
}

export {
    CollectionHistory
}