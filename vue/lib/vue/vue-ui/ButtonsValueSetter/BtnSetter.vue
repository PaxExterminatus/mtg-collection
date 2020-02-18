<template>
    <a class="btn" :class="classes" @click="click">
        <slot></slot>
    </a>
</template>

<script lang="ts">
import ValueSetter from './ValueSetter'
import { IVModel, ISelected } from '../_interfaces'

export default class BtnSetter extends ValueSetter implements IVModel, ISelected {}
</script>