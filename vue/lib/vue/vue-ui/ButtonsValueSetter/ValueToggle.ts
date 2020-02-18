import { Vue, Prop, Component } from 'vue-property-decorator'

@Component
class ValueToggle extends Vue {
    @Prop() value!: any;
    @Prop() on: any = true;
    @Prop() off: any = false;

    protected get classes() {
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