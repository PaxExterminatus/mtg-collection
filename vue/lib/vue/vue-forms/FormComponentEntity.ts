import Sequence from 'src/lib/typescript/sequences'

import {Vue} from 'vue/types/vue'
import {Keyboard} from 'src/lib/keys'
import {VueComponentEntity, VueEvents} from 'src/lib/vue/index'
import WindowsTabTrap from 'src/lib/window/WindowsTabTrap'

class FormComponentEntity extends VueComponentEntity {
    private trap: WindowsTabTrap | null = null;

    // private keysHandler = (event: KeyboardEvent) => {
    //     const keys = new Keyboard(event);
    //
    //     if (keys.key.tab) {
    //         let idx: number = this.trap.seq.next().current;
    //         let el: HTMLElement = this.trap.items[idx] as HTMLElement;
    //         el.focus();
    //     }
    // };

    mounted() {
        const items = this?.vue?.$el.querySelectorAll('[tabindex]');
        if (items) this.trap = new WindowsTabTrap(items);

        //this.trap.addEvent(this.vue, this.keysHandler);
    }
}

function formEntityInit(entity: FormComponentEntity, vue: Vue) {
    return entity.init(vue);
}

export {
    FormComponentEntity,
    formEntityInit,
}

export default FormComponentEntity