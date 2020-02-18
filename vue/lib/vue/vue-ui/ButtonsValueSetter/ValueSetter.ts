import { Vue, Prop, Component } from 'vue-property-decorator'

@Component
class ValueSetter extends Vue {
    @Prop() value!: any;
    @Prop() set!: any;

    protected get classes() {
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