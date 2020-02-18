<template>
    <a class="btn" :class="classes" @click="emitInput">
        <slot></slot>
    </a>
</template>

<script lang="ts">
import ValueSetter from './ValueSetter'

export default class BtnSetter extends ValueSetter {}
</script>