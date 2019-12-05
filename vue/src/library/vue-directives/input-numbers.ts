import { DirectiveOptions } from 'vue'

const directive: DirectiveOptions = {
    inserted(el) {
        const inp = el as HTMLInputElement;
        inp.type = 'number';
    },
    update(el, binding) {
        const inp = el as HTMLInputElement;
        console.log('update', binding.value, inp.value);
    }
};

export default directive
