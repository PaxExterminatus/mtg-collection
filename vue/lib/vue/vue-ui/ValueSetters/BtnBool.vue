<template>
    <a class="btn" :class="classes" @click="emitInput">
        <slot></slot>
    </a>
</template>

<script lang="ts">
import { Component } from 'vue-property-decorator';
import ValueToggleBool from './ValueToggleBool'

@Component
export default class BtnToggleBoolean extends ValueToggleBool {}
</script>