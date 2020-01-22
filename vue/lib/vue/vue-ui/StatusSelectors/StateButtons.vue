<template>
<span>
    <state-btn v-for="item in list" @input="$emit('input', item)" :value="value" :equate="item">{{item}}</state-btn>
</span>
</template>

<script lang="ts">
import { Component } from 'vue-property-decorator'
import StatusSelector from './StatusSelector'
import { StateBtn } from 'lib/vue/vue-ui'

@Component({
    components: {StateBtn}
})
export default class StatusSelectors extends StatusSelector {}
</script>