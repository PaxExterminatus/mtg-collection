<template>
    <a class="btn" :class="classes" @click="click">
        <slot></slot>
    </a>
</template>

<script lang="ts">
import ValueToggle from './ValueToggle'

export default class BtnToggle extends ValueToggle {}
</script>