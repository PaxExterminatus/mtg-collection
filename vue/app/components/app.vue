<template>
    <div class="application">

        <div class="counter-panel">
            cards: {{counter.cards}},
        </div>

        <div class="application-content-box">
            <aside-main/>

            <keep-alive>
                <router-view class="application-content"/>
            </keep-alive>

            <div>
                <history-feed/>
            </div>
        </div>

    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HistoryFeed from "./history-feed/history-feed.vue";
import AsideMain from "./navs/aside-main.vue";

@Component({
    components: {AsideMain, HistoryFeed}
})
export default class App extends Vue {
    get counter() {
        return {
            cards: this.$store.state.collection.cards.length,
        }
    }

    get collection() {
        return this.$store.state.collection;
    }
}
</script>
