<template>
<div class="history-feed">
    <div class="title h1">History</div>

    <div v-for="it in history">
        <div>{{it.action.toUpperCase()}}: {{it.object.code}} / {{it.object.number}}</div>
    </div>
</div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import { ScryfallCard } from '@/library/api/scryfall'

@Component({
    directives: {},
    components: {},
})

export default class HistoryFeed extends Vue {
    get history() {
        return this.$store.state.collection.history.history
    }
}
</script>