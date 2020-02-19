import { Vue, Prop, Component } from 'vue-property-decorator'
import { IVModel, ISelected} from '../_interfaces'

@Component
class ValueToggle extends Vue implements IVModel, ISelected {
    @Prop() readonly value!: any;
    @Prop() readonly on!: any;
    @Prop() readonly off!: any;

    get classes() {
        return {
            selected: this.value === this.on
        }
    }

    emitInput(): void {
        this.$emit('input', this.value === this.on ? this.off : this.on);
    }
}

export {
    ValueToggle
}

export default ValueToggle