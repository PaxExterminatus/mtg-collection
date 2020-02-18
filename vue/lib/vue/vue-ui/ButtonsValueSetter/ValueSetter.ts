import { Vue, Prop, Component } from 'vue-property-decorator'
import { ISelected, IVModel} from '../_interfaces'

@Component
class ValueSetter extends Vue implements ISelected, IVModel {
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