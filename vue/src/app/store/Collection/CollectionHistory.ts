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