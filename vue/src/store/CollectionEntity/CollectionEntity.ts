import store from '../'

class CollectionEntity {
    constructor() {}
}

class CollectionStoreEntity {
    get counter() {
        return store.getters.counter;
    }
}

export {
    CollectionStoreEntity,
}
