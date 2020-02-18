import { Vue, Prop, Component } from 'vue-property-decorator'
import {ISelected} from './ISelected'

@Component
class ValueToggle extends Vue implements ISelected {
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