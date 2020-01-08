<template>
    <div class="application">

        <div class="counter-panel">
            cards: {{counter.cards}},
        </div>

        <div class="application-content-box">
            <nav class="aside-main">
                <router-link to="/">Adding</router-link>
                <router-link to="/collection">Collection</router-link>
                <router-link to="/exchange">Exchange</router-link>
                <router-link to="/about">About</router-link>
            </nav>
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
import HistoryFeed from "@/app/components/history-feed/history-feed.vue";
@Component({
    components: {HistoryFeed}
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
