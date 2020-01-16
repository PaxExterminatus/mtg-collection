<template>
    <a class="btn" :class="{'is-selected': value === equate}" @click="$emit('input', equate)">
        <slot>{{value}}</slot>
    </a>
</template>

<script lang="ts">
import { Vue,  Component, Prop} from 'vue-property-decorator'

@Component
export default class StateBtn extends Vue {
    @Prop() value!: string;
    @Prop() equate!: string;
}
</script>
