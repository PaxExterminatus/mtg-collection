<template>
    <a class="btn" :class="classes" @click="emitInput">
        <slot></slot>
    </a>
</template>

<script lang="ts">
import { Component } from 'vue-property-decorator';
import BooleanValueToggle from './BooleanValueToggle'
import { IVModel, ISelected} from '../_interfaces'

@Component
export default class BtnBool extends BooleanValueToggle implements IVModel, ISelected {}
</script>