<template>
<div class="app-history">
    <div class="title h1">History</div>

    <div class="history-grid" v-if="history.length > 0" >

        <div class="history-item" v-for="item in history" v-if="item">

            <div class="history-action">{{item.action}}</div>

            <div class="card-code">
                {{item.object.number}} / {{item.object.code}} 🞄 {{item.object.lang}}
                <span v-if="item.object.foil">FOIL</span>
            </div>

        </div>

    </div>
</div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
    name: 'app-history',
    directives: {},
    components: {},
})

export default class AppHistory extends Vue {
    get history() {
        return this.$store.state.collection.history.history
    }
}
</script>