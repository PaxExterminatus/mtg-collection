<template>
<div class="app">
    <app-actions/>
    <app-menu/>
    <app-content/>
    <app-history/>
</div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { AppActions, AppHistory, AppMenu, AppContent } from './app-template'

@Component({
    components: {AppContent, AppActions, AppHistory, AppMenu},
})
export default class App extends Vue {}
</script>