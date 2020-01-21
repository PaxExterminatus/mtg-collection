<template>
    <div class="application">

        <div class="main-panel">
            <a class="btn">M</a>
            <a class="btn to-right">H</a>
        </div>

        <div class="application-content-box">
            <nav class="aside-main">
                <router-link to="/" :class="{'is-selected': $route.path === '/'}">adding</router-link>
                <router-link to="/collection" :class="{'is-selected': $route.path === '/collection'}">collection</router-link>
                <router-link to="/exchange" :class="{'is-selected': $route.path === '/exchange'}">exchange</router-link>
                <router-link to="/about" :class="{'is-selected': $route.path === '/about'}">about</router-link>
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
import HistoryFeed from "./history-feed/history-feed.vue";

@Component({
    components: {HistoryFeed},
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
