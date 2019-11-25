import {
    CollectionFace,
    CollectionDataInitial, CollectionStoreEntity,
} from '../CollectionEntity'

const collection =  new CollectionStoreEntity();

class CollectionState {
    //collection: CollectionFace = new CollectionDataInitial();
    collection: CollectionStoreEntity = new CollectionStoreEntity()
}

export default CollectionState
