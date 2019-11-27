import { Actions } from 'vuex-smart-module'
import CollectionState from './CollectionState'
import CollectionGetters from './CollectionGetters'
import CollectionMutations from './CollectionMutations'

class CollectionActions extends Actions<CollectionState, CollectionGetters, CollectionMutations, CollectionActions> {
    save() {
        return new Promise( resolve => {
            console.log('save');
        })
    }
}

export default CollectionActions
