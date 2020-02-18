<template>
    <a class="btn" :class="classes" @click="emitInput">
        <slot></slot>
    </a>
</template>

<script lang="ts">
import {Component} from 'vue-property-decorator';
import ValueToggle from './ValueToggle'

@Component
export default class BtnToggle extends ValueToggle {}
</script>