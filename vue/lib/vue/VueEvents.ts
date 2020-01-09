import {Vue} from "vue/types/vue"

type events = 'keyup' | 'click' | string
type ElementTarget = Window | Document | Element

class VueEvents {
    static add(vue: Vue, el: ElementTarget, type: events, listener: EventListenerOrEventListenerObject)
    {
        el.addEventListener(type, listener);
        vue.$once("hook:beforeDestroy", () => {
            el.removeEventListener(type, listener);
        });
    }
}

export {
    VueEvents,
}
