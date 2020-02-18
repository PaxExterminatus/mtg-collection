import { Vue, Prop, Component } from 'vue-property-decorator'
import {ISelected} from './ISelected'

@Component
class ValueSetter extends Vue implements ISelected {
    @Prop() value!: any;
    @Prop() set!: any;

    get classes() {
        return {
            selected: this.value === this.set
        }
    }

    protected click() {
        this.$emit('input', this.set);
    }
}

export {
    ValueSetter
}

export default ValueSetter