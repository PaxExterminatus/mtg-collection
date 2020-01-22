import { Vue, Prop } from 'vue-property-decorator'

class StatusSelector extends Vue {
    @Prop() value!: string;
    @Prop() list!: string[];
}

export {
    StatusSelector
}

export default StatusSelector