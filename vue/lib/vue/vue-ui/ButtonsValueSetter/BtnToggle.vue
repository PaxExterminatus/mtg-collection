<template>
    <a class="btn" :class="classes" @click="emitInput">
        <slot></slot>
    </a>
</template>

<script lang="ts">
import ValueToggle from './ValueToggle'
import { IVModel, ISelected } from '../_interfaces'

export default class BtnToggle extends ValueToggle implements IVModel, ISelected {}
</script>