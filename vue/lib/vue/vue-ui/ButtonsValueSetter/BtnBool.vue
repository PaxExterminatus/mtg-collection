<template>
    <a class="btn" :class="classes" @click="emitInput">
        <slot></slot>
    </a>
</template>

<script lang="ts">
import {Prop, Component} from 'vue-property-decorator';
import ValueToggle from './ValueToggle'

@Component
export default class BtnToggleBoolean extends ValueToggle {
    @Prop() readonly value!: boolean;
    @Prop({default: true}) readonly on!: boolean;
    @Prop({default: false}) readonly off!: boolean;
}
</script>