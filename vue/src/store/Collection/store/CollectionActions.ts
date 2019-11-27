import { Actions } from 'vuex-smart-module'
import { CollectionState, CollectionGetters, CollectionMutations } from './'

class CollectionActions extends Actions<CollectionState, CollectionGetters, CollectionMutations, CollectionActions> {
    save() {
        return new Promise( resolve => {
            console.log('save');
        })
    }
}

export default CollectionActions
