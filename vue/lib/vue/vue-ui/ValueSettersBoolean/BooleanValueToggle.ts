import { Prop, Component, Vue } from 'vue-property-decorator'
import { IVModel, ISelected} from '../_interfaces'

@Component
class BooleanValueToggle extends Vue implements IVModel, ISelected {
    @Prop({default: false}) readonly value!: boolean;

    get classes() {
        return {
            selected: this.value
        }
    }

    emitInput(): void {
        this.$emit('input', !this.value);
    }
}

export {
    BooleanValueToggle
}

export default BooleanValueToggle