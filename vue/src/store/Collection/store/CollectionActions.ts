import axios from "axios";
import { Actions } from 'vuex-smart-module'
import { CollectionState, CollectionGetters, CollectionMutations } from 'src/store/Collection/store/index'

class CollectionActions extends Actions<CollectionState, CollectionGetters, CollectionMutations, CollectionActions> {
    save() {
        return new Promise( resolve => {
            console.log('save');
        })
    }
}

export default CollectionActions
