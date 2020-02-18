import { Vue, Prop, Component } from 'vue-property-decorator'

@Component
class ValueSetter extends Vue {
    @Prop() value!: any;
    @Prop() set!: any;

    get classes() {
        return {
            selected: this.value === this.set
        }
    }

    click() {
        this.$emit('input', this.set);
    }
}

export {
    ValueSetter
}

export default ValueSetter