<template>
<div class="app-actions">
    <a class="btn" title="Menu">M</a>
    <a class="btn to-right" title="History">H</a>
</div>
</template>

<script lang="ts">
import {Vue, Component} from 'vue-property-decorator'

@Component
export default class AppActions extends Vue {}
</script>