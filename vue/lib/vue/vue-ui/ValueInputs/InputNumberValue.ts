import {Vue, Component, Prop, Watch} from 'vue-property-decorator'
import {WebString} from 'lib/advanced/strings'
import {IVModel} from 'lib/vue/vue-ui/_interfaces'
// todo remake this
@Component
class InputNumberValue extends Vue implements IVModel {
    @Prop({default: ''}) readonly value!: string;

    protected inputValue: string = this.value;

    protected inputHandler(ev: InputEvent) {
        const input = ev.currentTarget as HTMLInputElement;
        this.inputValue = this.inputProcessing(input);
        this.emitInput();
    }

    @Watch('value')
    protected valueOnChange(val: string) {
        this.inputValue = val;
    }

    protected inputProcessing(input: HTMLInputElement) {
        let value = new WebString(input.value).numbers;
        if (+value < 0) value = '0';
        input.value = value;
        return value;
    }

    emitInput(): void {
        this.$emit('input', this.inputValue);
    }

    increase() {
        this.inputValue = String(+this.inputValue + 1);
    }

    decrease() {
        this.inputValue = String(+this.inputValue - 1);
    }
}

export {
    InputNumberValue
}

export default InputNumberValue