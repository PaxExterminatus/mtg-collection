import { Prop, Component } from 'vue-property-decorator'
import ValueToggle from './ValueToggle'

@Component
class ValueToggleBool extends ValueToggle {
    @Prop() readonly value!: boolean;
    @Prop({default: true}) readonly on!: boolean;
    @Prop({default: false}) readonly off!: boolean;
}

export {
    ValueToggleBool
}

export default ValueToggleBool