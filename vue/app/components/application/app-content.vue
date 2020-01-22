<template>
<keep-alive>
    <router-view class="app-content"/>
</keep-alive>
</template>

<script lang="ts">
import {Vue, Component} from 'vue-property-decorator'

@Component
export default class AppContent extends Vue {}
</script>
