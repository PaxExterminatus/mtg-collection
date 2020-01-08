<template>
<div class="history-feed" v-if="history.length > 0">
    <div class="title h1">History</div>

    <div v-for="it in history">

        <div class="flex-tbl" v-if="it">
            <div>{{it.action}}</div>
            <div>{{it.object.number}}</div>
            <div>{{it.object.code}} • {{it.object.lang}}</div>
            <div v-if="it.object.foil">FOIL</div>
        </div>

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