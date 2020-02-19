<template>
    <label :for="id" :title="title">
        <input :value="value" @input="emitInput" type="checkbox" :id="id"/> <slot></slot>
    </label>
</template>

<script lang="ts">
import { Component, Prop } from 'vue-property-decorator';
import BooleanValueToggle from './BooleanValueToggle'

@Component
export default class CheckboxBool extends BooleanValueToggle {
    @Prop() title!: string;
    @Prop() id!: string;
}
</script>