<template>
<span>
    <template v-for="(item, key) in list">
        <btn-setter @input="input(item)" :value="value" :set="item" :key="key">{{item}}</btn-setter>
    </template>
</span>
</template>

<script lang="ts">
import { Component } from 'vue-property-decorator'
import StatusSelector from './StatusSelector'
import { BtnSetter } from 'lib/vue/vue-ui'

@Component({
    components: { BtnSetter }
})
export default class StatusSelectors extends StatusSelector {
    input(item: any) {
        this.$emit('input', item);
    }
}
</script>