import { DirectiveOptions } from 'vue'
import { StrFilter } from '@/library/string-filter/StringFilter'

const directive: DirectiveOptions = {
    inserted(el) {
        const inp = el as HTMLInputElement;
    },

    update(el, binding) {
        const inp = el as HTMLInputElement;
        inp.value = StrFilter(inp.value).latinLetters.toUpperCase();
        console.log('update', binding.value, inp.value);
    }
};

export default directive
