import { DirectiveOptions } from 'vue'
import { StrFilter } from '@/library/string-filter/StringFilter'
import { SequenceLoop } from '@/library/typescript/sequences/Sequence'
import logger from "vuex/dist/logger";

const onlyNumbers: DirectiveOptions = {
    inserted(el) {
        const inp = el as HTMLInputElement;
    },

    update(el, binding) {
        const inp = el as HTMLInputElement;
        inp.value = StrFilter(inp.value).latinLetters.toUpperCase();
        console.log('update', binding.value, inp.value);
    }
};

const tabTrap: DirectiveOptions = {
    inserted(el)
    {
        const els: NodeList = el.querySelectorAll('[tabindex]');
        const seq = new SequenceLoop(0, els.length - 1);
        const firstElement = els[seq.current] as HTMLElement;

        firstElement.focus();

        document.addEventListener('keydown', (e: KeyboardEvent) =>
        {
            if (e.key === 'Tab')
            {
                if (e.shiftKey) seq.prev();
                else seq.next();

                const focused = els[seq.current] as HTMLElement;
                focused.focus();
            }
        });
    },

    update(el, binding) {
        const inp = el as HTMLInputElement;
        console.log(inp);
    }
};

export {
    tabTrap,
    onlyNumbers,
}
