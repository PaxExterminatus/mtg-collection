<template>
    <label :for="id" :title="title" class="checkbox-bool-component">
        <input :value="value" @input="emitInput" type="checkbox" :id="id"/> <slot></slot>
    </label>
</template>

<script lang="ts">
import { Component, Prop } from 'vue-property-decorator';
import ValueToggleBool from './ValueToggleBool'

@Component
export default class CheckboxBool extends ValueToggleBool {
    @Prop() title!: string;
    @Prop() id!: string;
}
</script>

<style scoped>
    .checkbox-bool-component {
        user-select: none;
    }
</style>