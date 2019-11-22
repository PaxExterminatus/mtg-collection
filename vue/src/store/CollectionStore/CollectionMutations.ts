import { Mutations } from 'vuex-smart-module'
import { CollectionState } from './'
import { CollectionRawType } from '../CollectionEntity'

class CollectionMutations extends Mutations<CollectionState> {
    collectionSet(collection: CollectionRawType) {
        this.state.collection = collection;
    }
}

export default CollectionMutations
