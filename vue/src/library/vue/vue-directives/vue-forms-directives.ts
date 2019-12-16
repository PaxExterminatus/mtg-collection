import { DirectiveOptions } from 'vue'
import { SequenceLoop } from '@/library/typescript/sequences/Sequence'


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
                e.preventDefault();

                if (e.shiftKey) seq.prev();
                else seq.next();

                const focused = els[seq.current] as HTMLElement;
                focused.focus();
            }
        });
    },

    update(el, binding) {
        const inp = el as HTMLInputElement;
    }
};

export {
    tabTrap,
}
