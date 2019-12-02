import { Actions } from 'vuex-smart-module'
import { CollectionState, CollectionGetters, CollectionMutations } from '@/store/Collection'
import { CardEntity } from '../'

class CollectionActions extends Actions<CollectionState, CollectionGetters, CollectionMutations, CollectionActions> {

}

export default CollectionActions
