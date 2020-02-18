import { Vue, Prop, Component } from 'vue-property-decorator'
import { ISelected, IVModel} from '../_interfaces'

@Component
class ValueToggle extends Vue implements ISelected, IVModel {
    @Prop() value!: any;
    @Prop() on!: any;
    @Prop() off!: any;

    get classes() {
        return {
            selected: this.value === this.on
        }
    }

    protected click() {
        this.$emit('input', this.value === this.on ? this.off : this.on);
    }
}

export {
    ValueToggle
}

export default ValueToggle