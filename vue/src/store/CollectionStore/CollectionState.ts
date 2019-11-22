import axios from "axios";
import { CollectionRawType } from '../CollectionEntity'

let collectionData: CollectionRawType;

(async function waitCollectionData() {
    await axios.get('/api/collection/index.json')
        .then( resp => {
            collectionData = resp.data;
        });
})();

class CollectionState {
    collection: CollectionRawType = collectionData;
}

export default CollectionState
