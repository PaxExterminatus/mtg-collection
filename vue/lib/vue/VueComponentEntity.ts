import {Vue} from 'vue/types/vue';

class VueComponentEntity {
    protected vue: Vue | null = null;
    init(vue: Vue) {
        this.vue = vue;
        return this;
    }
}

export {
    VueComponentEntity,
}
