<template>
    <input :value="inputValue" @input="inputHandler" @keydown.arrow-up="increase" @keydown.arrow-down="decrease"/>
</template>

<script lang="ts">
    import InputNumberValue from './InputNumberValue';

    export default class InputNumber extends InputNumberValue {
    }
</script>